define([], function () { 
    'use strict';
    var settings = {
        tileChars: ['.', '#'],
        tileSize: 16,
        textStyle: { font: "bold " + 16 + "px Arial",
                     fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
        mapWidth: 80,
        mapHeight: 60
    };
    
    return settings;
});
