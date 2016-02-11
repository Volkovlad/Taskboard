angular.module('app').factory('listFactory', function () {
	var service = {}, 
		lists = [
			{
				id: 1,
				listName: 'Plans for today'
			},
			{
				id: 2,
				listName: 'Plans for week'
			},
			{
				id: 3,
				listName: 'Plans for month'
			},
		];

	service.getLists = function() {
		return lists;
	};

	service.addList = function(listName) {
		lists.push({
			id: _.uniqueId(),
			listName: listName
		});
	};

	service.removeList = function(list) {
		_.pull(lists, list);
	};

	return service;
});