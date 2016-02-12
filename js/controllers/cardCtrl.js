angular.module('app').controller('cardCtrl', function (cardFactory) {
	this.deleteCard = function (card) {
		cardFactory.deleteCard(card);
	};

	this.isEditing = false;
	this.editingCard = null;
	
	this.editCard = function (card) {
		this.isEditing = true;
		this.editingCard = angular.copy(card);
	};

	this.updateCard = function () {
		cardFactory.updateCard(this.editingCard);
		this.isEditing = false;
		this.editingCard = null;
	};
});