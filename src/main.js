const callToActionButton = document.getElementById('call-to-action');
const secondSection = document.querySelector('.view--second');

callToActionButton.addEventListener('click', () => secondSection.scrollIntoView())

// intersection observers
const secondContent = document.querySelector('.view-content--second');
const secondHeader = document.querySelector('.more-about-me__header');
const secondParagraph1 = document.querySelector('.more-about-me__paragraph-1');
const secondParagraph2 = document.querySelector('.more-about-me__paragraph-2');
const secondPicture = document.querySelector('.profile-picture');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // trigger animations
      secondHeader.classList.add('typewriter-name', 'typewriter-name--mam');
      secondParagraph1.classList.add('fadeable', 'fadeable--1');
      secondParagraph2.classList.add('fadeable', 'fadeable--2');
      secondPicture.classList.add('fadeable', 'fadeable--3');
    }
  })
});

observer.observe(secondContent);
