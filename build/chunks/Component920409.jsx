/** Chunk was on web.js **/
/** chunk id: 920409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk155718 = require("./155718.js"),
  Chunk594808 = require("./594808.jsx"),
  Chunk207963 = require("./207963.jsx"),
  Chunk953756 = require("./953756.jsx"),
  Chunk292366 = require("./292366.jsx"),
  Chunk324877 = require("./324877.jsx"),
  Chunk996017 = require("./996017.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  switch (e.type) {
    case s.I5.BUTTON:
      return (0, r.jsx)(u.A, _({}, e));
    case s.I5.THUMBNAIL:
      return (0, r.jsx)(d.A, _({}, e))
  }
}

function m(e) {
  let {
    components: t,
    accessory: n,
    renderComponents: i
  } = e, {
    message: u
  } = (0, l.jc)(), [d, p] = (0, c.zn)(), _ = (0, c.Hq)(p), m = n.type === s.I5.BUTTON;
  return (0, r.jsxs)("div", {
    className: f.uW,
    ref: d,
    children: [(0, r.jsxs)("div", {
      className: f.Y_,
      children: [(0, r.jsx)("div", {
        className: a()(f.zt, {
          [f.uf]: m
        }),
        children: i(t)
      }), (0, r.jsx)("div", {
        className: a()(f.LP, {
          [f.HQ]: _
        }),
        children: h(n)
      })]
    }), null != u ? (0, r.jsx)(o.Ay, {
      message: u,
      component: e
    }) : null]
  })
}