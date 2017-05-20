(function() {
angular.module('jobsApp')
    .controller('NewsController', function ($scope, jobsFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = 'false';
        $scope.jobs = [];
        
        function init(){
            $scope.jobs = jobsFactory.getJobs();
            
        }
        init();    
       
        $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
        };
    });
}());
