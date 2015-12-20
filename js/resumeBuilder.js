

// ***** Bio Section ***** //


var bio = {
    "name": "Joey Laird",
    "role": "Web Developer",
    "contacts": {
        "mobile": "941-685-9888",
        "email": "joe.laird1@gmail.com",
        "github": "JoeyL10",
        "twitter": "@joe_laird1",
        "location": "Lake Mary, FL"
    },
    "welcomeMessage": "Aspiring to be a Web Developer",
    "skills": [
        "Finance", "CSS", "Design", "Javascript"
    ],
    "biopic": "srcimages/joey-large.jpg"

};

bio.display = function() {

    var name = "Joey Laird";
    var formattedName = HTMLheaderName.replace("%data%", name);
    var role = "   Web Developer";
    var re = /%data%/g;
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace(re, bio.contacts.email);
    $("#header, #footerContacts").append(formattedEmail);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header, #footerContacts").append(formattedGit);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#header, #footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header, #footerContacts").append(formattedLocation);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);



    if (bio.skills.length > 0) {
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

bio.display();

//***** Education Section ***** //

var education = {
    "schools": [{
        "name": "University of Central Florida",
        "location": "Orlando, FL",
        "degree": "BSBA",
        "major": ["Accounting", " Finance"],
        "dates": 2006,
        "url": "https://www.ucf.edu"

    }],

    "onlineClasses": [{
        "title": ["Intro to HTML and CSS", " Javascript Basics", " Responsive Web Design Fundamentals"],
        "school": "Udacity",
        "dates": 2016,
        "url": "www.udacity.com"

    }]
};



education.display = function() {
    for (var school in education.schools) {
        if (education.schools.length > 0) {
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

    for (var course in education.onlineClasses) {
        if (education.onlineClasses.length > 0) {
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
}

education.display();




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

work.display = function() {

    for (var job in work.jobs) {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployer);
            $(".work-entry:last").append(formattedTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

work.display();

var projects = {
    "projects": [{
            "title": "My Portfolio Site",
            "dates": "2015-2016",
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

    for (var project in projects.projects) {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);


            for (var image in projects.projects[project].images) {
                if (projects.projects[project].images.length > 0) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }

            }
        }

    }

};

projects.display();



$("#mapDiv").append(googleMap);


















