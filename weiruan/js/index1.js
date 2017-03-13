/* index1.js Date:2017-03-13 09:46:48 */
define("js/index1.js",[],function(require,a,b){var c={_init:function(){c.piu()},piu:function(){$("#oneul li").on("click",function(){$("#twodiv div").eq($(this).index()).css({display:"block"}).siblings().css({display:"none"})})}};b.exports={init:c._init}});
