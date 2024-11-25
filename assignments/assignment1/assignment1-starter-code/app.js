(function () {

    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];


    function LunchCheckController($scope) {

        $scope.name = "";

        $scope.message = "";


        $scope.input_text_multi_line = "";

        $scope.checkTooMuch = function (text_input) {

            /*If the textbox is empty and the user clicks the 
            "Check If Too Much" button, the message "Please enter data first" should show up.             
            'Empty' here means either `""` (empty string) or a string with just spaces in it. 
            (Hint: AngularJS `ng-model` already performs the trimming for you, so there shouldn't be anything you need to do.)

            */
            $scope.message = ""


            if (text_input == "") {

                $scope.message = "Please enter data first";
                return;

            }

            var items = text_input.split(",").map(item => item.trim()).filter(item => item);

            if (items.length === 0) {
                $scope.message = "Please enter data first";
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }


        };



    }

})();