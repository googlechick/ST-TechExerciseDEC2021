// Simple Thread Technical Exercise
//20211220
var CalculateSets = window.TopNav || {};

//anonymous function
CalculateSets = function () {
    var Configuration =
    {
        //travel days cost
        TravelLowCostCity: 45,
        TravelHighCostCity: 55,
        //full days cost
        FullLowCostCity: 75,
        FullHighCostCity: 85,
        RunScenarioButton: null,
        RunAllScenariosButton: null

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

    //set event
    MainConfig.RunScenarioButton.on('click', function () {
        //Run a given scenario
    });
});
