/* index2.js Date:2017-03-08 21:09:59 */
define("js/index2.js",["filter.js","zhengze.js","vue.js"],function(require,a,b){var c=require("filter.js");var d=require("zhengze.js");require("vue.js");var e={_init:function(){c.filter(),d.zhengze(),e.render()},render:function(){$.ajax({url:"/html/data/data.json",dataType:"JSON",type:"get"}).done(function(a){e.view(a)})},_ifWork:function(a,b,c,d,e){var f=a.decide[b];f.isA=c,f.isB=d,f.isC=e},view:function(a){var b={resume:a,sex1:{isCur1:!0,isCur2:!1},decide:{work1:{isA:!0,isB:!1,isC:!1},work2:{isA:!0,isB:!1,isC:!1},work3:{isA:!0,isB:!1,isC:!1},work4:{isA:!0,isB:!0,isC:!1},work5:{isA:!0,isB:!0,isC:!1}},expItem:{}};new Vue({el:"#twoul",data:b,methods:{subSex1:function(){this.sex1.isCur1=!0,this.sex1.isCur2=!1,this.resume.sex="\u7537"},subSex2:function(){this.sex1.isCur1=!1,this.sex1.isCur2=!0,this.resume.sex="\u5973"},subForm2:function(){e._ifWork(this,"work1",!1,!0,null)},subForm3:function(){e._ifWork(this,"work1",!0,!1,null)},subForm4:function(){e._ifWork(this,"work2",!0,!1,null)},subForm5:function(){e._ifWork(this,"work2",!1,!0,null)},threebao:function(){e._ifWork(this,"work3",!1,!0,null)},threebian:function(){e._ifWork(this,"work3",!0,!1,null)},fourbao:function(){e._ifWork(this,"work4",!1,!0,!0)},fourbian:function(){e._ifWork(this,"work4",!0,!1,!0)},fourk1:function(){e._ifWork(this,"work4",!0,!1,!0)},fivetian:function(a){this.expNum=a,this.expItem={},e._ifWork(this,"work5",!0,!1,!0)},fivebao:function(a){e._ifWork(this,"work5",!1,!0,!0);var b=this.resume.work_history;this.expNum<0?b.push(a):this.resume.work_history[this.expNum]=a},fivek1:function(){e._ifWork(this,"work5",!0,!1,!0)},bianPerson:function(a,b,c){this.expItem=b,this.expNum=c;var d=JSON.stringify(b);$("#twoul").data("work-item",d),e._ifWork(this,"work5",!0,!1,!0)},deletePerson:function(a){this.resume.work_history.splice(a,1)},canclePerson:function(){if(-99==this.expNum)e._ifwork(this,"work5",!0,!0,!1),alert(11);else if(-100==this.expNum)alert(33),e._ifWork(this,"work5",!1,!0,!0);else{e._ifWork(this,"work5",!1,!0,!0);var a=$.parseJSON($("#twoul").data("work-item"));this.resume.work_history.splice(this.expNum,1,a)}}}})}};b.exports={init:e._init}});
