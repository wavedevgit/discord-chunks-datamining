/** Chunk was on web.js **/
/** chunk id: 829906, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk733359 = require("./733359.js"),
  Chunk257469 = require("./257469.js"),
  o = function(e, t) {
    return e === t
  },
  a = function(e) {
    return !!e
  },
  s = [];

function l(e, t, n) {
  var s = [];
  return i(t.map(function(e) {
    return e.has(n)
  }).toList(), o, a, function(t, i) {
    var o = e.getText();
    s.push({
      offset: r.strlen(o.slice(0, t)),
      length: r.strlen(o.slice(t, i)),
      style: n
    })
  }), s
}
module.exports = function(e) {
  var t = e.getCharacterList().map(function(e) {
      return e.getStyle()
    }).toList(),
    n = t.flatten().toSet().map(function(n) {
      return l(e, t, n)
    });
  return Array.prototype.concat.apply(s, n.toJS())
}