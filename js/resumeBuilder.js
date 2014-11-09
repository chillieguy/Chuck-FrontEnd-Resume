//Code will be commented to much as I learn and think through this exercise.  Comments will be minimized at a later date

// Object to store bio info
var bio = {
	"name": "Chuck Underwood",
	"role": "Web Developer",
	"contacts": {
		"mobile": "541-639-1138",
		"email": "chillieguy@live.com",
		"github": "chillieguy",
		"twitter": "chillieguy",
		"linkdin": "ceheunderwood",
		"location": "Albany, OR"
	},
	"bioPic": "images/profile.jpg",
	"welcomeMessage": "This is my resume.",
	"skills": [
		"HTML", "CSS", "Javascript", "Awesomeness"
	]
}

//Function to display bio object information in index.html called at end of file
bio.display = function() {
	//Using prepend to add name and role to header
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	//Set variables to be used in #topContacts and #footerContacts
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLinkdin = HTMLlinkdin.replace("%data%", bio.contacts.linkdin);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	//Append contact info to #topContacts
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLinkdin);
	$("#topContacts").append(formattedLocation);

	//Append contact info to #footerContacts
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLinkdin);
	$("#footerContacts").append(formattedLocation);

	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	//Add skills to index.html using for each loop
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

//Object to store educations and online courses
var education = {
	"schools":[
			{
				"name": "Chemeketa Community College",
				"location": "Salem, OR",
				"degree": "Associate of Arts",
				"majors": ["Oregon Transfer Degree"],
				"dates": "2005 - 2006",
				"url": "http://www.chemeketa.edu/"
			},
			{
				"name": "Udacity",
				"location": "Online",
				"degree": "Nanodegree",
				"majors": ["Frontend Web Developer"],
				"dates": "2014",
				"url": "http://udacity.com"
			}
	],
	"onlineCourses":[
			{
			"title": "Javascript Basics",
			"school": "Udacity",
			"date": 2014,
			"url": "http://www.udacity.com/course/ud804"
			},
			{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": 2014,
			"url": "http://www.udacity.com/course/ud304"
			},
			{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"date": 2014,
			"url": "http://www.udacity.com/course/ud775"
			}
	]
}

//Function to display education object information in index.html called at end of file
education.display = function() {
	$("#education").append(HTMLschoolLists);
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLonlineStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedOnlineTitle = formattedOnlineTitle.replace("%url%", education.onlineCourses[course].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			formattedOnlineURL = formattedOnlineURL.replace("%data%", education.onlineCourses[course].url);


			$(".online-course:last").append(formattedOnlineTitleSchool);
			$(".online-course:last").append(formattedOnlineDates);
			$(".online-course:last").append(formattedOnlineURL);
	}	
}

var work = {
	"jobs": [
		{
			"employer": "AT&T Mobility",
			"title": "Store Manager",
			"dates": "January 2010 to present",
			"description": "Ran a multimillion dollar store"
		},
		{
			"employer": "Lowes HIW",
			"title": "Operations Manager",
			"dates": "March 2005 to November 2009",
			"description": "Responsible for the all operational integrity of the store"
		}
	]
}

//Fill in highlighted projects
var project = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "September 2014",
			"description": "Project Portfolio",
			"images": [
				"http://placehold.it/35", "http://placehold.it/35"
			]
		},
		{
			"title": "Project 2",
			"dates": "October 2014",
			"description": "Interactive Resume",
			"images": [
				"http://placehold.it/35", "http://placehold.it/35"
			]
		}
	]
}

bio.display();
education.display();