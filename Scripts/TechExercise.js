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
        Sets:       
        {
            /*TotalSetCount: 1,*/
            'Set1': {
                SetName: 'Set1',
                ProjectCount: 1,
                Projects: [{
                    ProjectName: "Project 1",
                    TotalDayCount: 3,
                    StartDate: '9/1/15',
                    EndDate: '9/3/15',
                    CityType: 'Low',
                    TravelDayCount: null,
                    FullDayCount:null
                }],
                TotalCost:null
            },
                'Set2': {
                SetName: 'Set2'
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
        GetTotalDays: function (first, second){
            return Math.round((second - first) / (1000 * 60 * 60 * 24));
        },
        ParseDates: function (str) {
            var mdy = str.split('/');
            return new Date(mdy[2], mdy[0] - 1, mdy[1]);
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

    //set the Set total count value
    var SetCount = MainConfig.GetTotalSetsCount;
    MainConfig.TotalSetCount.text(SetCount);



    //Calculate total dates 
   // var FirstDate = MainConfig.ParseDates(MainConfig.Sets.Sets1.Projects.StartDate);
   // var LastDate = MainConfig.ParseDates(MainConfig.Sets.Sets1.Projects.EndDate);

    //var DateCounts = MainConfig.GetTotalDays(FirstDate, LastDate);
    //Console.log(DateCounts);

    //set event
    MainConfig.RunAllScenariosButton.on('click', function (e) {
        //Run a given scenario
        e.stopPropagation();
        for (var IndivSets in MainConfig.Sets)
        {
            //get set properties
            var MainSets = MainConfig.Sets[IndivSets];
            console.log(MainSets.SetName);
            //set name
            MainConfig.SetNameValue.text(MainSets.SetName);
            //get project count within sets
            if (!MainSets.hasOwnProperty('Projects')) {
                continue;
            } else
            {
                var ProjectCounts = MainSets.Projects.length;
                MainConfig.TotalProjectCount.text(ProjectCounts);
                console.log("project exists");
            }
            
        }
    });
});
