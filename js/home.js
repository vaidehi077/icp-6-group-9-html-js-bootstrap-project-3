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
  } else {
    // Original state: (You can set your original background and text colors here)
    document.body.style.backgroundColor = 'white';  // Set your original background color
    document.body.style.color = 'black';  // Set your original text color
  }
});