(function(window) {
    'use strict';
    var $ = window.jQuery;
    
    function View(template){
    	this.DOM = '#ui-view';
    	this.template = template;
    	
    	this.render();
    }

    View.prototype.render = function render(){
    	$(this.DOM).html(this.template);
    };

    // Export to window
	window.app = window.app || {};
	window.app.View = View;

})(window);