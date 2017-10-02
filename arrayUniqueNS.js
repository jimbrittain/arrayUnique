"use strict";
/* global window, IMDebugger, $, __imns */
var adr = __imns('util.tools');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('arrayUnique' in adr)){
    adr.arrayUnique = function(arr){
        var uv = __imns('util.validation');
        if(uv.isArray(arr)){
            var rarr = [], n = 0, on = null, i, imax, found = false;
            while(n < arr.length){
                found = false;
                on = arr[n];
                for(i=0, imax=rarr.length; i<imax; i+=1){
                    if(on === rarr[i]){
                        found = true;
                        break; }}
                if(!found){ rarr.push(on); }
                n += 1; }
            return rarr; }
        return arr; };
}
