/** Chunk was on 8381 **/
/** chunk id: 330296, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk733359 = require("./733359.js"),
  Chunk720379 = require("./720379.js"),
  o = function(t, e) {
    return t === e
  },
  a = function(t) {
    return !!t
  },
  u = [];
module.exports = function(t) {
  var e = t.getCharacterList().map(function(t) {
      return t.getStyle()
    }).toList(),
    r = e.flatten().toSet().map(function(r) {
      var u;
      return u = [], i(e.map(function(t) {
        return t.has(r)
      }).toList(), o, a, function(e, i) {
        var o = t.getText();
        u.push({
          offset: n.strlen(o.slice(0, e)),
          length: n.strlen(o.slice(e, i)),
          style: r
        })
      }), u
    });
  return Array.prototype.concat.apply(u, r.toJS())
}