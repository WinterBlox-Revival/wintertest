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

(function(){var d=null;var h="google_conversion_id,google_conversion_format,google_conversion_type,google_conversion_order_id,google_conversion_language,google_conversion_value,google_conversion_domain,google_conversion_label,google_conversion_color,google_disable_viewthrough,google_remarketing_only,google_conversion_items,google_custom_params,google_conversion_date,google_conversion_time,google_conversion_js_version,onload_callback,opt_image_generator,google_is_call".split(",");
function i(a){return a!=d?escape(a.toString()):""}function j(a,b){var e=i(b);if(""!=e){var c=i(a);if(""!=c)return"&".concat(c,"=",e)}return""}function k(a){var b=typeof a;return a==d||"object"==b||"function"==b?d:(""+a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function l(a){var b;a=a.google_custom_params;if(!a||"object"!=typeof a||"function"==typeof a.join)b="";else{var e=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&"function"==typeof c.join){for(var f=[],g=0;g<c.length;++g){var q=k(c[g]);q!=d&&f.push(q)}c=0==f.length?d:f.join(",")}else c=k(c);(f=k(b))&&c!=d&&e.push(f+"="+c)}b=e.join(";")}return""==b?"":"&".concat("data=",encodeURIComponent(b))}
function m(a){return"number"!=typeof a&&"string"!=typeof a?"":i(a.toString())}function n(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],e=0,c=a.length;e<c;e++){var f=a[e],g=[];f&&(g.push(m(f.value)),g.push(m(f.quantity)),g.push(m(f.item_id)),g.push(m(f.adwords_grouping)),g.push(m(f.sku)),b.push("("+g.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}
function o(a,b,e){var c=[];if(a){var f=a.screen;f&&(c.push(j("u_h",f.height)),c.push(j("u_w",f.width)),c.push(j("u_ah",f.availHeight)),c.push(j("u_aw",f.availWidth)),c.push(j("u_cd",f.colorDepth)));a.history&&c.push(j("u_his",a.history.length))}e&&"function"==typeof e.getTimezoneOffset&&c.push(j("u_tz",-e.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&c.push(j("u_java",b.javaEnabled())),b.plugins&&c.push(j("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(j("u_nmime",b.mimeTypes.length)));
return c.join("")}function p(a,b){var e="";if(b){var c=b.referrer;if(a&&a.top&&b.location&&a.top.location==b.location)e+=j("ref",c!=d?c.toString().substring(0,256):""),c=b.location;e+=j("url",c!=d?c.toString().substring(0,256):"")}return e}function r(a){return a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}
function s(a){return a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com"}
function t(a,b){var e=navigator,c=document,f="/?";"landing"==b.google_conversion_type&&(f="/extclk?");var f=r(a)+"//"+s(b)+"/pagead/"+[b.google_remarketing_only?"viewthroughconversion/":"conversion/",i(b.google_conversion_id),f,"random=",i(b.google_conversion_time)].join(""),g;a:{g=b.google_conversion_language;if(g!=d){g=g.toString();if(2==g.length){g=j("hl",g);break a}if(5==g.length){g=j("hl",g.substring(0,2))+j("gl",g.substring(3,5));break a}}g=""}return f+=[j("cv",b.google_conversion_js_version),
j("fst",b.google_conversion_first_time),j("num",b.google_conversion_snippets),j("fmt",b.google_conversion_format),j("value",b.google_conversion_value),j("label",b.google_conversion_label),j("oid",b.google_conversion_order_id),j("bg",b.google_conversion_color),g,j("guid","ON"),j("disvt",b.google_disable_viewthrough),j("is_call",b.google_is_call),n(b),o(a,e,b.google_conversion_date),p(a,c),l(b)].join("")}
function u(){var a=v,b=v,e=t(a,b),c=function(a,b,c){return'<img height="'+c+'" width="'+b+'" border="0" src="'+a+'" />'};return 0==b.google_conversion_format&&b.google_conversion_domain==d?'<a href="'+(r(a)+"//web.archive.org/web/20111229061958/https://services.google.com/sitestats/"+({ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[b.google_conversion_language]?b.google_conversion_language+
".html":"en_US.html")+"?cid="+i(b.google_conversion_id))+'" target="_blank">'+c(e,135,27)+"</a>":1<b.google_conversion_snippets||3==b.google_conversion_format?c(e,1,1):'<iframe name="google_conversion_frame" width="'+(2==b.google_conversion_format?200:300)+'" height="'+(2==b.google_conversion_format?26:13)+'" src="'+e+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">'+c(e.replace(/\?random=/,"?frame=0&random="),1,1)+"</iframe>"}
function w(){var a=v;if("landing"==a.google_conversion_type||!a.google_conversion_id)return!1;if(a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);
a.google_conversion_js_version="7";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1);return!0};var v=window;if(v)if(/[\?&;]google_debug/.exec(document.URL)!=d){var x=v,y=document.getElementsByTagName("head")[0];y||(y=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(y,document.getElementsByTagName("body")[0]));var z=document.createElement("script");z.src=r(window)+"//"+s(x)+"/pagead/conversion_debug_overlay.js";y.appendChild(z)}else{try{w()&&document.write(u())}catch(A){}for(var B=v,C=0;C<h.length;C++)B[h[C]]=d};})();


}
/*
     FILE ARCHIVED ON 06:19:58 Dec 29, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:02:57 Dec 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.588
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.012
  esindex: 0.012
  cdx.remote: 91.144
  LoadShardBlock: 604.705 (6)
  PetaboxLoader3.datanode: 404.53 (8)
  load_resource: 401.963 (2)
  PetaboxLoader3.resolve: 245.926 (2)
*/