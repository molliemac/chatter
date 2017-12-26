(function () {
  function ChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('chatCurrentUser'); // retrieve cookie
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/usernamemodal.html',
        controller: 'UserModalInstanceCtrl',
        controllerAs: 'usermodal',
        size: 'sm',
        backdrop: 'static',
        keyboard: false
      })

      this.toggleAnimation = function () {
        this.animationsEnabled = !this.animationsEnabled;
      };
    }
  }

  angular
    .module('chatter')
    .run(['$cookies', '$uibModal', ChatCookies]);
})();