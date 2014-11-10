//Code will be commented as I learn and think through this exercise.  Comments will be minimized at a later date

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
	"bioPic": "images/profile.JPG",
	"welcomeMessage": "This is my resume.  Created in code using Javascript.",
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
				"location": "Albany, OR",
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
			formattedOnlineURL = formattedOnlineURL.replace("%url%", education.onlineCourses[course].url);


			$(".online-course:last").append(formattedOnlineTitleSchool);
			$(".online-course:last").append(formattedOnlineDates);
			$(".online-course:last").append(formattedOnlineURL);
	}	
}

//Object to store work experience
var work = {
	"jobs": [
		{
			"employer": "AT&T Mobility",
			"title": "Store Manager",
			"location": "Corvallis, OR",
			"dates": "January 2010 to present",
			"description": "Leader of a multimillion dollar sales location.  Responsible for maintaining customer experience, sales and operational integrity of the location.",
			"url": "http://www.att.com"
		},
		{
			"employer": "Lowes HIW",
			"title": "Operations/Administrative Manager",
			"location": "Redmond, OR",
			"dates": "March 2005 to November 2009",
			"description": "Responsible for the operation integrity of a 100,000+ square foot location.  Directly responsible for the cash office, receiving, delivery, freight crew and product servive team.",
			"url": "http://www.lowes.com"
		}
	]
}

//Function to display work experience
work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for (job in work.jobs) {
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedWorkEmployer = formattedWorkEmployer.replace("%url%", work.jobs[job].url);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

//Fill in highlighted projects
var projects = {
	"project": [
		{
			"title": "Project 1 - Project Portfolio",
			"dates": "September 2014",
			"description": "Project was in introduction to using HTML and CSS to create a webpage layout.  Bootstrap was also introduced to help with the page layout",
			"url": "http://chillieguy.github.io/Chuck-Portfolio",
			"images": [
				"http://placehold.it/35/FF8000", "http://placehold.it/35"
			]
		},
		{
			"title": "Project 2 - Resume",
			"dates": "October 2014",
			"description": "Project was an introduction to Javascript.  I created a resume by injecting HTML in a file with Javascript and the help of a premade file that had html templates.",
			"url": "http://chillieguy.github.io/Chuck-FrontEnd-Resume",
			"images": [
				"http://placehold.it/35", "http://placehold.it/35/FF8000"
			]
		}
	]
}

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (proj in projects.project) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		formattedTitle = formattedTitle.replace("%url%", projects.project[proj].url);    
    var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);	
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);

		$(".project-entry:last").append(formattedTitle);
  	$(".project-entry:last").append(formattedDates);
  	$(".project-entry:last").append(formattedDescription);

  	for (image in projects.project[proj].images) {
  	var formattedImage = HTMLprojectImage.replace("%data%",projects.project[proj].images[image]);
    $(".project-entry:last").append(formattedImage);
		}
  }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);