/** Chunk was on web.js **/
/** chunk id: 809206, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk797686 = require("./797686.js"),
  i = /\.textClipping$/,
  a = {
    "text/plain": true,
    "text/html": true,
    "text/rtf": true
  },
  s = 5e3;

function o(e, t) {
  if (!n.g.FileReader || e.type && !(e.type in a)) return void t("");
  if ("" === e.type) {
    var s = "";
    i.test(e.name) && (s = e.name.replace(i, "")), t(s);
    return
  }
  var o = new FileReader;
  o.onload = function() {
    var e = o.result;
    "string" != typeof e && r(false), t(e)
  }, o.onerror = function() {
    t("")
  }, o.readAsText(e)
}
module.exports = function(e, t) {
  var n = 0,
    r = [];
  e.forEach(function(i) {
    o(i, function(i) {
      n++, i && r.push(i.slice(0, s)), n == e.length && t(r.join("\r"))
    })
  })
}