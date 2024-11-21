'use scrict';

const skillContainer= document.getElementById('skills');
const skillsBtn= document.querySelector('a[href="#skills"]');

function handleIntersection(entries) {
    // The callback will return an array of entries, even if you are only observing a single item
    entries.map((entry) => {
    if (entry.isIntersecting) {
        skillsBtn.classList.add('visible')
    } else {
        skillsBtn.classList.remove('visible')
    }
    });
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
const observer = new IntersectionObserver(handleIntersection);

// Finally start observing the target element
observer.observe(skillContainer);