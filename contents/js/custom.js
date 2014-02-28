jQuery(document).ready(function() {
//Tooltip
jQuery('.custom-tooltip').tooltip();

jQuery('.ch-item').on("mouseenter mouseleave", function(e){
	e.preventDefault();
	$(this).toggleClass('hover');
});

jQuery('.ch-second-item').on("mouseenter mouseleave", function(e){
	e.preventDefault();
	$(this).toggleClass('hover');
});
//Mobile menu
	var $block =jQuery('<div/>',{
		'class':'top-scroll'
		})
	.append('<a href="#"/>')
	.hide()
	.appendTo('body')
	.click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
//initialization
var $window = jQuery(window);
	if ($window.scrollTop() > 17) {
			showElem();
		} else {
			hideElem();
		}
//handlers		
	$window.scroll(function () {		
			if (jQuery(this).scrollTop() > 17) {
				showElem();
			} else {
				hideElem();
			}
	});
//functions
function hideElem(){
		jQuery('.main-nav-wrap').removeClass('fixed-pos');
		$block.fadeOut();
	}
function showElem(){
		jQuery('.main-nav-wrap').addClass('fixed-pos');
		$block.fadeIn();
	}
});
(function($){ window.addEvent('domready',function(){this.Slider88 = new DJImageSliderModule({id: '88', slider_type: 1, slide_size: 210, visible_slides: 3, show_buttons: 1, show_arrows: 1, preload: 800},{auto: 1, transition: Fx.Transitions.Cubic.easeInOut, duration: 800, delay: 3800})}); })(document.id);
jQuery.noConflict();
		jQuery(function($) {
			$("a.fancybox-button").fancybox({
				//padding: 0,
				//fitToView	: false,
				helpers		: {
					title	: { type : 'inside' }, // options: over, inside, outside, float
					buttons	: {}
				},
				afterLoad : function() {
					this.title = '<b class="fancyboxCounter">Image ' + (this.index + 1) + ' of ' + this.group.length + '</b>' + (this.title ? ' | ' + this.title : '');
				}
			});
		});
	
window.addEvent('load', function() {
				new JCaption('img.caption');
			});
