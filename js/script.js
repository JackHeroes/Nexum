/* Footer */

// sets the 'innerHTML' property of the 'year' element to the current year using the 'getFullYear' method of the 'Date' object.

const year = document.querySelector('#year');
year.innerHTML = new Date().getFullYear();