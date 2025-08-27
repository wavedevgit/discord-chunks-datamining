/** Chunk was on web.js **/
/** chunk id: 814422, original params: e,t,n (module,exports,re quire) **/
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
var Chunk988231 = require("./988231.js"),
  Chunk470427 = require("./470427.js"),
  Chunk940660 = require("./940660.js"),
  Chunk656367 = require("./656367.js"),
  Chunk439000 = require("./439000.js"),
  Chunk740336 = require("./740336.js"),
  Chunk65183 = require("./65183.js"),
  Chunk817690 = require("./817690.js"),
  _ = Chunk65183.List,
  p = Chunk65183.Repeat,
  h = Chunk740336("draft_tree_data_support"),
  m = h ? Chunk470427 : Chunk988231;
module.exports = {
  processHTML: function(e, t) {
    return s(e, c, t)
  },
  processText: function(e, t, n) {
    return e.reduce(function(e, i, a) {
      i = f(i);
      var o = l(),
        s = {
          key: o,
          type: n,
          text: i,
          characterList: _(p(t, i.length))
        };
      if (h && 0 !== a) {
        var c = a - 1;
        s = r({}, s, {
          prevSibling: (e[c] = e[c].merge({
            nextSibling: o
          })).getKey()
        })
      }
      return e.push(new m(s)), e
    }, [])
  }
}