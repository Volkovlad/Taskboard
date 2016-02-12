angular.module('app').factory('cardFactory', function () {
	var service = {},
		cards = [
			{
				id: 1,
				description: 'Some Description',
				list_id: 1
			},
			{
				id: 2,
				description: 'Lorem Ipsum',
				list_id: 1
			},
			{
				id: 3,
				description: 'Dolor Sit',
				list_id: 1
			},
			{
				id: 4,
				description: 'Dolor Sit',
				list_id: 2
			},
			{
				id: 5,
				description: 'Some Description',
				list_id: 2
			},
			{
				id: 6,
				description: 'Lorem Ipsum',
				list_id: 2
			},
		];

	service.getCards = function(list) {
		return _.filter(cards, { list_id : list.id });
	};

	service.createCard = function(list, cardDescription) {
		cards.push({
			id: _.uniqueId(),
			description: cardDescription,
			list_id: list.id
		});
	};

	service.updateCard = function(editedCard){
		var card = _.find(cards, {id:editedCard.id});
		card.description = editedCard.description;
		card.list_id = editedCard.list_id;
	};

	service.deleteCard = function(card){
		_.pull(cards, card);
	};

	return service;
});