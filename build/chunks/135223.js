/** Chunk was on web.js **/
/** chunk id: 135223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk341702 = require("./341702.js"),
  Chunk887490 = require("./887490.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let s = new Set(["line", "blockQuote"]),
  l = [];

function c(e, t, n) {
  if (i.bN.areStylesDisabled(e)) return [];
  let [o, c] = t;
  if (1 !== c.length || !i.aj.isInTypes(o, s)) return l;
  let {
    entries: u,
    serializedChildren: d
  } = i.q.markdown(o, n, true), f = [];
  for (let t = 0; t < u.length; t++) {
    let n = u[t];
    if (n.attributes.length > 0 && n.text.length > 0) {
      let o = u[t - 1],
        s = u[t + 1],
        l = {
          anchor: (0, r.t)(e, c, d, n.start),
          focus: (0, r.t)(e, c, d, n.start + n.text.length)
        },
        p = i.bN.nodes(e, {
          at: l,
          mode: "lowest",
          voids: false
        }),
        _ = {};
      for (let e of n.attributes)
        if (_[e] = true, "syntaxBefore" === e && null != s)
          for (let e of s.attributes) _["before_".concat(e)] = true;
        else if ("syntaxAfter" === e && null != o)
        for (let e of o.attributes) _["after_".concat(e)] = true;
      for (let [t, n] of p) {
        let t = {
          anchor: i.bN.start(e, n),
          focus: i.bN.end(e, n)
        };
        i.Jz.isBefore(t.anchor, l.anchor) && (t.anchor = l.anchor), i.Jz.isAfter(t.focus, l.focus) && (t.focus = l.focus), f.push(a({}, _, t))
      }
    }
  }
  return f
}