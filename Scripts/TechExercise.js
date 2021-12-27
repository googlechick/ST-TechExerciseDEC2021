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
            FullDayCost: 75,
            CityType: "LOW"
        },
        HighCostCity: {
            TravelDayCost: 55,
            FullDayCost: 85,
            CityType: "HIGH"
        },
        DayType: {
            Travel: "TRAVEL",
            Full: "FULL"
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
        TotalCostSet: null,
        TotalCostValueSet: null,
        Sets:
        {
            'Set1': {
                SetName: 'Set One',
                ProjectCount: null,
                Projects: [{
                    ProjectName: "Project 1",
                    TotalDayCount: null,
                    StartDate: "9/1/2015",
                    EndDate: '9/3/2015',
                    TotalDateArray: [],
                    CityType: 'Low',
                    TravelDayCount: null,
                    FullDayCount: null
                }],
                TotalCost: null
            },
            'Set2': {
                SetName: 'Set Two',
                ProjectCount: null,
                Projects: [{
                    ProjectName: "Project 1",
                    TotalDayCount: null,
                    StartDate: "9/1/2015",
                    EndDate: '9/1/2015',
                    TotalDateArray: [],
                    CityType: 'Low',
                    TravelDayCount: null,
                    FullDayCount: null
                },
                {
                    ProjectName: "Project 2",
                    TotalDayCount: null,
                    StartDate: "9/2/2015",
                    EndDate: '9/6/2015',
                    TotalDateArray: [],
                    CityType: 'High',
                    TravelDayCount: null,
                    FullDayCount: null
                },
                {
                    ProjectName: "Project 3",
                    TotalDayCount: null,
                    StartDate: "9/6/2015",
                    EndDate: '9/8/2015',
                    TotalDateArray: [],
                    CityType: 'Low',
                    TravelDayCount: null,
                    FullDayCount: null
                }]
            },
            'Set3': {
                SetName: 'Set Three',
                ProjectCount: null,
                Projects: [{
                    ProjectName: "Project 1",
                    TotalDayCount: null,
                    StartDate: "9/1/2015",
                    EndDate: '9/3/2015',
                    TotalDateArray: [],
                    CityType: 'Low',
                    TravelDayCount: null,
                    FullDayCount: null
                },
                {
                    ProjectName: "Project 2",
                    TotalDayCount: null,
                    StartDate: "9/5/2015",
                    EndDate: '9/7/2015',
                    TotalDateArray: [],
                    CityType: 'High',
                    TravelDayCount: null,
                    FullDayCount: null
                },
                {
                    ProjectName: "Project 3",
                    TotalDayCount: null,
                    StartDate: "9/8/2015",
                    EndDate: '9/8/2015',
                    TotalDateArray: [],
                    CityType: 'High',
                    TravelDayCount: null,
                    FullDayCount: null
                }]
            },
            'Set4': {
                SetName: 'Set Four',
                ProjectCount: null,
                Projects: [{
                    ProjectName: "Project 1",
                    TotalDayCount: null,
                    StartDate: "9/1/2015",
                    EndDate: '9/1/2015',
                    TotalDateArray: [],
                    CityType: 'Low',
                    TravelDayCount: null,
                    FullDayCount: null
                },
                {
                    ProjectName: "Project 2",
                    TotalDayCount: null,
                    StartDate: "9/1/2015",
                    EndDate: '9/1/2015',
                    TotalDateArray: [],
                    CityType: 'Low',
                    TravelDayCount: null,
                    FullDayCount: null
                },
                {
                    ProjectName: "Project 3",
                    TotalDayCount: null,
                    StartDate: "9/2/2015",
                    EndDate: '9/2/2015',
                    TotalDateArray: [],
                    CityType: 'High',
                    TravelDayCount: null,
                    FullDayCount: null
                },
                {
                    ProjectName: "Project 4",
                    TotalDayCount: null,
                    StartDate: "9/2/2015",
                    EndDate: '9/3/2015',
                    TotalDateArray: [],
                    CityType: 'High',
                    TravelDayCount: null,
                    FullDayCount: null
                }]
            }
            //'Set5': {
            //    SetName: 'Set Five (temp project)',
            //    ProjectCount: null,
            //    Projects: [{
            //        ProjectName: "Project 1",
            //        TotalDayCount: null,
            //        StartDate: "9/1/2015",
            //        EndDate: '9/1/2015',
            //        TotalDateArray: [],
            //        CityType: 'High',
            //        TravelDayCount: null,
            //        FullDayCount: null
            //    },
            //    {
            //        ProjectName: "Project 2",
            //        TotalDayCount: null,
            //        StartDate: "9/2/2015",
            //        EndDate: '9/6/2015',
            //        TotalDateArray: [],
            //        CityType: 'Low',
            //        TravelDayCount: null,
            //        FullDayCount: null
            //    },
            //    {
            //        ProjectName: "Project 3",
            //        TotalDayCount: null,
            //        StartDate: "12/30/2015",
            //        EndDate: '1/8/2016',
            //        TotalDateArray: [],
            //        CityType: 'High',
            //        TravelDayCount: null,
            //        FullDayCount: null
            //    }]
            //}
            //'Set6': {
            //    SetName: 'Set Six (temp project)',
            //    ProjectCount: null,
            //    Projects: [{
            //        ProjectName: "Project 1",
            //        TotalDayCount: null,
            //        StartDate: "9/1/2015",
            //        EndDate: '9/3/2015',
            //        TotalDateArray: [],
            //        CityType: 'High',
            //        TravelDayCount: null,
            //        FullDayCount: null
            //    }]
            //}
            
        },
        //functions
        GetTotalSetsCount: function () {
            //Grab total set count from above
            return Object.keys(Configuration.Sets).length;
        },
        CalculateTotalCost: function (FullDayLength, TravelDayLength, CityType) {
            //Now that we have our travel and full day totals, let's 
            //calculate based on high or low city costs.
            var LowFullAmount;
            var LowTravelAmount;
            var HighFullAmount;
            var HighTravelAmount;
            var TotalCost;
            if (CityType.toUpperCase() == Configuration.LowCostCity.CityType) {
                LowFullAmount = Configuration.CalcFullLowCityCost(FullDayLength);
                LowTravelAmount = Configuration.CalcTravelLowCityCost(TravelDayLength);
                //total cost
                TotalCost = LowFullAmount + LowTravelAmount;
            } else {
                //must be high city cost
                HighFullAmount = Configuration.CalcFullHighCityCost(FullDayLength);
                HighTravelAmount = Configuration.CalcTravelHighCityCost(TravelDayLength);
                //total cost
                TotalCost = HighFullAmount + HighTravelAmount;
            }
            return TotalCost;
        },
        IdentifyDuplicateDays: function (ProjectDayArray) {
            //identify multiple days and return them so they 
            //can be factored out of the 
            var resultArray = ProjectDayArray.sort();
            var resultDuplicate = [];
            if (resultArray.length == 1) {
                //if there is only one item after sorting, no need to proceed, return as is
                return resultArray;
            } else {
                for (var i = 0; i < resultArray.length - 1; i++) {
                    if (resultArray[i + 1] == resultArray[i]) {
                        resultDuplicate.push(resultArray[i]);
                    }
                }
            }
            return resultDuplicate;
        },
        RemoveDuplicateDays: function (ArrayOfDays) {
            //Days can only be counted once, remove duplicates
            let unique = {};
            ArrayOfDays.forEach(function (i) {
                if (!unique[i]) {
                    unique[i] = true;
                }
            });
            return Object.keys(unique);
        },
        RemoveDuplicateMultiDimDays: function (ProjMultiDimArray) {
            //in multi-dimentional arrays, remove duplicates, return altered Proj array
            //detect duplicates, however, if there is a different city
            //type across the two values, if there is a high cost city
            //type, that is the value that is taken.
            //skip first day so we can look back
            for (var s = 1; s < ProjMultiDimArray.length - 1; s++) {

                var CompareCurrentDay = ProjMultiDimArray[s][0];
                var CompareNextDay = ProjMultiDimArray[s + 1][0];
                if (CompareCurrentDay == CompareNextDay) {
                    //if either of the city types for these values is "HIGH"
                    //we will use that price point for the unique day that we keep

                    var CurrentDayCityType = ProjMultiDimArray[s][1];
                    var NextDayCityType = ProjMultiDimArray[s + 1][1];
                    //if these values match, then they'll be handled appropriately, however
                    //if they don't match, that means one of them has to be high city type
                    //therefore both need to be
                    if (CurrentDayCityType.toUpperCase() != NextDayCityType.toUpperCase())
                    {
                        if (CurrentDayCityType.toUpperCase() == Configuration.HighCostCity.CityType.toUpperCase()) {
                            //update opposite
                            ProjMultiDimArray[s + 1][1] = Configuration.HighCostCity.CityType.toUpperCase();
                        } else {
                            //First day found out of sync then
                            ProjMultiDimArray[s][1] = Configuration.HighCostCity.CityType.toUpperCase();
                        }
                    }                        
                }
            }

            var prev = {};
            var UniqueResultArray = ProjMultiDimArray.filter(function (arr) {
                var key = arr[0];
                if (prev[key])
                {
                    return false;
                }

                return (prev[key] = true);
            });
            return UniqueResultArray;
        },
        CalcFullHighCityCost: function (CountInDays) {
            return CountInDays * Configuration.HighCostCity.FullDayCost;
        },
        CalcFullLowCityCost: function (CountInDays)
        {
            return CountInDays * Configuration.LowCostCity.FullDayCost;
        },
        CalcTravelHighCityCost: function (CountInDays)
        {
            return CountInDays * Configuration.HighCostCity.TravelDayCost;
        },
        CalcTravelLowCityCost: function (CountInDays)
        {
            return CountInDays * Configuration.LowCostCity.TravelDayCost;
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
                //console.log("This is all the dates " + total[j])
            }
            return total;
        },
        ParseDates: function (str) {
          //Convert string to date format we would prefer
            var formattedDate = new Date(str);
            var d = formattedDate.getDate();
            var m = formattedDate.getMonth();
            m += 1;  // JavaScript months are 0-11
            var y = formattedDate.getFullYear();
            var FinishedDate = new Date(m + "/" + d + "/" + y);

            return FinishedDate;
        },
        BuildHTMLforDayResults: function (ArrayOfDays, SetID)
        {
            var TotalHTMLString='';
            for (var i = 0; i < ArrayOfDays.length; i++)
            {
                //reset mini container
                TotalHTMLString += '<div class="miniContainer">';

                //show day calculation breakdown
                var DayBreakdownHTML = '<div SetType ="'+ SetID +'" id="DayBreakdown'+ SetID +'" class="daybreakdown label">Breakdown of Days: </div>';
                TotalHTMLString += DayBreakdownHTML;
                var TotalCostSetValueHTML = '<div SetType="' + SetID + '" id="DayBreakdownResult' + SetID + '"class="result">' + ArrayOfDays[i][0] + " " + ArrayOfDays[i][1] + " " + ArrayOfDays[i][2] + '</div>';
                TotalHTMLString += TotalCostSetValueHTML;
                TotalHTMLString += "</div>";
            }
            return TotalHTMLString;
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
    MainConfig.TotalCostSet = $("#TotalCostSet");
    MainConfig.TotalCostValueSet = $("#TotalCostValueSet");
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
            //Set scoped object
            var MainSets = MainConfig.Sets[IndivSets];
            //Set exists, start building HTML
            IndivSetsHTML = '<div SetType="' + SetCounter + '" class="IndivSets">';
            //reset mini container
            MiniContainerHTML = '<div class="miniContainer">';

            //start stringing HTML together
            IndivSetsHTML += MiniContainerHTML;
            var SetNameHTML = '<div id="SetNameLabel" class="label">Set Name: </div>';
            IndivSetsHTML += SetNameHTML;
            var SetNameValueHTML = '<div id="SetNameValue" class="result">' + MainSets.SetName + '</div>';
            IndivSetsHTML += SetNameValueHTML;
            //close mini container
            IndivSetsHTML += ClosingDiv;

            //append to main container
            //get project count within sets
            if (!MainSets.hasOwnProperty('Projects')) {
                //if no project, close set
                IndivSetsHTML += ClosingDiv;
                //if complete, append now
                MainConfig.SetContainerDetailsCon.append(IndivSetsHTML);
                SetCounter++;
                continue;
            } else
            {
                //evalute project contents
                var ProjectCounts = MainSets.Projects.length;
                //build html
                var TotalProjectCountHTML = '<div ProjectType="'+ProjectCounter+'" id="TotalProjectLabel" class="label">Total Project Count: </div>';
                MiniContainerHTML += TotalProjectCountHTML;
                var TotalProjectCountValue = '<div ProjectType="' + ProjectCounter + '" id="TotalProjectCount" class="result">' + ProjectCounts+'</div>';
                MiniContainerHTML += TotalProjectCountValue;
                //close mini container
                MiniContainerHTML += ClosingDiv;
               
                //Loop through projects
                for (var IndivProjects in MainSets.Projects)
                {
                    //Project Object
                    //reset mini container
                    MiniContainerHTML = '<div class="miniContainer">';
                    var MainProjects = MainSets.Projects[IndivProjects];
                    //add project name
                    var ProjectNameHTML = '<div ProjectType="'+ProjectCounter+'"id="ProjectNameLabel" class="label">Project Name: </div>'
                    MiniContainerHTML += ProjectNameHTML;
                    var ProjectNameValueHTML = '<div ProjectType="' + ProjectCounter + '" id="ProjectNameValue" class="result">' + MainProjects.ProjectName + '</div>';
                    MiniContainerHTML += ProjectNameValueHTML;
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
                    //write back to object 
                    MainProjects.TotalDayCount = DateCounts.length;

                    //low cost city versus high cost city has differences in billing
                    //travel days versus full days also have different billing
                    var CurrentProjectCityType = MainProjects.CityType;
                    ProjectCounter++;
                }
                //once projects have been allocated and set, now we need to 
                //run our calculations
                //Less rules to enforce if there is only one project in a set
                if (MainSets.Projects.length == 1) {
                    //check for unique days
                    var projectDuplicates = [];
                    var tempArray = [];
                    var tempResultArray = [];
                    //fill temp to not mess with original values
                    tempArray = MainSets.Projects[0].TotalDateArray;
                    projectDuplicates = MainConfig.IdentifyDuplicateDays(tempArray);
                    //if duplicates found, handle them
                    if (projectDuplicates.length >= 1) {
                        //duplicates present, how will we handle?

                        var TravelArray = [];
                        var FullArray = [];
                        //remove duplicates - but leave original occurrence
                        tempArray = MainConfig.RemoveDuplicateDays(tempArray);
                        
                        //only one day left? Travel day - get first item and city type - multi-dimentional array
                        TravelArray.push(tempArray.shift());
                        //city type - multi - dimentional array to validate result
                        tempResultArray.push([TravelArray[0], MainSets.Projects[0].CityType.toUpperCase(), MainConfig.DayType.Travel.toUpperCase()]);
                        //Is high or low city cost?
                        var TotalCostinSet = MainConfig.CalculateTotalCost(FullArray.length, TravelArray.length, CurrentProjectCityType);
                        //set appropriate object for set
                        MainSets.TotalCost = TotalCostinSet;
                        //add in appropriate amount of days to site
                        var CompleteHTMLString = MainConfig.BuildHTMLforDayResults(tempResultArray, SetCounter);
                        IndivSetsHTML += CompleteHTMLString;
                        //now that cost is posted, let's add to HTML
                        //reset mini container
                        MiniContainerHTML = '<div class="miniContainer">';
                        var TotalCostSetHTML = '<div SetType="' + SetCounter + '" id="TotalCostSet" class="label">Total Cost in Set: </div>';
                        MiniContainerHTML += TotalCostSetHTML;
                        var TotalCostSetValueHTML = '<div SetType="' + SetCounter + '" id="TotalCostValueSet" class="result">$' + TotalCostinSet + '</div>';
                        MiniContainerHTML += TotalCostSetValueHTML;
                        IndivSetsHTML += MiniContainerHTML += ClosingDiv;
                        
                    } else {
                        //get travel days and full day counts
                        var tempArray = [];
                        var resultArray = [];
                        //fill temp to not mess with original values
                        tempArray = MainProjects.TotalDateArray;
                        var TravelArray = [];
                        var FullArray = [];
                        //last and first days are travel, grab them
                        //take away last item in array
                        TravelArray.push(tempArray.pop());
                        //build the day breakdown array
                        resultArray.push([TravelArray[0], MainSets.Projects[0].CityType.toUpperCase(), MainConfig.DayType.Travel.toUpperCase()]);
                        //get first item
                        TravelArray.push(tempArray.shift());
                        //remaining days are to be pushed into fullArray
                        FullArray = tempArray;
                        //continue to build day breakdown
                        for (var b = 0; b < FullArray.length; b++)
                        {
                            //finish building day breakdown
                            resultArray.push([FullArray[b], MainSets.Projects[0].CityType.toUpperCase(), MainConfig.DayType.Full.toUpperCase()]);
                        }
                        //grab last item
                        resultArray.push([TravelArray.at(-1), MainSets.Projects[0].CityType.toUpperCase(), MainConfig.DayType.Travel.toUpperCase()]);
                        //Now, we need to calculate the totals based on city cost
                        //Is high or low city cost?
                        var TotalCostinSet = MainConfig.CalculateTotalCost(FullArray.length, TravelArray.length, CurrentProjectCityType);
                        //set appropriate object for set
                        MainSets.TotalCost = TotalCostinSet;
                        //now that cost is posted, let's add to HTML
                        //add in appropriate amount of days to site
                        var CompleteHTMLString = MainConfig.BuildHTMLforDayResults(resultArray.reverse(), SetCounter);
                        IndivSetsHTML += CompleteHTMLString;
                        //reset mini container
                        MiniContainerHTML = '<div class="miniContainer">';
                        var TotalCostSetHTML = '<div SetType="' + SetCounter + '" id="TotalCostSet" class="label">Total Cost in Set: </div>';
                        MiniContainerHTML += TotalCostSetHTML;
                        var TotalCostSetValueHTML = '<div SetType="' + SetCounter + '" id="TotalCostValueSet" class="result">$' + TotalCostinSet + '</div>';
                        MiniContainerHTML += TotalCostSetValueHTML;
                        IndivSetsHTML += MiniContainerHTML += ClosingDiv;
                    }//not duplicate values
                }//if project count is 1
                else
                {
                    //multiple projects in set
                    //we need the values but we also need to associate them with whether
                    //or not they are high or low city items
                    var ProjDimArray = []; //multi-dimentional
                    for (var v = 0; v < MainSets.Projects.length; ++v)
                    {
                        //go through each project and start associating your low versus high pricing
                        var ScopedProject = MainSets.Projects[v];
                        //get the day array for this project
                        var ScopedProjectDayArray = ScopedProject.TotalDateArray;                       
                        //get city type
                        var ScopedCityType = ScopedProject.CityType;

                        //now we need to also loop through the days in each project
                        for (var g = 0; g < ScopedProjectDayArray.length; ++g)
                        {
                            //now, build multidimentional array!
                            ProjDimArray.push([ScopedProjectDayArray[g], ScopedCityType.toUpperCase()])
                        }
                       
                    }
                    //get rid of duplicates
                    var UniqueResultsArray = MainConfig.RemoveDuplicateMultiDimDays(ProjDimArray);
                    var resultArr = [];
                    var b = 0;
                    var GapDetected = false;
                    while (b < UniqueResultsArray.length) {
                        //convert current day to date
                        var CurrentDayDate = new Date((UniqueResultsArray[b][0]));
                        var NextDateInArray;
                        var NextDayDate;

                        //keep in mind if we've reached the end of the array of days, there will not be a "next day";
                        if (b != UniqueResultsArray.length - 1) {
                            //there are more days so setup for comparisons
                            //next date in array
                            var NextDateInArray = new Date(UniqueResultsArray[(b + 1)][0])
                            //next day date
                            var NextDayDate = new Date(UniqueResultsArray[b][0]);
                            //add day to current date for comparison
                            NextDayDate.setDate(CurrentDayDate.getDate() + 1);
                            //if sequential days
                            if (NextDateInArray.getTime() == NextDayDate.getTime()) { //push into new array with travel or full day
                                //first day of project is travel
                                if (b == 0) {
                                    resultArr.push([UniqueResultsArray[b][0], UniqueResultsArray[b][1], MainConfig.DayType.Travel]);

                                } else if (b == UniqueResultsArray.length - 1) {
                                    //last day but sequential? travel day
                                    resultArr.push([UniqueResultsArray[b][0], UniqueResultsArray[b][1], MainConfig.DayType.Travel]);
                                }
                                else {
                                    if (GapDetected) {
                                        //needs to be a travel day
                                        resultArr.push([UniqueResultsArray[b][0], UniqueResultsArray[b][1], MainConfig.DayType.Travel]);
                                    } else {
                                        //all other days, if sequential, will be full
                                        resultArr.push([UniqueResultsArray[b][0], UniqueResultsArray[b][1], MainConfig.DayType.Full]);
                                    }
                                }
                                //set back since gap was handled
                                GapDetected = false;
                            } else {
                                //if not sequential, this day is a travel day
                                resultArr.push([UniqueResultsArray[b][0], UniqueResultsArray[b][1], MainConfig.DayType.Travel]);
                                //need to know at the top of the loop that a gap was detected
                                GapDetected = true;
                            }

                        } else {
                            //last day in array is a travel day
                            //if not sequential, this day is a travel day
                            resultArr.push([UniqueResultsArray[b][0], UniqueResultsArray[b][1], MainConfig.DayType.Travel]);
                        }
                        b++;
                        
                    }//end while
                    //now that we have our appropriate items divvyed up
                    //we need to calculate our totals and then apply our 
                    //total costs to the different sets
                    var TravelLowArray = [];
                    var TravelHighArray = [];
                    var FullLowArray = [];
                    var FullHighArray = [];
                    for (var u = 0; u < resultArr.length; ++u)
                    {
                        //push into appropriate travel or full arrays
                        if (resultArr[u][2].toUpperCase() == MainConfig.DayType.Travel && resultArr[u][1].toUpperCase() == MainConfig.LowCostCity.CityType) {
                            //travel, low city days
                            TravelLowArray.push(resultArr[u][2]);
                        } else if (resultArr[u][2].toUpperCase() == MainConfig.DayType.Travel && resultArr[u][1].toUpperCase() == MainConfig.HighCostCity.CityType) {
                            //travel, high city days
                            TravelHighArray.push(resultArr[u][2]);
                        } else if (resultArr[u][2].toUpperCase() == MainConfig.DayType.Full && resultArr[u][1].toUpperCase() == MainConfig.LowCostCity.CityType) {
                            //must be full, low city days
                            FullLowArray.push(resultArr[u][2]);
                        } else if (resultArr[u][2].toUpperCase() == MainConfig.DayType.Full && resultArr[u][1].toUpperCase() == MainConfig.HighCostCity.CityType)
                        {
                            //full, high city days
                            FullHighArray.push(resultArr[u][2]);
                        }
                    }
                    
                    //Now, we need to calculate the totals based on city cost
                    var TotalHighCityCostinSet = MainConfig.CalculateTotalCost(FullHighArray.length, TravelHighArray.length, MainConfig.HighCostCity.CityType
);
                    var TotalLowCityCostinSet = MainConfig.CalculateTotalCost(FullLowArray.length, TravelLowArray.length, MainConfig.LowCostCity.CityType);
                    var TotalCostinSet = TotalHighCityCostinSet + TotalLowCityCostinSet;

                    //set appropriate object for set
                    MainSets.TotalCost = TotalCostinSet;
                    //now that cost is posted, let's add to HTML
                    //add in appropriate amount of days to site
                    var CompleteHTMLString = MainConfig.BuildHTMLforDayResults(resultArr, SetCounter);
                    IndivSetsHTML += CompleteHTMLString;
                    //reset mini container
                    MiniContainerHTML = '<div class="miniContainer">';
                    var TotalCostSetHTML = '<div SetType="' + SetCounter + '" id="TotalCostSet" class="label">Total Cost in Set: </div>';
                    MiniContainerHTML += TotalCostSetHTML;
                    var TotalCostSetValueHTML = '<div SetType="' + SetCounter + '" id="TotalCostValueSet" class="result">$' + TotalCostinSet + '</div>';
                    MiniContainerHTML += TotalCostSetValueHTML;
                    IndivSetsHTML += MiniContainerHTML += ClosingDiv;
                }// end multiple projects in set

                MainConfig.SetContainerDetailsCon.append(IndivSetsHTML);
                SetCounter++;
            }//end sets

            //show sets once calculated
            MainConfig.SetDetailsMasterContainer.removeClass('hidden');
        }        
    });
});
