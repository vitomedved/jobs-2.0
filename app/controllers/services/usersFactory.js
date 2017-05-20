(function () {
    var usersFactory = function () {
        var users = [
            {
                id: 1,
                username: 'abcd',
                password: '1234',
                joined: '2017-05-02',
                name:'Netko Netkić', 
                city:'Zagreb',
                mainCounts: [{
                    inf: 11,
                    fiz: 0,
                    ugos: 2
                }],
                secondCounts: [{
                    c: 0,
                    java: 4,
                    android: 4,
                    web: 3
                }]
                
            }, 
           {
                id: 2,
                joined: '2017-05-02',
                username: 'krompach',
                password: 'jejiooiotrogfjiogjiogrfo',
                name:'Netko Netkić', 
                city:'Zagreb',
                mainCounts: [{
                    inf: 11,
                    fiz: 0,
                    ugos: 2
                }],
                secondCounts: [{
                    c: 0,
                    java: 4,
                    android: 4,
                    web: 3
                }]
                
            }
        ];
        
        var factory = {};
        factory.getUsers = function() {
          return users;  
        };
        factory.getUsers = function(userId) {
            len = users.length;
            for(var i = 0; i < len; i++){
                if(users[i].id == userId){
                    return users[i];  
                }
                return{};
            } 
        }
        
        return factory;
    };
    angular.module('jobsApp').factory('usersFactory', usersFactory);
}());