/** Chunk was on web.js **/
/** chunk id: 401460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk997945 = require("./997945.js"),
  Chunk630117 = require("./630117.jsx"),
  Chunk441319 = require("./441319.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk63224 = require("./63224.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = () => [Chunk388032.intl.string(Chunk388032.t.EgWTY2), Chunk388032.intl.string(Chunk388032.t.umBn5e), Chunk388032.intl.string(Chunk388032.t.dG1wDw), Chunk388032.intl.string(Chunk388032.t.SesI4e), Chunk388032.intl.string(Chunk388032.t.RnMLvr)],
  v = () => {
    var e;
    return null != (e = l().sample(O())) ? module : Chunk388032.intl.string(Chunk388032.t.EgWTY2)
  };

function I(e) {
  let {
    id: t,
    className: n,
    onSelect: o,
    isSelected: s = false,
    tabIndex: l,
    children: f,
    locked: h = false
  } = e, [g, b] = i.useState((0, _.aW)(t).name), O = t === d.Ru.PIRATE, I = (0, c.xUy)({
    label: g,
    isSelected: s
  });
  return (0, r.jsx)(c.ua7, {
    text: g,
    onTooltipShow: () => O && b(v()),
    children: e => (0, r.jsxs)("div", {
      className: m.appIconSelectionContainer,
      children: [(0, r.jsx)(c.P3F, y(E({}, e, I), {
        tabIndex: null != l ? l : I.tabIndex,
        className: a()(m.appIconSelection, {
          [m.selected]: s
        }, n),
        onClick: s ? p.dG4 : () => null == o ? true : o(t),
        children: f
      })), s && (0, r.jsx)(u.oK, {}), h && (0, r.jsx)("div", {
        className: m.lockedBadgeContainer,
        children: (0, r.jsx)(c.mBM, {
          className: m.lockedBadge,
          color: "currentColor"
        })
      })]
    })
  })
}

function T(e) {
  let {
    icon: t,
    isSelected: n,
    disabled: i,
    tabIndex: o,
    onSelect: a,
    locked: s
  } = e;
  return (0, r.jsx)(I, {
    onSelect: i ? true : a,
    isSelected: n,
    id: t.id,
    className: i ? m.disabled : true,
    tabIndex: o,
    locked: s,
    children: (0, r.jsx)(f.Z, {
      id: t.id,
      width: _.M9
    })
  })
}