/** Chunk was on web.js **/
/** chunk id: 885019, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk1140 = require("./1140.js"),
  Chunk265930 = require("./265930.js"),
  a = function(e, t) {
    return e === t
  },
  s = function(e) {
    return !!e
  },
  o = [];

function l(e, t, n) {
  var o = [];
  return i(t.map(function(e) {
    return e.has(n)
  }).toList(), a, s, function(t, i) {
    var a = e.getText();
    o.push({
      offset: r.strlen(a.slice(0, t)),
      length: r.strlen(a.slice(t, i)),
      style: n
    })
  }), o
}
module.exports = function(e) {
  var t = e.getCharacterList().map(function(e) {
      return e.getStyle()
    }).toList(),
    n = t.flatten().toSet().map(function(n) {
      return l(e, t, n)
    });
  return Array.prototype.concat.apply(o, n.toJS())
}