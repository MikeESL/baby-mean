angular.module('crudCartApp')
	.factory('ShopService', function($resource){
		return $resource('api/collections/baubles', {},
			{
				getAllThings: {
					method: 'GET',
					isArray: true
				},
				createThing: {
					method: 'POST'
				}
			});
	});

// if not correct change: files moved in finder, routes, URL	