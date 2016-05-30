define([], function () { 
    'use strict';
    var settings = {
        backgroundColor: "#4488AA",
        
        tileChars: ['.', '#'],
        tileSize: 16,
        textStyle: { font: "bold " + 16 + "px Arial",
                     fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
        mapWidth: 80,
        mapHeight: 60,

        lightIntensity: 0.8
    };
    
    return settings;
});
