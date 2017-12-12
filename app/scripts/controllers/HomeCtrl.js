(function() {
    function HomeCtrl($scope, Room, Message) {
    	$scope.rooms = Room.all;
    	$scope.currentRoom = null;

    	$scope.open = function () {
    		$uibModal.open({
    			templateUrl: 'roomsModal.html',
    			contorller: 'ModalInstanceCtrl'
    		})
    	};

    	$scope.setCurrentRoom = function (room) {
    		$scope.currentRoom = room;
    		$scope.messages = Message.getByRoomId($scope.currentRoom.$id);
    		console.log($scope.messages);

    	};

    	return $scope.chatRooms;
    	
    }

    angular
        .module('chatter')
        .controller('HomeCtrl',['$scope', 'Room', 'Message', HomeCtrl]);
})();