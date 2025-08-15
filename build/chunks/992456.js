/** Chunk was on 8381 **/
/** chunk id: 992456, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk581079 = require("./581079.js"),
  i = /\.textClipping$/,
  o = {
    "text/plain": true,
    "text/html": true,
    "text/rtf": true
  };
module.exports = function(t, e) {
  var a = 0,
    u = [];
  t.forEach(function(s) {
    ! function(t, e) {
      if (!r.g.FileReader || t.type && !(t.type in o)) return e("");
      if ("" === t.type) {
        var a = "";
        i.test(t.name) && (a = t.name.replace(i, "")), e(a);
        return
      }
      var u = new FileReader;
      u.onload = function() {
        var t = u.result;
        "string" != typeof t && n(false), e(t)
      }, u.onerror = function() {
        e("")
      }, u.readAsText(t)
    }(s, function(r) {
      a++, r && u.push(r.slice(0, 5e3)), a == t.length && e(u.join("\r"))
    })
  })
}