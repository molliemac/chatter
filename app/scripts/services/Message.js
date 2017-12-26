(function () {
  function Message($firebaseArray, $cookies, Room) {
    var allmessagesRef = firebase.database().ref().child("messages");
    var messages = $firebaseArray(allmessagesRef);

    return {
      // getByRoomId function - method to get messages by room id
      getByRoomId: function (roomId) {
        console.log('Passed RoomId: ' + roomId);
        console.log($firebaseArray(allmessagesRef));
        return $firebaseArray(allmessagesRef.orderByChild("roomId").equalTo(roomId));
      },

      // send function - method to store message (4 items) in firebase
      send: function (newMessage, roomId, username) {

        // gather message entry data 
        var messageData = {
          username: username,
          content: newMessage,
          sentAt: Date.now(),
          roomId: roomId
        };
        console.log('newMessage = ' + newMessage);

        // get a key for new message
        var newMessageKey = firebase.database().ref().child('messages').push().key;
        console.log('new message key defined = ' + newMessageKey);

        // write the new message data in the message list 
        var updates = {}; 
        updates['/messages/' + newMessageKey] = messageData;

        console.log('just before return');
        return firebase.database().ref().update(updates);
      }
    };
  }

  angular
    .module('chatter')
    .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();