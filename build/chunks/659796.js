/** Chunk was on 8381 **/
/** chunk id: 659796, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk879154 = require("./879154.js"),
  Chunk214788 = require("./214788.js"),
  Chunk738766 = require("./738766.js"),
  Chunk551558 = require("./551558.js"),
  Chunk982716 = require("./982716.js"),
  Chunk223138 = require("./223138.js"),
  Chunk65183 = require("./65183.js"),
  Chunk555159 = require("./555159.js"),
  f = Chunk65183.List,
  p = Chunk65183.Repeat,
  h = Chunk223138("draft_tree_data_support"),
  d = h ? Chunk214788 : Chunk879154;
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