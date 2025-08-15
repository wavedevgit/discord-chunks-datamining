/** Chunk was on 91584 **/
/** chunk id: 814422, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk988231 = require("./988231.js"),
  Chunk470427 = require("./470427.js"),
  Chunk940660 = require("./940660.js"),
  Chunk656367 = require("./656367.js"),
  Chunk439000 = require("./439000.js"),
  Chunk740336 = require("./740336.js"),
  Chunk65183 = require("./65183.js"),
  Chunk817690 = require("./817690.js"),
  f = Chunk65183.List,
  p = Chunk65183.Repeat,
  h = Chunk740336("draft_tree_data_support"),
  d = h ? Chunk470427 : Chunk988231;
module.exports = {
  processHTML: function(t, e) {
    return o(t, u, e)
  },
  processText: function(t, e, r) {
    return t.reduce(function(t, n, i) {
      n = l(n);
      var o = a(),
        u = {
          key: o,
          type: r,
          text: n,
          characterList: f(p(e, n.length))
        };
      if (h && 0 !== i) {
        var s = i - 1;
        u = function(t) {
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
        }({}, u, {
          prevSibling: (t[s] = t[s].merge({
            nextSibling: o
          })).getKey()
        })
      }
      return t.push(new d(u)), t
    }, [])
  }
}