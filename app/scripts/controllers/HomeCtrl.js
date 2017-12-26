(function() {
    function HomeCtrl($cookies, Room, Message) {
    	this.rooms = Room.all;
    	this.currentRoom = null;
        this.currentUser = $cookies.get('chatCurrentUser');


    	this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
    	};

        this.sendMessage = function () {
            Message.send(this.newMessage, this.currentRoom);
        };
    	
    }

    angular
        .module('chatter')
        .controller('HomeCtrl',['$cookies', 'Room', 'Message', HomeCtrl]);
})();