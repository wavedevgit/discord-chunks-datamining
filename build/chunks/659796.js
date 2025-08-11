/** Chunk was on web.js **/
/** chunk id: 659796, original params: e,t,n (module,exports,re quire) **/
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
var Chunk879154 = require("./879154.js"),
  Chunk214788 = require("./214788.js"),
  Chunk738766 = require("./738766.js"),
  Chunk551558 = require("./551558.js"),
  Chunk982716 = require("./982716.js"),
  Chunk223138 = require("./223138.js"),
  Chunk65183 = require("./65183.js"),
  Chunk555159 = require("./555159.js"),
  _ = Chunk65183.List,
  p = Chunk65183.Repeat,
  h = Chunk223138("draft_tree_data_support"),
  m = h ? Chunk214788 : Chunk879154;
module.exports = {
  processHTML: function(e, t) {
    return s(e, c, t)
  },
  processText: function(e, t, n) {
    return e.reduce(function(e, i, o) {
      i = f(i);
      var a = l(),
        s = {
          key: a,
          type: n,
          text: i,
          characterList: _(p(t, i.length))
        };
      if (h && 0 !== o) {
        var c = o - 1;
        s = r({}, s, {
          prevSibling: (e[c] = e[c].merge({
            nextSibling: a
          })).getKey()
        })
      }
      return e.push(new m(s)), e
    }, [])
  }
}