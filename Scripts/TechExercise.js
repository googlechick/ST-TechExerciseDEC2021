// Simple Thread Technical Exercise
//20211220
var CalculateSets = window.TopNav || {};

//anonymous function
CalculateSets = function () {
    var Configuration =
    {
        //City Cost Breakdown
        LowCostCity: {
            TravelDayCost: 45,
            FullDayCost: 75
        },
        HighCostCity: {
            TravelDayCost: 55,
            FullDayCost: 85,
        },
        //elements
        RunScenarioButton: null,
        RunAllScenariosButton: null,
        TotalSetCount: null, //how many sets total?
        SetNameValue: null,
        TotalProjectCount: null,
        SetDetailsMasterContainer: null,
        SetContainerDetailsCon: null,
        ProjectNameValue: null,
        DaysInProjectValue: null,
        Sets:       
        {
            /*TotalSetCount: 1,*/
            'Set1': {
                SetName: 'Set One',
                ProjectCount: null,
                Projects: [{
                    ProjectName: "Project 1",
                    TotalDayCount: null,
                    StartDate: "9/1/2015",
                    EndDate: '9/3/2015',
                    TotalDateArray:[],
                    CityType: 'Low',
                    TravelDayCount: null,
                    FullDayCount:null
                }],
                TotalCost:null
            },
            'Set2': {
                SetName: 'Set Two',
                ProjectCount: null,
                Projects: [{
                    ProjectName: "Project 2"
                }]
            },
            'Set3': {
            SetName: 'Set Three'
            },
            'Set4': {
                SetName: 'Set Four',
                ProjectCount: null,
                Projects: [{
                    ProjectName: "Project 1"
                },
                    {
                    ProjectName: "Project 2"
                    }]
            }
            
        },
        //functions
        GetTotalSetsCount: function () {
            //Grab total set count from above
            return Object.keys(Configuration.Sets).length;
        },
        CalculateTotalTravelDays: function (ProjectDayCount) {
            //First and Last day of a project are considered travel days.
            //Gaps between projects (last and first) also considered travel days.
        },
        CalculateFullDayReimbursement: function () {

        },
        GetTotalDays: function (first, second) {
            var total = [];
            //convert to dates
            var datePickedDate1 = new Date(first);
            var datePickedDate2 = new Date(second);

            //while less than max date, push string into main array
            while (datePickedDate1 <= datePickedDate2) {
                var editedDate = datePickedDate1.toLocaleDateString("en-US");
                total.push(editedDate);
                datePickedDate1.setDate(datePickedDate1.getDate() + 1);
            }
            for (var j = 0; j < total.length; j++) {
                console.log("This is all the dates " + total[j])
            }
            return total;
        },
        ParseDates: function (str) {
           // var mdy = str.split('/');
           // return new Date(mdy[2], mdy[0] - 1, mdy[1]);
            var formattedDate = new Date(str);
            var d = formattedDate.getDate();
            var m = formattedDate.getMonth();
            m += 1;  // JavaScript months are 0-11
            var y = formattedDate.getFullYear();
            console.log("test date: " + m + "/" + d + "/" + y);
            var FinishedDate = new Date(m + "/" + d + "/" + y);
            return FinishedDate;
        }

    };
    return {
        Results:
        {
            Config : Configuration
        }
    }
}();

$(document).ready(function () {
    var MainConfig = CalculateSets.Results.Config;

    //Set Elements
    MainConfig.RunScenarioButton = $('#RSButton');
    MainConfig.RunAllScenariosButton = $('#RSAllButton');
    MainConfig.TotalSetCount = $('#TotalSetCount');
    MainConfig.SetNameValue = $('#SetNameValue');
    MainConfig.TotalProjectCount = $("#TotalProjectCount");
    MainConfig.SetDetailsMasterContainer = $("#SetDetailsMasterContainer");
    MainConfig.SetContainerDetailsCon = $("#SetContainerDetailsCon");
    MainConfig.ProjectNameValue = $("#ProjectNameValue");
    MainConfig.DaysInProjectValue = $("#DaysInProjectValue");
    //set the Set total count value
    var SetCount = MainConfig.GetTotalSetsCount;
    MainConfig.TotalSetCount.text(SetCount);



    //set click event
    MainConfig.RunAllScenariosButton.on('click', function (e) {
        //Run a given scenario
        e.stopPropagation();
        var SetCounter = 1;
        var ProjectCounter = 1;
        //non unique elements
        
        var MiniContainerHTML = '<div class="miniContainer">';
        var ClosingDiv = '</div>';
        for (var IndivSets in MainConfig.Sets)
        {
            var IndivSetsHTML;
            //get set properties
            //Set Object
            var MainSets = MainConfig.Sets[IndivSets];
            console.log(MainSets.SetName);
            //Set exists, start building HTML
            IndivSetsHTML = '<div SetType="' + SetCounter + '" class="IndivSets">';
            //reset mini container
            MiniContainerHTML = '<div class="miniContainer">';

            //start stringing HTML together
            IndivSetsHTML += MiniContainerHTML;
            console.log("what is in mini container html at this point: " + MiniContainerHTML);
            var SetNameHTML = '<div id="SetNameLabel" class="label">Set Name: </div>';
            IndivSetsHTML += SetNameHTML;
            var SetNameValueHTML = '<div id="SetNameValue" class="result">' + MainSets.SetName + '</div>';
            IndivSetsHTML += SetNameValueHTML;
            //close mini container
            IndivSetsHTML += ClosingDiv;
            console.log("Add SetName and close: " + MainSets.SetName);

            //append to main container
           // MainConfig.SetContainerDetailsCon.append(IndivSetsHTML);
            //get project count within sets
            if (!MainSets.hasOwnProperty('Projects')) {
                console.log("No project, closing div");
                console.log(IndivSetsHTML);
                console.log("appending....");
                //if no project, close set
                IndivSetsHTML += ClosingDiv;
                //if complete, append now
                MainConfig.SetContainerDetailsCon.append(IndivSetsHTML);
                SetCounter++;
                continue;
            } else
            {
                //project exists, keep track
                //evalute project contents
                var ProjectCounts = MainSets.Projects.length;
                //build html
                var TotalProjectCountHTML = '<div ProjectType="'+ProjectCounter+'" id="TotalProjectLabel" class="label">Total Project Count: </div>';
               // console.log("Adding total project count: " + MiniContainerHTML);
                MiniContainerHTML += TotalProjectCountHTML;
                var TotalProjectCountValue = '<div ProjectType="' + ProjectCounter + '" id="TotalProjectCount" class="result">' + ProjectCounts+'</div>';
                MiniContainerHTML += TotalProjectCountValue;
               // MainConfig.TotalProjectCount.text(ProjectCounts);
                //close mini container
                MiniContainerHTML += ClosingDiv;
                //close IndivSetsHTML
               // console.log("Adding entire html for totalprojectcount");
                //IndivSetsHTML += MiniContainerHTML + ClosingDiv;
                //console.log("project exists+ " + ProjectCounter);
               // console.log(IndivSetsHTML);

                //Loop through projects
                for (var IndivProjects in MainSets.Projects)
                {
                    //Project Object
                    //reset mini container
                    MiniContainerHTML = '<div class="miniContainer">';
                    var MainProjects = MainSets.Projects[IndivProjects];
                    console.log(MainProjects.ProjectName);
                    //add project name
                    var ProjectNameHTML = '<div ProjectType="'+ProjectCounter+'"id="ProjectNameLabel" class="label">Project Name: </div>'
                    MiniContainerHTML += ProjectNameHTML;
                    var ProjectNameValueHTML = '<div ProjectType="' + ProjectCounter + '" id="ProjectNameValue" class="result">' + MainProjects.ProjectName + '</div>';
                    MiniContainerHTML += ProjectNameValueHTML;
                   // MainConfig.ProjectNameValue.text(MainProjects.ProjectName);
                    //close miniContainer
                    IndivSetsHTML += MiniContainerHTML += ClosingDiv;
                    //calculate total days in project
                    var FirstDate = MainConfig.ParseDates(MainProjects.StartDate);
                    var EndDate = MainConfig.ParseDates(MainProjects.EndDate);
                    var DateCounts = [];
                    DateCounts = MainConfig.GetTotalDays(FirstDate, EndDate);
                    //set total day array
                    MainProjects.TotalDateArray = DateCounts;
                    //add day count to page and to mainconfig object
                    MainConfig.TotalDayCount = DateCounts.length;
                    //reset mini container
                    MiniContainerHTML = '<div class="miniContainer">';
                    var TotalProjectDayCountHTML = '<div ProjectType="' + ProjectCounter + '" id="DaysInProjectLabel" class="label">Days in Project: </div>';
                    MiniContainerHTML += TotalProjectDayCountHTML;
                    var TotalProjectDayCountValueHTML = '<div ProjectType="' + ProjectCounter + '" id="DaysInProjectValue" class="result">' + DateCounts.length+'</div>';
                    MiniContainerHTML += TotalProjectDayCountValueHTML;
                    IndivSetsHTML += MiniContainerHTML += ClosingDiv;
                    //MainConfig.DaysInProjectValue.text(DateCounts.length);
                    console.log("Days count: " + DateCounts.length);
                    //write back to object 
                    MainProjects.TotalDayCount = DateCounts.length;


                    //Time to start actual calculations
                    //low cost city versus high cost city has differences in billing
                    //travel days versus full days also have different billing
                    var CurrentProjectCityType = MainProjects.CityType;
                    if (CurrentProjectCityType.toUpperCase() == "LOW")
                    {
                        //Get
                        MainConfig.LowCostCity.TravelDayCost;
                    }
                    ProjectCounter++;
                } 
                MainConfig.SetContainerDetailsCon.append(IndivSetsHTML);
                SetCounter++;
            }//end sets
            //show sets once calculated
            MainConfig.SetDetailsMasterContainer.removeClass('hidden');
        }
        
    });
});
