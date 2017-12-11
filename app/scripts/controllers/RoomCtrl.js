(function() {
    function RoomCtrl($scope, Room) {
    	$scope.rooms = Room;
    }

    angular
        .module('chatter')
        .controller('RoomCtrl', [RoomCtrl]);
})();