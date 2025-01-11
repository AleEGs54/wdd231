
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
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

//If user clicks on "All" button, it will display all the courses
const allButton = document.querySelector('#allButton');
allButton.addEventListener('click', () => {
    createCourseCard(courses);
});

//If user clicks on "CSE" button, it will display the filtered results
const cseButton = document.querySelector('#cseButton');
cseButton.addEventListener('click', () => {
    let csecourses = courses.filter(aCourse => aCourse.subject == 'CSE');
    createCourseCard(csecourses);
});

//If user clicks on "WDD" button, it will display the filtered results
const wddButton = document.querySelector('#wddButton');
wddButton.addEventListener('click', () => {
    let wddcourses = courses.filter(aCourse => aCourse.subject == 'WDD');
    createCourseCard(wddcourses);
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
    });
}

// Select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// store the current date in a variable
const today = new Date();

// writing the date
currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;