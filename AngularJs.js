var formone=angular.module('formone',[]);
			formone.controller('controller1',function($scope){
				$scope.type={
					getText:function(){
						return $scope.data;
					},
					college:[
						{name:'Anu',group:'MPC'},
						{name:'kavya',group:'BIPC'},
						{name:'MAnu',group:'CEC'},
						{name:'Divya',group:'Bipc'},
						{name:'Navya',group:'MEC'},
						{name:'Kavitha',group:'CEC'},
					]

					
				}
			});