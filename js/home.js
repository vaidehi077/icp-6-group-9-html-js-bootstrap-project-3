// alert('welcome')

// const btn = document.getElementById('btn');

// let isReversed = false;

// btn.addEventListener('click', function onClick(event) {
//   // Toggle the reversed state
//   isReversed = !isReversed;

//   // Check the reversed state and update styles accordingly
//   if (isReversed) {
//     // Reversed state: black background, white text
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//     document.nav.style.backgroundColor = 'white';
//     document.nav.style.color = 'black';
    

//   } else {
//     // Original state: (You can set your original background and text colors here)
//     document.body.style.backgroundColor = 'white';  
//     document.body.style.color = 'black';  
//     document.nav.style.backgroundColor = 'black';
//     document.nav.style.color = 'white';
//   }
// });

// const btn = document.getElementById('btn');

// let isReversed = false;

// btn.addEventListener('click', function onClick(event) {
//   // Toggle the reversed state
//   isReversed = !isReversed;

//   // Check the reversed state and update styles accordingly
//   if (isReversed) {
//     // Reversed state: black background, white text
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';

//     // Get the navbar element by id
//     const nav = document.getElementById('nav');

//     // Update navbar styles
//     if (nav) {
//       nav.style.backgroundColor = 'white';
//       nav.style.color = 'black';
//     }

//   } else {
//     // Original state: white background, black text
//     document.body.style.backgroundColor = 'white';  
//     document.body.style.color = 'black';  

//     // Get the navbar element by id
//     const nav = document.getElementById('nav');

//     // Update navbar styles
//     if (nav) {
//       nav.style.backgroundColor = 'black';
//       nav.style.color = 'white';
//     }
//   }
// });

// Note: Make sure that the 'nav' element has the correct id in your HTML, like <nav id="nav">...</nav>

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

    // Get the navbar element by id
    const nav = document.getElementById('nav');

    // Update navbar styles
    if (nav) {
      nav.style.backgroundColor = 'white';
      nav.style.color = 'black';
    }

    // Get the footer element by id
    const footer = document.getElementById('footer');

    // Update footer styles
    if (footer) {
      footer.style.backgroundColor = 'white';
      footer.style.color = 'black';
    }

  } else {
    // Original state: white background, black text
    document.body.style.backgroundColor = 'white';  
    document.body.style.color = 'black';  

    // Get the navbar element by id
    const nav = document.getElementById('nav');

    // Update navbar styles
    if (nav) {
      nav.style.backgroundColor = 'black';
      nav.style.color = 'white';
    }

    // Get the footer element by id
    const footer = document.getElementById('footer');

    // Update footer styles
    if (footer) {
      footer.style.backgroundColor = 'black';
      footer.style.color = 'white';
    }
  }
});

