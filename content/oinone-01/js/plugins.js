
// Start Window Load Function
$(window).on('load', function() {

    'use strict';

    //*********************************************
    //  LOADING ANIMATIONS
    //*********************************************

        $('.oinone-box').each(function(){
            var $this = $(this);
            $($this).waypoint(function(){
                $this.addClass('oinone-loaded');
                this.destroy();
            }, {offset: '75%'});
        });

    //*********************************************
    //  PORTFOLIO
    //*********************************************

        $('#portfolio-items').cubeportfolio({
            layoutMode: 'grid',
            mediaQueries: [{
                width: 1500,
                cols: 2,
            }, {
                width: 1100,
                cols: 2,
            }, {
                width: 640,
                cols: 2,
            }, {
                width: 480,
                cols: 1,
                options: {
                    caption: '',
                }
            }],
            defaultFilter: '*',
            animationType: 'scaleDown',
            gapHorizontal: 20,
            gapVertical: 20,
            gridAdjustment: 'responsive',
            caption: 'moveRight',
            displayType: 'sequentially',
            displayTypeSpeed: 150,
        });
        
});
