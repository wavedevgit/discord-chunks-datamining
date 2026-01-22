/** Chunk was on web.js **/
/** chunk id: 490682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./321073.js");
var Chunk22098 = require("./22098.js"),
  Chunk711371 = require("./711371.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let o = new Set(["line", "blockQuote"]),
  l = [];

function c(e, t, n) {
  if (i.VW.areStylesDisabled(e)) return [];
  let [a, c] = t;
  if (1 !== c.length || !i.AS.isInTypes(a, o)) return l;
  let {
    entries: u,
    serializedChildren: d
  } = i.cv.markdown(a, n, true), f = [];
  for (let t = 0; t < u.length; t++) {
    let n = u[t];
    if (n.attributes.length > 0 && n.text.length > 0) {
      let a = u[t - 1],
        o = u[t + 1],
        l = {
          anchor: (0, r.Q)(e, c, d, n.start),
          focus: (0, r.Q)(e, c, d, n.start + n.text.length)
        },
        p = i.VW.nodes(e, {
          at: l,
          mode: "lowest",
          voids: false
        }),
        _ = {};
      for (let e of n.attributes)
        if (_[e] = true, "syntaxBefore" === e && null != o)
          for (let e of o.attributes) _["before_".concat(e)] = true;
        else if ("syntaxAfter" === e && null != a)
        for (let e of a.attributes) _["after_".concat(e)] = true;
      for (let [t, n] of p) {
        let t = {
          anchor: i.VW.start(e, n),
          focus: i.VW.end(e, n)
        };
        i.Kh.isBefore(t.anchor, l.anchor) && (t.anchor = l.anchor), i.Kh.isAfter(t.focus, l.focus) && (t.focus = l.focus), f.push(s({}, _, t))
      }
    }
  }
  return f
}