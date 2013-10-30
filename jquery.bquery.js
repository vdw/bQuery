/**
 * bQuery
 *
 * @copyright	Copyright 2013, Dimitris Krestos
 * @license		Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link			http://vdw.staytuned.gr
 * @version		v0.1.0
 */

	/* Sample html structure

	<div class='selector'></div>

	*/

;(function($, window, undefined) {
	"use strict";

	$.fn.bquery = function(options) {

		var defaults = {};

		var options = $.extend(defaults, options);

		$(this).each(function() {

			var $this = $(this);

		});

	};

	$(document).ready(function () { $('[data-toggle="bquery"]').bquery(); });

})(jQuery);