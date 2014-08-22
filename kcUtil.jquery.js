/**
 * @file
 * Basic set of JS and jQuery utilities I use.
 *
 * v.1.0.0
 */
/**
 * Return the value of a URL query parameter.
 */
function getQueryParam(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
 * jQuery utilities
 */
(function ($) {
  /**
   * Simple test if an element exists.
   */
  $.fn.exists = function() {
    return this.length !== 0;
  };

  /**
   * Shorthand function to set element positioning.
   */
  $.fn.setPos = function($t,$r,$b,$l) {
    var $pos = {};
    var $css = {};

    $pos.top    = $t !== 'undefined' ? $t : null;
    $pos.right  = $r !== 'undefined' ? $r : null;
    $pos.bottom = $b !== 'undefined' ? $b : null;
    $pos.left   = $l !== 'undefined' ? $l : null;

    for (var $i in $pos) {
      if ($pos[$i] !== null) {
        $css[$i] = $pos[$i];
      }
    }

    $(this).css($css);
  };
})(jQuery);
