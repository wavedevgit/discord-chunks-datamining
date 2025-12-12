/** Chunk was on web.js **/
/** chunk id: 892519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk911969 = require("./911969.js"),
  Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk987106 = require("./987106.jsx"),
  Chunk568248 = require("./568248.jsx"),
  Chunk695796 = require("./695796.js");

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

function m(e) {
  switch (e.type) {
    case a.re.BUTTON:
      return (0, r.jsx)(u.Z, _({}, e));
    case a.re.THUMBNAIL:
      return (0, r.jsx)(d.Z, _({}, e))
  }
}

function h(e) {
  let {
    components: t,
    accessory: n,
    renderComponents: i
  } = e, {
    message: u
  } = (0, l.CJ)(), [d, p] = (0, c.e4)(), _ = (0, c.$Y)(p), h = n.type === a.re.BUTTON;
  return (0, r.jsxs)("div", {
    className: f.section,
    ref: d,
    children: [(0, r.jsxs)("div", {
      className: f.children,
      children: [(0, r.jsx)("div", {
        className: o()(f.textChildren, {
          [f.verticallyCenterAlign]: h
        }),
        children: i(t)
      }), (0, r.jsx)("div", {
        className: o()(f.accessory, {
          [f.restrictWidth]: _
        }),
        children: m(n)
      })]
    }), null != u ? (0, r.jsx)(s.ZP, {
      message: u,
      component: e
    }) : null]
  })
}