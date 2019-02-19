(function () {
  let cards = document.querySelectorAll('.memory-card')

  let hasFlippedCard = false,
      lockBoard = false,
      firstCard,
      secondCard

  function flipCard () {
    if (lockBoard) return false
    if (this === firstCard) return false

    this.classList.add('flip')

    if (!hasFlippedCard) {
      hasFlippedCard = true
      firstCard = this
      return false
    }
    secondCard = this
    checkForMatch()
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
    isMatch ? disableCard() : unflipCard()
  }

  function disableCard () {
    firstCard.removeEventListener('click', flipCard, false)
    secondCard.removeEventListener('click', flipCard, false)
    resetBoard()
  }

  function resetBoard () {
    hasFlippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null
  }

  function unflipCard () {
    lockBoard = true
    setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
      resetBoard()
    }, 1500)
  }

  cards.forEach(card => {
    card.addEventListener('click', flipCard, false)
  })
})()