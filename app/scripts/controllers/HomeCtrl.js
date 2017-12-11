(function() {
    function HomeCtrl($scope, Room) {
    	$scope.chatRooms = Room.all;
    	
    }

    angular
        .module('chatter')
        .controller('HomeCtrl',['$scope', 'Room', HomeCtrl]);
})();