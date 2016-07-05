var NoteApp = angular.module('NoteApp', []);

 NoteApp.controller("NoteCtrl", function() {
	this.message ="";
	this.save = "";
	this.info = "";
	this.mode = 0;

	this.save = function(){
		this.save = this.message;
		this.info = "Note sauvegardé";
		this.mode = 1;
	};
	this.delete = function(){
		this.message = "";
		this.info="Message supprimé";
		this.mode = 2;
	}
	
});