(function() {
    function UserModalInstanceCtrl($scope, $uibModalInstance, $cookies) {

        this.ok = function () {
            $cookies.put('chatCurrentUser', this.name);

            console.log("You just created a new user: " + this.name);
            console.log("You just created a new cookie: " + $cookies.chatCurrentUser);

            $uibModalInstance.close(this.name);

            };

        
    }

    angular
        .module('chatter')
        .controller('UserModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();