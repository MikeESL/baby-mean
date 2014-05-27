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
	})
// ---- actual cart services ------ //

    .factory('CartSvc', function($resource) {
		return $resource('api/collections/shoppingcart',
			{},
			{
				queryCart: { 
					method: 'GET', 
					isArray: true 
				},
				createCartItem: { 
					method: 'POST'
				}
			});
	})
	.factory('EditCartSvc', function($resource){
		return $resource('api/collections/shoppingcart/:id',
			{
				id: '@_id'
			},
			{
				show: {
				   method: 'GET'
				},
				edit: { 
					method: 'PUT'
				},
				delete: { 
					method: 'DELETE'
				}
			}
			)
	});


	