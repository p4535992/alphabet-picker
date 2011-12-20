(function ($) {
    
    "use strict";
    
    $.fn.alphabetPicker = function (options) {
    
        $('body').append('<ul id="azp-container"><li>a</li><li>b</li><li>c</li><li>d</li><li>e</li><li>f</li><li>g</li><li>h</li><li>i</li><li>j</li><li>k</li><li>l</li><li>m</li><li class="azp-breaker">n</li><li>o</li><li>p</li><li>q</li><li>r</li><li>s</li><li>t</li><li>u</li><li>v</li><li>w</li><li>x</li><li>y</li><li>z</li></ul>');
        
        var settings = $.extend({
            'destination'     : 'demo.html',
            'parameterName'   : 'letter',
            'uppercase'       : false
        }, options),
            $alphabetTriggers = this,
            $alphabetPicker   = $('#azp-container'),
            $letters          = $alphabetPicker.children('li');
        
        if (settings.uppercase) {
            $letters.css('textTransform', 'uppercase');
        }
        
        $alphabetTriggers.click(function(e) {
            var p = $(this).offset();
            $alphabetPicker.css('top', p.top + $(this).height()).css('left', p.left).fadeToggle('fast');
        });
        
        $alphabetPicker.on('click', 'li', function() {
            location.href = settings.destination + '?' + settings.parameterName + '=' + $(this).html();
        });
        
        return this;
        
    };
    
})(jQuery);