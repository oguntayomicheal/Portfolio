/* eslint-disable */

document.addEventListener('DOMContentLoaded', () => {
    const typedOutput = document.getElementById('typed-output');

    // Initialize Typed.js
    const options = {
        strings: ["JavaScript", "React and Redux", "Ruby","Bootstrap", "Ruby on Rails", "Happy to learn new stacks"],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 25, // backspacing speed in milliseconds
        startDelay: 500, // delay before typing starts in milliseconds
        loop: true, // loop the animation
        showCursor: true, // show blinking cursor
        // cursorChar: "|", // cursor character
    };

    const typed = new Typed(typedOutput, options);
});
