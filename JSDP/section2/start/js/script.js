(function(win, $){
	$(win.document).ready(function(){
		$('.advert').click(function(e){
			var circle = $('<div class="circle"></div>');
				circle.css('left',e.pageX-25);
				circle.css('top',e.pageY-25)
			$('.advert').append(circle);
		});

	});

})(window, jQuery);

(function(win, $){
	var CircleGen = (function () {
   var instance;
	 var _stage = '$(."advert")';
   function init() {

   	function create() {
   		return $('<div class = "circle"></div>');
   	}
    function css(circle ,left ,top) {
    	circle.css('left' ,left);
			circle.css('top' ,top);
    }
		function add(circle) {
			_stage.append(circle);
		}
   }
  if (!instance) {
  	return {
			create,
			css,
			add
		}
		else {
			return instance;
		}
  }

	})();


})(window, jQuery);
