/* index1.js Date:2017-03-14 09:30:08 */
define("js/index1.js",[],function(require,a,b){var c={_init:function(){c.piupiu()},addEvent:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!0):a.attachEvent("on"+b,c)},piu:function(a,b){var d=document.getElementById(a);var e=document.getElementById(b);c.addEvent(d,"click",function(a){a||window.event;e.style.display="block"}),c.addEvent(document,"click",function(a){a||window.event;e.style.display="none"}),c.addEvent(e,"click",function(a){var b=a||window.event;var c=b.target||b.srcElement;"li"==c.tagName.toLowerCase()&&(d.innerHTML=c.innerHTML,e.style.display="none")})},piupiu:function(){c.piu("diana1","xiaz1"),c.piu("diana2","xiaz2"),c.piu("diana3","xiaz3")}};b.exports={init:c._init}});
