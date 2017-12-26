(function () {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      add: function (newRoom) {
        rooms.$add(newRoom);
      }
    };
  }

  angular
    .module('chatter')
    .factory('Room', ['$firebaseArray', Room]);
})();