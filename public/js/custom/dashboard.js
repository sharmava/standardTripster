var app = angular.module('dashboard', []);

    app.controller('TabController', function(){

        this.tab = 1;

        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };


    });


