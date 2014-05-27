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
		return $resource('api/collections/shoppingcart/:id',
			{
				id: '@_id'
			},
			{
				queryCart: { 
					method: 'GET', 
					isArray: true 
				},
				createCartItem: { 
					method: 'POST'
				},
				deleteItem: { 
					method: 'DELETE'
				}
			});
	})
	.factory('EditCartSvc', function($resource){
		return $resource('api/collections/shoppingcart/:id',
			{
				id: '@_id'
			},
			{
				showCartItem: {
				   method: 'GET'
				},
				edit: { 
					method: 'PUT'
				},
				deleteItem: { 
					method: 'DELETE'
				}
			}
			)
	});


	