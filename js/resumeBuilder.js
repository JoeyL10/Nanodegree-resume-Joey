

// ***** Bio Section ***** //





var bio = {
	"name" : "Joey Laird",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "941-685-9888",
		"email": "joe.laird1@gmail.com",   
		"github": "JoeyL10",
		"twitter": "@joe_laird1",
		"location": "Lake Mary, FL"
	},
	"welcomeMessage" : "Aspiring to be a Web Developer",
	"skills": [
		"Finance", "CSS", "Design", "Javascript"
	],
	"bioPic" : "srcimages/joey-large.jpg"
	
};

function displayBio() {

var name = "Joey Laird"
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header, #footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header, #footerContacts").append(formattedEmail);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header, #footerContacts").append(formattedGit);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header, #footerContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header, #footerContacts").append(formattedLocation);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);



if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	  $("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	  $("#skills").append(formattedSkill);
	    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	  $("#skills").append(formattedSkill);
	    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	  $("#skills").append(formattedSkill);
	 
    }


}

displayBio();

    //***** Education Section ***** //

var education = {
	"schools": [
	{ 
		"name": "University of Central Florida",
		"location": "Orlando, FL",
		"degree": "BSBA",
		"major": ["Accounting", " Finance"],
		"dates": "2002-2006"
		
	}
	],

	"onlineClasses": [
				{
				"title": ["Intro to HTML and CSS", " Javascript Basics", " Responsive Web Design Fundamentals"],
				"school": "Udacity",
				"dates": "2015-2016",
				"url": "www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
				 
			}
		]
};


function displayEducation() {
 for (school in education.schools) {
 	$("#education").append(HTMLschoolStart);

 	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
 	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
 	var formattedNameDegree = formattedName + formattedDegree;
 	$(".education-entry:last").append(formattedNameDegree);
 	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
 	$(".education-entry:last").append(formattedLocation);
 	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
 	$(".education-entry:last").append(formattedDates);
 	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
 	$(".education-entry:last").append(formattedMajor);
 }


}
displayEducation();


/*** function to display online classes **/

function displayOnlineClasses() {
 for (course in education.onlineClasses) {
 	$("#education").append(HTMLonlineClasses);

 	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title);
 	var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
 	var formattedTitleSchool = formattedTitle + formattedSchool;
 	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[course].dates);
 	var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);
 	$(".online-entry:last").append(formattedTitleSchool);
 	$(".online-entry:last").append(formattedOnlineDates);
 	$(".online-entry:last").append(formattedOnlineUrl);
 }


}
displayOnlineClasses();



// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';


var work = {
	"jobs": [
		
		{
		"employer": "Pershing LLC",
		"title": "Associate in Government P&S",
		"location": "Lake Mary, FL",
		"dates": "2007-2009",
		"description": "Provide post-trade processing support to clients who trade Government bonds such as treasuries, agencies and mortgage-backed securities."
		}, 


		{
		"employer": "Pershing LLC",
		"title": "Vice President of Global P&S",
		"location": "Lake Mary, FL",
		"dates": "2009-Present",
		"description": "Manage post-trade processing support for clients who trade non-dollar securities and US equities with other banks and broker-dealers."
		} 
	]
};

function displayWork() {

for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);	

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);	  
}

}

displayWork();

var projects = {
	"projects": [
	{
		"title": "My Portfolio Site",
		"dates": "2015",
		"description": "My portfolio site was my first project and it was built using responsive design fundamentals that I learned through Udacity.  It is being hosted on Github and includes links to future projects.",
		"images": ["srcimages/projectpic-large.jpg", "srcimages/featwork-large.jpg"]
	},
	
		//*** Placeholder for future projects ***//

	// {
	// 	"title": "Sample Project 2",
	// 	"dates": "2016",
	// 	"description": "Put some text here",
	// 	"images": ["images/projectpic.jpg", "images/featwork.jpg"]

	// },

	// {
	// 	"title": "Sample Project 3",
	// 	"dates": "2016",
	// 	"description": "Put some text here",
	// 	"images": ["images/projectpic.jpg", "images/featwork.jpg"]

	// }
]


};



projects.display = function() {

	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}

		}
		
		
	}

}

projects.display();



$("#mapDiv").append(googleMap);


//*** To give the option to capitalize last name after adding a button in index.html***//



// function inName(name) {
// 	var name = window.name;
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return name[0] +" "+name[1];
// }

// $("#main").append(internationalizeButton);
















