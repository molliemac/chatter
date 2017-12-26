(function() {
    function UserModalInstanceCtrl($uibModalInstance, $cookies) {

    	this.ok = function () {
    		$cookies.put('chatCurrentUser', this.username);
            console.log("You just created a new user: " + this.username);
            console.log("You just created a new cookie: " + $cookies.chatCurrentUser);
            $uibModalInstance.close($cookies.chatCurrentUser);
        };
	
    }

    angular
        .module('chatter')
        .controller('UserModalInstanceCtrl', ['$cookies', '$uibModalInstance', UserModalInstanceCtrl]);
})();