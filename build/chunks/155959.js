/** Chunk was on web.js **/
/** chunk id: 155959, original params: e,t,n (module,exports,re quire) **/
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
var Chunk117242 = require("./117242.js"),
  Chunk309987 = require("./309987.js"),
  Chunk637914 = require("./637914.js"),
  Chunk703579 = require("./703579.js"),
  Chunk249252 = require("./249252.js"),
  Chunk40375 = require("./40375.js"),
  Chunk65183 = require("./65183.js"),
  Chunk799995 = require("./799995.js"),
  p = Chunk65183.List,
  _ = Chunk65183.Repeat,
  h = Chunk40375("draft_tree_data_support"),
  m = h ? Chunk309987 : Chunk117242;
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
          characterList: p(_(t, i.length))
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