const callToActionButton = document.getElementById('call-to-action');
const secondSection = document.querySelector('.view--second');

callToActionButton.addEventListener('click', () => secondSection.scrollIntoView())
