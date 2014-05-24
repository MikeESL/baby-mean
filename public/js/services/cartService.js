'use strict';
angular.module('ngDay2App')
	.factory('ShopService', function($resource){
		return $resource('api/collections/baubles', {},
			{
				queryBaub: {
					method: 'GET',
					isArray: true
				},
				createBaub: {
					method: 'POST'
				}
			});
	})
	.factory('EditService', function($resource){
		return $resource('api/collections/baubles/:id',
		{
			id: '@_id'
		},
		{
			show: {
				method: 'GET'
			},
			edit:{
				method: 'PUT'
			},
			delete:{
				method: 'DELETE'
			}
			}
			)
	});

	