"use strict";
var __imns = function(){ return window; }
describe("arrayUnique Test Suite", function(){
    beforeEach(function(done){
        var requireArr = [
            'dist/c/Namespace/Namespace.js',
            'dist/f/isArray/isArray.js'
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }
        setTimeout(function(){ done(); }, 1000);
    });

        var adr = (window.__imns) ? window.__imns() : window;
        var obj = {}, arr = [];
        var arr1 = [1,2,3,4,5,6,6,6,6,6];
        var arr3 = [1,1,1,1,1,1,1];
        var arr2 = [1,2,3,4,5,6];
        var arr4 = [1,2,3,4,5,6];

    it("arrayUnique is a function", function(){ expect(typeof adr.arrayUnique === 'function').toBe(true); });
    it("arrayUnique: if no duplicated values the returned array compares with original  = true", function(){ 
        expect(adr.arrayUnique(arr2).length == 6).toBe(true); 
    });
    it("arrayUnique: if duplicated values the returned array removes them = true", function(){
        expect(adr.arrayUnique(arr1).length == 6).toBe(true);
    });
    it("arrayUnique: if all values duplicated only [x] single value in array returned", function(){
        expect(adr.arrayUnique(arr3).length == 1).toBe(true);
    });
});
