/** Chunk was on web.js **/
/** chunk id: 284819, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk68055 = require("./68055.js"),
  Chunk617179 = require("./617179.js"),
  Chunk430031 = require("./430031.js"),
  Chunk279998 = require("./279998.js"),
  Chunk51169 = require("./51169.js"),
  Chunk661551 = require("./661551.js"),
  Chunk116740 = require("./116740.js"),
  Chunk396276 = require("./396276.js"),
  p = Chunk116740.List,
  _ = Chunk116740.Repeat,
  h = Chunk661551("draft_tree_data_support"),
  m = h ? Chunk617179 : Chunk68055;
module.exports = {
  processHTML: function(e, t) {
    return o(e, c, t)
  },
  processText: function(e, t, n) {
    return e.reduce(function(e, i, a) {
      i = f(i);
      var s = l(),
        o = {
          key: s,
          type: n,
          text: i,
          characterList: p(_(t, i.length))
        };
      if (h && 0 !== a) {
        var c = a - 1;
        o = r({}, o, {
          prevSibling: (e[c] = e[c].merge({
            nextSibling: s
          })).getKey()
        })
      }
      return e.push(new m(o)), e
    }, [])
  }
}