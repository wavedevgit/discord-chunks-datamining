/** Chunk was on 91584 **/
/** chunk id: 78359, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk733359 = require("./733359.js"),
  Chunk102801 = require("./102801.js"),
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