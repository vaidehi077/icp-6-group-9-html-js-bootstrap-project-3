// alert('welcome')

const btn = document.getElementById('btn');

let isReversed = false;

btn.addEventListener('click', function onClick(event) {
  // Toggle the reversed state
  isReversed = !isReversed;

  // Check the reversed state and update styles accordingly
  if (isReversed) {
    // Reversed state: black background, white text
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.nav.style.backgroundColor = 'white';
    document.nav.style.color = 'black';
    

  } else {
    // Original state: (You can set your original background and text colors here)
    document.body.style.backgroundColor = 'white';  
    document.body.style.color = 'black';  
    document.nav.style.backgroundColor = 'black';
    document.nav.style.color = 'white';
  }
});