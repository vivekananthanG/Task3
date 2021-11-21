//For the given JSON iterate over all for loops (for, for in, for of, forEach)
var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];

//for loop

for (let i = 0; i < obj.length; i++) {
    if(obj.hasOwnProperty(i))
    {
    console.log(obj[i]);
    }
  }

//for each loop(function oriented)

obj.forEach(element => {
    console.log(element);
});

//for in loop(wont follow order)

for (let i in obj)
{

    console.log(i)
    if(obj.hasOwnProperty(i))
    {
    console.log(obj[i])
    }
}

//for of
for (let x of obj) {
    console.log(x)
}


//Create your own resume data in JSON format

let resume = {
    Name: "Vivekananthan.G",
    Email: "vivekananthan191@gmail.com",
    phone: "+917708187899",
    Professional_Summary: ["Have 3 years and 9 months of experience in Oracle SQL & PLSQL technologies and Unix shell scripting",
        "Have supported Oracle Field service Cloud application (SaaS) and used Oracle cloud platforms for analytics & integration",
        "Experience in Software Development Life Cycle (SDLC) including Requirement Analysis, Design, Development, Testing, Maintenance and Enhancement",
        "Basic knowledge on Java web development and on Python coding",
        "Quick learner of the project/product and having expertise skills in resolving production issues",
        "Managed tight delivery deadlines and work pressure to complete the deliverables on time",
        "Discipline in thought, behavior and action, attentive listener and intense passion towards work",],
    Professional_Experience: "Nov ‘17 – Till Date (3 Years and 9 Months) TATA Consultancy Services, Systems Engineer, Chennai.",
    Technical_expertise: {
        Programming_language: ["SQL", "PLSQL", "Java", "Python"],
        Scripting: "Unix",
        RDBMS: "Oracle",
        Application_server: ["Apache", "OracleHTTP_Server"],
        Operating_Systems: ["Unix", "OpenVMS"],
    },
    Certification: "ITIL 2011 Foundation certification in ITSM",
    Projects: {
        About_Project: "Vodafone is a leading telecom service provider in UK. It provides fixed line, mobile and data services all around UK. Vodafone has 90+ web applications provide services to the customers.  TCS is responsible for the end to end support of these applications while ensuring pre committed improvements with automation, best practices, deployment of tools, documenting known errors & procedures and so on",
        Roles_and_Responsibilities: ["Primary Support Analyst for 7 Vodafone web and Cloud applications which are developed through Oracle Cloud, Mod PLSQL and Java",
            "Developed various packages, procedures and functions including static and Dynamic SQL to fix production issues",
            "Module lead for Oracle General Applications, with 4 team members and 7 applications",
            "Training new team members for the project technically as a mentor",
        ],
        Achievements: ["Provided more than 20 service improvements and fixes using PLSQL and Java, Unix Scripts for the applications I supported",
            "Created automated mail alert mechanisms to perform the availability checks for the application servers and databases of the applications I supported as well as other miscellaneous checks",
        ],
        Accolades_Received: "▪	Was awarded Star Performer Award for my performance and dedicated work to the project."
    },
    Academic_Profile: "Graduated B.E ECE, Coimbatore Institute of Technology in 2017 with an aggregate of 73%",
    Declaration: "I declare that the details furnished in this resume are true to the best of my knowledge",

}

console.log(resume)
