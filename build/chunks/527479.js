/** Chunk was on web.js **/
/** chunk id: 527479, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk581079 = require("./581079.js"),
  i = /\.textClipping$/,
  o = {
    "text/plain": true,
    "text/html": true,
    "text/rtf": true
  },
  a = 5e3;

function s(e, t) {
  if (!n.g.FileReader || e.type && !(e.type in o)) return void t("");
  if ("" === e.type) {
    var a = "";
    i.test(e.name) && (a = e.name.replace(i, "")), t(a);
    return
  }
  var s = new FileReader;
  s.onload = function() {
    var e = s.result;
    "string" != typeof e && r(false), t(e)
  }, s.onerror = function() {
    t("")
  }, s.readAsText(e)
}
module.exports = function(e, t) {
  var n = 0,
    r = [];
  e.forEach(function(i) {
    s(i, function(i) {
      n++, i && r.push(i.slice(0, a)), n == e.length && t(r.join("\r"))
    })
  })
}