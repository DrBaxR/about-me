const callToActionButton = document.getElementById('call-to-action');
const secondButton = document.getElementById('second-button');
const thirdButton = document.getElementById('third-button');

const secondSection = document.querySelector('.view--second');
const thirdSection = document.querySelector('.view--third');
const fourthSection = document.querySelector('.view--last');

callToActionButton.addEventListener('click', () => secondSection.scrollIntoView());
secondButton.addEventListener('click', () => thirdSection.scrollIntoView());
thirdButton.addEventListener('click', () => fourthSection.scrollIntoView());

// intersection observers
const secondContent = document.querySelector('.view-content--second');
const secondHeader = document.querySelector('.more-about-me__header');
const secondParagraph1 = document.querySelector('.more-about-me__paragraph-1');
const secondParagraph2 = document.querySelector('.more-about-me__paragraph-2');

const thirdContent = document.querySelector('.view-content--third')
const workplaces = document.querySelector('.workplaces');
const technologies = document.querySelector('.technologies');

const lastContent = document.querySelector('.view-content--last');
const someProjectsHeader = document.querySelector('.header--some-projects');
const blog = document.querySelector('.project-card--blog');
const messenger = document.querySelector('.project-card--messenger');
const builder = document.querySelector('.project-card--builder');
const more = document.querySelector('.more');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // trigger animations
      secondHeader.classList.add('typewriter-name', 'typewriter-name--mam');
      secondParagraph1.classList.add('fadeable', 'fadeable--1');
      secondParagraph2.classList.add('fadeable', 'fadeable--2');
      secondButton.classList.add('fadeable', 'fadeable--3');
    }
  })
});

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      workplaces.classList.add('fadeable', 'fadeable--01');
      technologies.classList.add('fadeable', 'fadeable--02');
      thirdButton.classList.add('fadeable', 'fadeable--03');
    }
  })
})

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      someProjectsHeader.classList.add('fadeable', 'fadeable--01');
      messenger.classList.add('fadeable', 'fadeable--02');
      blog.classList.add('fadeable', 'fadeable--03');
      builder.classList.add('fadeable', 'fadeable--04');
      more.classList.add('fadeable', 'fadeable--05');
    }
  })
})

observer1.observe(secondContent);
observer2.observe(thirdContent);
observer3.observe(lastContent);
