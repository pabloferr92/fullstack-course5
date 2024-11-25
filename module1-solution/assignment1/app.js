(function () {

    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];


    function LunchCheckController($scope) {


        $scope.message = "";
        
        
        $scope.input_text_multi_line = "";
        
        $scope.checkTooMuch = function (text_input) {
            
            $scope.data = {};

            $scope.message = "";

            var items = text_input.split(",").map(item => item.trim()).filter(item => item);

            $scope.fontcolor = "green";
            $scope.bordercolor = "green";

            if (items.length === 0 || text_input == "") {
                $scope.fontcolor = "red";
                $scope.bordercolor = "red";
                $scope.message = "Please enter data first";
                return;
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }


        };



    }

})();