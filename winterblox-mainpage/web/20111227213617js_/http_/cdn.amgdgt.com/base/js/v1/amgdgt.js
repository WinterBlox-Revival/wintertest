var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var f="ad.amgdgt.com";var R=false;var b="amgdgt_";var a=window;var j=document;var B="";function V(d){return a[b+d]||null}function k(d,l){a[b+d]=l;N("set "+d+"="+l)}function A(d){try{delete a[b+d]}catch(l){a[b+d]=null}}function e(d){if(encodeURIComponent){return encodeURIComponent(d)}else{return escape(d)}}function Y(d){if(decodeURIComponent){return decodeURIComponent(d)}else{return unescape(d)}}function W(l){var p="_unencoded";var m="_encoded";var o=V(l+p);if(o){A(l+p);var n=e(o);k(l,n)}var d=V(l+m);if(d){A(l+m);n=d;k(l,n)}}function H(){var d=V("scheme");if(d){return d}else{if("https:"==document.location.protocol){return"https"}else{return"http"}}}function P(){var l=(j.domain).split(".");var d=l.length;return(d>1?("."+l[d-2]+"."+l[d-1]):(j.domain))}function J(m,n,d){n=e(n);var l=new Date();if(d){l.setMinutes(l.getMinutes()+Number(d))}else{l.setMonth(l.getMonth()+6)}j.cookie=m+"="+n+";domain="+P()+";path=/;expires="+l.toGMTString()}function F(m){var l=j.cookie;var d=l.indexOf(" "+m+"=");if(d==-1){d=l.indexOf(m+"=")}if(d==-1){return null}d=l.indexOf("=",d)+1;var n=l.indexOf(";",d);if(n==-1){n=l.length}return Y(l.substring(d,n))}function K(){var d="cookieTest";var l="OK";J(d,l,1);return(F(d)==l)}function C(d,l){if(d>0&&l>0){if(V("sa")||V("ca")||V("step")||V("cu")||V("v")||V("oid")){G("conversion vars, fcapping OFF");return false}else{if(K()){G("frequency="+d+" period="+l+" minutes, fcapping ON");return true}else{G("cookies disabled, fcapping OFF");return false}}}else{return false}}function O(m){var s=Number(V("frequency"));var r=Number(V("period"));A("frequency");A("period");if(!C(s,r)){return true}var d=0;var n=F(m);if(n){var q=n.split(".");var p=Number(q[0]);d=Number(q[1]);var o=d-new Date().getTime();if(o>0){p=p+1;N("current fcapping count="+p);if(p>s){G("fcap reached");return false}else{J(m,String(p)+"."+String(d),2*r);return true}}}var l=new Date();l.setMinutes(l.getMinutes()+r);d=l.getTime();J(m,"1."+String(d),2*r);return true}function c(d){return(d!=null&&typeof d==="object"&&typeof d.length==="number"&&d.length>0)}function X(l){if(l==null||typeof l!=="string"||l.length==0){return false}var d=/[a-zA-Z0-9 _-]+=[a-zA-Z0-9 _-]+/;return(d.exec(l)==l)}function g(d){return(d!=null&&typeof d==="string"&&typeof d.length==="number"&&d.length>0)}function I(l){if(!g(l)){return null}var d=l.replace(/^\s+/,"").replace(/\s+$/,"");if(g(d)){return d}else{return null}}function T(){var s=[];var t=V("kw");if(g(t)){t=[t]}if(c(t)){for(var n=0;n<t.length;n++){var q=I(t[n]);if(q){var m="kw="+q;if(X(m)){s.push(m)}}}}var d=V("kvp");if(g(d)){d=[d]}if(c(d)){for(var n=0;n<d.length;n++){var m=I(d[n]);if(m){if(X(m)){s.push(m)}}}}var r=(a.wlrcmd||a.WLRCMD||null);if(g(r)){var u=r.split(";");for(var n=0;n<u.length;n++){var m=I(u[n]);if(m){if(X(m)){s.push(m)}}}}if(a.amgdgt&&c(a.amgdgt.kvp)){var v=a.amgdgt.kvp;for(var n=0;n<v.length;n++){var m=I(v[n]);if(m){if(X(m)){s.push(m)}}}}if(s.length>0){var l=s.join(";");N(l);var o="kvp";var p=e(l);N("param "+o+"="+p);B+="&"+o+"="+p}}function M(d){W(d);var l=V(d);if(d&&l){N("param "+d+"="+l);B+="&"+d+"="+l}}function Q(){M("g");M("yb");M("z");M("info");A("info");var d=Math.random()*100000000000000000;k("rnd",d);M("rnd")}function U(d){var l=d+"count";if(V(l)){k(l,V(l)+1)}else{k(l,1)}}function h(){var l=V("p");var d=V("pl");if(l&&d){if(!O(b+"P"+l+"PL"+d)){return false}M("p");M("pl");Q();M("nmv");M("nrsz");M("vid");A("vid");M("vnid");A("vnid");T();M("pce");A("pce");M("clkurl");A("clkurl");return true}else{i("missing "+b+"p or "+b+"pl");return false}}function L(){var d=V("ctr");if(d){if(!O(b+"C"+d)){return false}M("ctr");M("sa");A("sa");M("ca");A("ca");M("step");A("step");M("cu");A("cu");M("v");A("v");M("oid");A("oid");Q();k("container",true);return true}else{i("missing "+b+"ctr");return false}}function S(){var d=V("t");if(d){B="t="+d+"&f=j";if(d=="i"){U(d);return h()}else{if(d=="x"){U(d);return L()}}}i("invalid "+b+"t :"+d);return false}function i(d){E("ERROR",d)}function G(d){E("INFO ",d)}function N(d){if(R){E("DEBUG",d)}}function E(l,d){if(typeof (a.console)=="object"&&a.console.firebug){a.console.log(l+": "+d)}}function Z(){var m=V("container_urls");if(m&&m instanceof Array){if(m.length>0){try{var n=new Array();for(var d=0;d<m.length;d++){n[d]=new Image();n[d].src=m[d];G("fired: "+m[d])}}catch(l){i("error in firing:"+l)}}else{G("no 3rd party pixels to be fired")}}else{i("invalid response")}}function D(){if(V("container_urls")&&V("container")){var l=new Z();A("container_urls");A("container")}else{if(S()){var d=H()+"://"+f+"/ads/?"+B;G("request url: "+d);j.write('<script type="text/javascript" src="'+d+'"><\/script>')}}}D()})();

}
/*
     FILE ARCHIVED ON 21:36:17 Dec 27, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:27:20 Dec 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 17.242
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 16.473
  cdx.remote: 11.862
  LoadShardBlock: 1372.418 (6)
  PetaboxLoader3.datanode: 1103.02 (7)
  PetaboxLoader3.resolve: 231.41 (3)
  load_resource: 162.537
*/