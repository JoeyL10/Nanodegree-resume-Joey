



var name = "Joey Laird"

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer"

var formattedRole = HTMLheaderRole.replace("%data%", role);


var bio = {
	"name" : "Joey Laird",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "941-685-9888",
		"email": "joe.laird1@gmail.com",
		"github": "JoeyL10",
		"twitter": "@joe_laird1",
		"location": "Lake Mary"
	},
	"welcomeMessage" : "Aspiring to be a Web Developer",
	"skills": [
		"Finance", "CSS", "Design", "Javascript"
	],
	"bioPic" : "images/joey.jpg"
	
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGit);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

var education = {
	"schools": [
	{ 
		"name": "UCF",
		"location": "Orlando",
		"degree": "BSBA",
		"majors": ["Accounting", "Finance"],
		"dates": "2002-2006",
		"url": "http://.ucf.edu"
		
	}
	],

	"onlineCourses": [
				{
				"title": ["Javascript Basics", "Responsive Web Design Fundamentals"],
				"school": "Udacity",
				"dates": "2015-2016",
				"url": "www.udacity.com"
				 
			}
		]
};

var work = {
	"jobs": [
		
		{
		"employer": "Pershing LLC",
		"title": "Associate in Government P&S",
		"location": "Lake Mary",
		"dates": "2007-2009",
		"description": "Government Trading Support"
		}, 


		{
		"employer": "Pershing LLC",
		"title": "Vice President of Global P&S",
		"location": "Lake Mary",
		"dates": "2009-Present",
		"description": "Foreign Trading Support"
		} 
	]
};



for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);	

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
	$(".work-entry:last").append(formattedEmployerTitle);
	// $(".work-entry:last").append(formattedDates);

	  
}



 // Here’s an example of some code that would add the location of one your companies to the page:
 //   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
 //   * `$(".work-entry:last").append(formattedLocation);`

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2015",
		"description": "Put some text here",
		"images": ["image1", "image2"]
	},
	{
		"title": "Sample Project 2",
		"dates": "2016",
		"description": "Put some text here",
		"images": ["image3", "image4"]

	},

	{
		"title": "Sample Project 3",
		"dates": "2016",
		"description": "Put some text here",
		"images": ["image5", "image6"]

	}
]


};



// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

/********** displayHeader **********/
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

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// $("#header").append(formattedEmail);
// $("#header").append(formattedLocation);
// $("#header").append(education.schools.name(0));







