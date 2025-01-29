
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animateme');
// const headerOne = document.querySelector('.header-wrap');

hamButton.addEventListener('click', function () {
    hamButton.classList.toggle('open'); //This is to switch from the hmburguer button to the X icon
    navigation.classList.toggle('open'); //This is to display (as block) the menu options
    // headerOne.classList.toggle('open');

})

//Creating an object with the courses to display

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//By default all the courses will be displayed
createCourseCard(courses);
displayTotalCredits(courses);

//If user clicks on "All" button, it will display all the courses
const allButton = document.querySelector('#allButton');
allButton.addEventListener('click', () => {
    createCourseCard(courses);

    //Display de credits
    displayTotalCredits(courses);
});

//If user clicks on "CSE" button, it will display the filtered results
const cseButton = document.querySelector('#cseButton');
cseButton.addEventListener('click', () => {
    let cseCourses = courses.filter(aCourse => aCourse.subject == 'CSE');
    createCourseCard(cseCourses);
    displayTotalCredits(cseCourses)

});

//If user clicks on "WDD" button, it will display the filtered results
const wddButton = document.querySelector('#wddButton');
wddButton.addEventListener('click', () => {
    let wddCourses = courses.filter(aCourse => aCourse.subject == 'WDD');
    createCourseCard(wddCourses);
    displayTotalCredits(wddCourses)
});



//Function to display (or create) the cards for the courses
function createCourseCard(filteredcourses){
    //Firts it destroys existing courses being showed.
    document.querySelector('.courses-block').innerHTML = ' ';

    //Then it iterates throu each of the courses and creates a card for each one...
    filteredcourses.forEach(aCourse => {
        let card = document.createElement('span');

        //Adds the 'course' class
        card.classList.add('course');

        if (aCourse.completed)
        {
            card.classList.add('course-completed');
        };

        //Now includes the name of the course
        card.textContent = `${aCourse.subject} ${aCourse.number}`;

        //Appends it to it's father
        let coursesBlock = document.querySelector('.courses-block');
        coursesBlock.appendChild(card);

        //Option to display de modal with more info about the course
        card.addEventListener('click', () => {
            displayModal(aCourse);
        });

//         // animating the dialog window
//         card.addEventListener('click', () => {
//         //add the class jumpIn
//             dialog.classList.remove('jumpOut');
//             dialog.classList.add('jumpIn');
// })

    });
}

//Display de modal
const dialog = document.querySelector("dialog");

function displayModal(course){
    dialog.innerHTML = '';
    dialog.innerHTML = `
    <button id='closeModal'>❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Description<strong/>: ${course.description}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p><strong>Technologies</strong>: ${course.technology}</p>`

    //add the class jumpIn
    dialog.classList.add('jumpIn');
    
    dialog.showModal();
    
    closeModal.addEventListener("click", () => {

        
        dialog.close();

    });
    
}

//Function to display the total amount of credits earned by completing the courses in display
function displayTotalCredits(filteredArray)
{
    //Gets the variable of the html element
    const creditDisplayer = document.querySelector('#credit-displayer');

    //Calculates the total value
    let totalCredits = filteredArray.reduce((accumulator, course) => accumulator + course.credits, 0);
    creditDisplayer.textContent = `${totalCredits}`;
};







// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Update: ${document.lastModified}`;

// MEDIA QUERY TO IMPLEMENT TO THE DOM WHEN THE WIDTH IS 650PX

// const mediaQuery = window.matchMedia('(max-width: 650px)');

// // Function to add the CSS for small screen (max-width: 600px)
// function addMediaQueryStyles() {
//     const style = document.createElement('style');
//     style.innerHTML = `
//         /* Adjusting the header */
//         h1 {
//             font-size: larger;
//         }

//         /* Adjusting the main display */
//         main {
//             display: flex;
//             flex-direction: column;
//         }

//         .card {
//             margin: 1em;
//         }

//         .courses-block {
//             display: flex;
//             flex-direction: column;
//         }

//         .course {
//             margin: .5em;
//         }

//         /* Adjusting the 'a' element to disappear */
//         nav a {
//             display: none;
//             width: 100%;
//         }

//         nav a:hover {
//             background-color: transparent;
//             font-size: 1.1em;
//         }

//         #menu {
//             display: block;
//         }

//         /* When the user clicks on the burger button, it switches to an 'X' */
//         #menu.open::before {
//             content: 'X';
//         }

//         /* When the user clicks the burger, the nav changes... */
//         nav.open {
//             display: flex;
//             flex-direction: column;
//         }

//         /* ... and shows up */
//         nav.open a {
//             display: block;
//         }
//     `;
//     document.head.appendChild(style);
// }

// // Apply styles if media query matches
// if (mediaQuery.matches) {
//     addMediaQueryStyles();
// }

// // Listen for changes to the media query and update styles
// mediaQuery.addEventListener('change', (e) => {
//     const style = document.querySelector('style');
    
//     if (e.matches) {
//         if (!style) {
//             addMediaQueryStyles();
//         }
//     } else {
//         if (style) {
//             style.remove();
//         }
//     }
// });