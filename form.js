/*'use strict';
var userInfoModule = angular.module('userInfoModule',[]);
userInfoModule.controller('userInfoCtrl',['$scope',function($scope){
	$scope.userInfo = {
		email:'tt@163.com',
		password:'123',
		autoLogin:true
	}
	$scope.getUserInfo = function(){
		console.log(this.userInfo);
	}
	$scope.setUserInfo = function(){
		$scope.userInfo = {
			email:'xxx@163.com',
			password:'123444',
			autoLogin:false
		}
	}
	$scope.color = 'green';
	$scope.show = false;
	$scope.changeColor = function(){
		if($scope.color=='green'){
			$scope.color = 'red';
			$scope.show = true;
		}else{
			$scope.color = 'green';
			$scope.show = false;
		}
		
	}
}]);

userInfoModule.directive('loader',function(){
	return {
		restrict:'AE',
		template:'<div>滑动</div>',
		link:function(scope,element,attr){
			element.bind("mouseenter",function(){
				scope.$apply("getUserInfo()");
			});
		}	
	}
});*/

var diretiveM  = angular.module("directiveModule",[]);
diretiveM.controller('ctr1',function($scope){
	$scope.show = function(){
		console.log(1);
	}
});

diretiveM.controller('ctr2',function($scope){
	$scope.show1 = function(){
		console.log(2);
	}
});

diretiveM.directive("loader",function(){
	return {
		restrict:"AE",
		link:function(scope,element,attr){
			element.bind("mouseenter",function(){
				scope.$apply(attr.howtoload);
			});
		}
	}

});
