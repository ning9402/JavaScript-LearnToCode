"use strict";

let data = [{
    CourseId: "19SUM100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "07/08/19",
    Fee: "100.00",
},
{
    CourseId: "19SUM200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 7",
    StartDate: "07/22/19",
    Fee: "350.00",
},
{
    CourseId: "19SUM300",
    Title: "Introduction to Node.JS and Express",
    Location: "Classroom 7",
    StartDate: "09/09/19",
    Fee: "50.00",
},
{
    CourseId: "19SUM400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "09/16/19",
    Fee: "50.00",
},
{
    CourseId: "19SUM500",
    Title: "Introduction to Angular",
    Location: "Classroom 7",
    StartDate: "09/23/19",
    Fee: "50.00",
}
];

let courseToSearch = "19SUM300";

let courseItem = data.find(course => course.CourseId == courseToSearch);
if (courseItem != null){
    console.log(courseItem.CourseId + ": " + courseItem.Title + " is located in " + courseItem.Location + " and it starts on " + courseItem.StartDate + " for $ " + courseItem.Fee);
}
else {
    console.log(courseToSearch + " was not found.");
};