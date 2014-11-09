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

//Function to display bio object information in index.html
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

var education = {
	"schools":[
			{
				"name": "Chemeketa Community College",
				"location": "Salem, OR",
				"degree": "Associates",
				"majors": ["Transfer"],
				"date": 2005,
				"url": "http://example.com"
			},
			{
				"name": "Udacity",
				"location": "Online",
				"degree": "Nanodegree",
				"majors": ["Frontend Web Developer"],
				"date": 2014,
				"url": "http://udacity.com"
			}
	],
	"onlineCourses":[
			{
			"title": "Javascript Syntax",
			"school": "Udacity",
			"date": 2014,
			"url": "http://www.udacity.com/course/ud804"
			}
	]
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