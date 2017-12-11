(function() {
    function ModalCtrl($uibModal, $log, Room) {

    	this.open = function () {
		    var modalInstance = $uibModal.open({
		      animation: this.animationsEnabled,
		      ariaLabelledBy: 'modal-title',
		      ariaDescribedBy: 'modal-body',
		      templateUrl: '/templates/modal.html',
		      controller: 'ModalInstanceCtrl',
		      controllerAs: 'modal'
		     
		    });

	     modalInstance.result.then(function (name) {
	      this.room = name;
	      Room.add(this.room);
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
    	
    }

    angular
        .module('chatter')
        .controller('ModalCtrl', ['$uibModal', '$log', 'Room', ModalCtrl]);
})();