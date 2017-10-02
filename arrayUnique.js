"use strict";
/* global window, isArray, $, __imns */
/**
 * @function arrayUnique
 * @param arr {Array}
 * @return {Array}
 * @description; ensures all values in array are unique
 * @requires isArray
 **/
var arrayUnique = function(arr){
    if(isArray(arr)){
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
