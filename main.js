/*global document*/

function toFahrenheit() {
    
    'use strict';
    
    var f = document.getElementById('f_value').value,
        c;
    
    c = (f - 32) * (5/9);
    
    document.getElementById('demo').innerHTML = "<sup>o</sup>" + f + " = " + c + " <sup>o</sup>C";
    
}