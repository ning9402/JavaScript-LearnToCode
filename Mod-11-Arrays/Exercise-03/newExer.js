"use strict";

let data = [{
    CourseId: "19SUM100",
    Title: "Introduction to HTML/CSS/Git",
    Instructor: "Wyatt",
    Location: "Classroom 7",
    StartDate: "07/08/19",
    Fee: 100.00,
},
{
    CourseId: "19SUM200",
    Title: "Introduction to JavaScript",
    Instructor: "Lynn",
    Location: "Classroom 8",
    StartDate: "07/22/19",
    Fee: 350.00,
},
{
    CourseId: "19SUM300",
    Title: "Introduction to Node.JS and Express",
    Instructor: "Gross",
    Location: "Classroom 4",
    StartDate: "09/09/19",
    Fee: 50.00,
},
{
    CourseId: "19SUM400",
    Title: "Introduction to SQL and Databases",
    Instructor: "Wyatt",
    Location: "Classroom 6",
    StartDate: "09/16/19",
    Fee: 50.00,
},
{
    CourseId: "19SUM500",
    Title: "Introduction to Angular",
    Instructor: "Lynn",
    Location: "Classroom 7",
    StartDate: "09/23/19",
    Fee: 50.00,
}
];

let courseDate = "07/22/19";
let courseItem = data.find(course => course.StartDate == courseDate);
if (courseItem != null){
    console.log("Course that starts on " + courseItem.StartDate + " is " + courseItem.CourseId);
}
else {
    console.log(courseToSearch + " was not found.");
};

let instructorSearch = "Lynn";
courseItem = data.find(course => course.Instructor == instructorSearch);
if (courseItem != null){
    console.log("Course that has " + courseItem.Instructor+ " as the instructor is " + courseItem.CourseId);
}
else {
    console.log(courseToSearch + " was not found.");
};


let instructorSearch2 = "Erik";
courseItem = data.find(course => course.Instructor == instructorSearch2);
if (courseItem != null){
    console.log("Course that has " + courseItem.Instructor+ " as the instructor is " + courseItem.CourseId);
}
else {
    console.log(instructorSearch2 + " was not found as an instructor in any courses.");
};

let firstCourse100 = 100;
courseItem = data.find(course => course.Fee < firstCourse100);
if(courseItem != null) {
    console.log("The first course that is under $100 is: " + courseItem.Title);
}
else {
    console.log("No courses under $100.");
}

let courseToSearch = "19SUM400";
courseItem = data.find(course => course.CourseId == courseToSearch);
if (courseItem != null){
    console.log(courseItem.CourseId + ": " + courseItem.Title);
}
else {
    console.log(courseToSearch + " was not found.");
};

let courseToSearch2 = "19SUM900";
courseItem = data.find(course => course.CourseId == courseToSearch2);
if (courseItem != null){
    console.log(courseItem.CourseId);
}
else {
    console.log(courseToSearch2 + " was not found.");
};



/*let courseItem = data.find(course => course.CourseId == courseToSearch);
if (courseItem != null){
    console.log(courseItem.CourseId);
}
else {
    console.log(courseToSearch + " was not found.");
};
*/