/** Chunk was on 38939 **/
/** chunk id: 809206, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk797686 = require("./797686.js"),
  i = /\.textClipping$/,
  o = {
    "text/plain": true,
    "text/html": true,
    "text/rtf": true
  };
module.exports = function(t, e) {
  var a = 0,
    s = [];
  t.forEach(function(u) {
    ! function(t, e) {
      if (!r.g.FileReader || t.type && !(t.type in o)) return e("");
      if ("" === t.type) {
        var a = "";
        i.test(t.name) && (a = t.name.replace(i, "")), e(a);
        return
      }
      var s = new FileReader;
      s.onload = function() {
        var t = s.result;
        "string" != typeof t && n(false), e(t)
      }, s.onerror = function() {
        e("")
      }, s.readAsText(t)
    }(u, function(r) {
      a++, r && s.push(r.slice(0, 5e3)), a == t.length && e(s.join("\r"))
    })
  })
}