!function(a){function b(b,c,d){var e=a.Event(c);return a(b).trigger(e,d),!e.isDefaultPrevented()}function c(a,c,d,e){return a.global?b(c||s,d,e):void 0}function d(b){b.global&&0===a.active++&&c(b,null,"ajaxStart")}function e(b){b.global&&!--a.active&&c(b,null,"ajaxStop")}function f(a,b){var d=b.context;return b.beforeSend.call(d,a,b)===!1||c(b,d,"ajaxBeforeSend",[a,b])===!1?!1:void c(b,d,"ajaxSend",[a,b])}function g(a,b,d,e){var f=d.context,g="success";d.success.call(f,a,g,b),e&&e.resolveWith(f,[a,g,b]),c(d,f,"ajaxSuccess",[b,d,a]),i(g,b,d)}function h(a,b,d,e,f){var g=e.context;e.error.call(g,d,b,a),f&&f.rejectWith(g,[d,b,a]),c(e,g,"ajaxError",[d,e,a||b]),i(b,d,e)}function i(a,b,d){var f=d.context;d.complete.call(f,b,a),c(d,f,"ajaxComplete",[b,d]),e(d)}function j(){}function k(a){return a&&(a=a.split(";",2)[0]),a&&(a==x?"html":a==w?"json":u.test(a)?"script":v.test(a)&&"xml")||"text"}function l(a,b){return""==b?a:(a+"&"+b).replace(/[&?]{1,2}/,"?")}function m(b){b.processData&&b.data&&"string"!=a.type(b.data)&&(b.data=a.param(b.data,b.traditional)),!b.data||b.type&&"GET"!=b.type.toUpperCase()||(b.url=l(b.url,b.data),b.data=void 0)}function n(b,c,d,e){return a.isFunction(c)&&(e=d,d=c,c=void 0),a.isFunction(d)||(e=d,d=void 0),{url:b,data:c,success:d,dataType:e}}function o(b,c,d,e){var f,g=a.isArray(c),h=a.isPlainObject(c);a.each(c,function(c,i){f=a.type(i),e&&(c=d?e:e+"["+(h||"object"==f||"array"==f?c:"")+"]"),!e&&g?b.add(i.name,i.value):"array"==f||!d&&"object"==f?o(b,i,d,c):b.add(c,i)})}var p,q,r=0,s=window.document,t=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,u=/^(?:text|application)\/javascript/i,v=/^(?:text|application)\/xml/i,w="application/json",x="text/html",y=/^\s*$/,z=s.createElement("a");z.href=window.location.href,a.active=0,a.ajaxJSONP=function(b,c){if(!("type"in b))return a.ajax(b);var d,e,i=b.jsonpCallback,j=(a.isFunction(i)?i():i)||"jsonp"+ ++r,k=s.createElement("script"),l=window[j],m=function(b){a(k).triggerHandler("error",b||"abort")},n={abort:m};return c&&c.promise(n),a(k).on("load error",function(f,i){clearTimeout(e),a(k).off().remove(),"error"!=f.type&&d?g(d[0],n,b,c):h(null,i||"error",n,b,c),window[j]=l,d&&a.isFunction(l)&&l(d[0]),l=d=void 0}),f(n,b)===!1?(m("abort"),n):(window[j]=function(){d=arguments},k.src=b.url.replace(/\?(.+)=\?/,"?$1="+j),s.head.appendChild(k),b.timeout>0&&(e=setTimeout(function(){m("timeout")},b.timeout)),n)},a.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:x,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},a.ajax=function(b){var c,e,i=a.extend({},b||{}),n=a.Deferred&&a.Deferred();for(p in a.ajaxSettings)void 0===i[p]&&(i[p]=a.ajaxSettings[p]);d(i),i.crossDomain||(c=s.createElement("a"),c.href=i.url,c.href=c.href,i.crossDomain=z.protocol+"//"+z.host!=c.protocol+"//"+c.host),i.url||(i.url=window.location.toString()),(e=i.url.indexOf("#"))>-1&&(i.url=i.url.slice(0,e)),m(i);var o=i.dataType,r=/\?.+=\?/.test(i.url);if(r&&(o="jsonp"),i.cache!==!1&&(b&&b.cache===!0||"script"!=o&&"jsonp"!=o)||(i.url=l(i.url,"_="+Date.now())),"jsonp"==o)return r||(i.url=l(i.url,i.jsonp?i.jsonp+"=?":i.jsonp===!1?"":"callback=?")),a.ajaxJSONP(i,n);var t,u=i.accepts[o],v={},w=function(a,b){v[a.toLowerCase()]=[a,b]},x=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,A=i.xhr(),B=A.setRequestHeader;if(n&&n.promise(A),i.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",u||"*/*"),(u=i.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),A.overrideMimeType&&A.overrideMimeType(u)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&w("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(q in i.headers)w(q,i.headers[q]);if(A.setRequestHeader=w,A.onreadystatechange=function(){if(4==A.readyState){A.onreadystatechange=j,clearTimeout(t);var b,c=!1;if(A.status>=200&&A.status<300||304==A.status||0==A.status&&"file:"==x){o=o||k(i.mimeType||A.getResponseHeader("content-type")),b=A.responseText;try{"script"==o?(1,eval)(b):"xml"==o?b=A.responseXML:"json"==o&&(b=y.test(b)?null:a.parseJSON(b))}catch(d){c=d}c?h(c,"parsererror",A,i,n):g(b,A,i,n)}else h(A.statusText||null,A.status?"error":"abort",A,i,n)}},f(A,i)===!1)return A.abort(),h(null,"abort",A,i,n),A;if(i.xhrFields)for(q in i.xhrFields)A[q]=i.xhrFields[q];var C="async"in i?i.async:!0;A.open(i.type,i.url,C,i.username,i.password);for(q in v)B.apply(A,v[q]);return i.timeout>0&&(t=setTimeout(function(){A.onreadystatechange=j,A.abort(),h(null,"timeout",A,i,n)},i.timeout)),A.send(i.data?i.data:null),A},a.get=function(){return a.ajax(n.apply(null,arguments))},a.post=function(){var b=n.apply(null,arguments);return b.type="POST",a.ajax(b)},a.getJSON=function(){var b=n.apply(null,arguments);return b.dataType="json",a.ajax(b)},a.fn.load=function(b,c,d){if(!this.length)return this;var e,f=this,g=b.split(/\s/),h=n(b,c,d),i=h.success;return g.length>1&&(h.url=g[0],e=g[1]),h.success=function(b){f.html(e?a("<div>").html(b.replace(t,"")).find(e):b),i&&i.apply(f,arguments)},a.ajax(h),this};var A=encodeURIComponent;a.param=function(b,c){var d=[];return d.add=function(b,c){a.isFunction(c)&&(c=c()),null==c&&(c=""),this.push(A(b)+"="+A(c))},o(d,b,c),d.join("&").replace(/%20/g,"+")}}(Zepto);