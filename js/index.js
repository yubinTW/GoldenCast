
var mq = $('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 26 * 1000,
    //gap in pixels between the tickers
    gap: 500,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'up',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
});