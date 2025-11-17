/** Chunk was on web.js **/
/** chunk id: 527479, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk581079 = require("./581079.js"),
  i = /\.textClipping$/,
  a = {
    "text/plain": true,
    "text/html": true,
    "text/rtf": true
  },
  o = 5e3;

function s(e, t) {
  if (!n.g.FileReader || e.type && !(e.type in a)) return void t("");
  if ("" === e.type) {
    var o = "";
    i.test(e.name) && (o = e.name.replace(i, "")), t(o);
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
      n++, i && r.push(i.slice(0, o)), n == e.length && t(r.join("\r"))
    })
  })
}