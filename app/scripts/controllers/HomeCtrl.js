(function() {
    function HomeCtrl($scope, Room, Message, $cookies) {
        $scope.rooms = Room.all;
        $scope.currentRoom = null;
        $scope.messages = null;
        $scope.currentUser = '';

        $scope.open = function () {
            $uibModal.open({
                templateUrl: 'roomsModal.html',
                controller: 'ModalInstanceCtrl'
            })
        };

        $scope.setCurrentRoom = function (room) {
            $scope.currentRoom = room;
            $scope.currentUser = $cookies.get('chatCurrentUser');
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
            console.log($scope.messages);
        };

        $scope.sendMessage = function (room) {
            Message.send($scope.newMessage, room.$id, $scope.currentUser);
        };

        return $scope.chatRooms;
        
    }

    angular
        .module('chatter')
        .controller('HomeCtrl',['$scope', 'Room', 'Message', '$cookies', HomeCtrl]);
})();