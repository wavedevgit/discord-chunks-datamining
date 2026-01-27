/** Chunk was on 38939 **/
/** chunk id: 284819, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk68055 = require("./68055.js"),
  Chunk617179 = require("./617179.js"),
  Chunk430031 = require("./430031.js"),
  Chunk279998 = require("./279998.js"),
  Chunk51169 = require("./51169.js"),
  Chunk661551 = require("./661551.js"),
  Chunk116740 = require("./116740.js"),
  Chunk396276 = require("./396276.js"),
  f = Chunk116740.List,
  p = Chunk116740.Repeat,
  h = Chunk661551("draft_tree_data_support"),
  d = h ? Chunk617179 : Chunk68055;
module.exports = {
  processHTML: function(t, e) {
    return o(t, s, e)
  },
  processText: function(t, e, r) {
    return t.reduce(function(t, n, i) {
      n = l(n);
      var o = a(),
        s = {
          key: o,
          type: r,
          text: n,
          characterList: f(p(e, n.length))
        };
      if (h && 0 !== i) {
        var u = i - 1;
        s = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
              return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), n.forEach(function(e) {
              var n, i, o;
              n = t, i = e, o = r[e], i in n ? Object.defineProperty(n, i, {
                value: o,
                enumerable: true,
                configurable: true,
                writable: true
              }) : n[i] = o
            })
          }
          return t
        }({}, s, {
          prevSibling: (t[u] = t[u].merge({
            nextSibling: o
          })).getKey()
        })
      }
      return t.push(new d(s)), t
    }, [])
  }
}