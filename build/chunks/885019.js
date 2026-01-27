/** Chunk was on 38939 **/
/** chunk id: 885019, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk1140 = require("./1140.js"),
  Chunk265930 = require("./265930.js"),
  o = function(t, e) {
    return t === e
  },
  a = function(t) {
    return !!t
  },
  s = [];
module.exports = function(t) {
  var e = t.getCharacterList().map(function(t) {
      return t.getStyle()
    }).toList(),
    r = e.flatten().toSet().map(function(r) {
      var s;
      return s = [], i(e.map(function(t) {
        return t.has(r)
      }).toList(), o, a, function(e, i) {
        var o = t.getText();
        s.push({
          offset: n.strlen(o.slice(0, e)),
          length: n.strlen(o.slice(e, i)),
          style: r
        })
      }), s
    });
  return Array.prototype.concat.apply(s, r.toJS())
}