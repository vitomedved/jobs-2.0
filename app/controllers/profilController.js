(function() {
    
    var ProfilController = function ($scope, $routeParams, usersFactory) {
        var usersId = $routeParams.userId;
        $scope.user = null;
        
        function init() {
            $scope.user = usersFactory.getUsers(usersId);
        }
        
        init();
    };
    
    ProfilController.$inject = ['$scope', '$routeParams', 'usersFactory'];

    angular.module('jobsApp')
      .controller('ProfilController', ProfilController);
    
}());