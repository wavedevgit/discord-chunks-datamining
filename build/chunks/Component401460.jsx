/** Chunk was on web.js **/
/** chunk id: 401460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk997945 = require("./997945.js"),
  Chunk630117 = require("./630117.jsx"),
  Chunk441319 = require("./441319.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk63224 = require("./63224.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = () => [Chunk388032.intl.string(Chunk388032.t["EgWTY+"]), Chunk388032.intl.string(Chunk388032.t.umBn5f), Chunk388032.intl.string(Chunk388032.t.dG1wD1), Chunk388032.intl.string(Chunk388032.t.SesI4S), Chunk388032.intl.string(Chunk388032.t.RnMLvl)],
  I = () => {
    var e;
    return null != (e = l().sample(v())) ? module : Chunk388032.intl.string(Chunk388032.t["EgWTY+"])
  };

function T(e) {
  let {
    id: t,
    className: n,
    onSelect: a,
    isSelected: s = false,
    tabIndex: l,
    children: _,
    locked: m = false
  } = e, [E, y] = i.useState((0, p.aW)(t).name), v = t === f.Ru.PIRATE, T = (0, c.jm)({
    label: E,
    isSelected: s
  });
  return (0, r.jsx)(u.aML, {
    text: E,
    onTooltipShow: () => v && y(I()),
    children: e => (0, r.jsxs)("div", {
      className: g.appIconSelectionContainer,
      children: [(0, r.jsx)(u.P3F, O(b({}, e, T), {
        tabIndex: null != l ? l : T.tabIndex,
        className: o()(g.appIconSelection, {
          [g.selected]: s
        }, n),
        onClick: s ? h.dG4 : () => null == a ? true : a(t),
        children: _
      })), s && (0, r.jsx)(d.oK, {}), m && (0, r.jsx)("div", {
        className: g.lockedBadgeContainer,
        children: (0, r.jsx)(u.mBM, {
          className: g.lockedBadge,
          color: "currentColor"
        })
      })]
    })
  })
}

function S(e) {
  let {
    icon: t,
    isSelected: n,
    disabled: i,
    tabIndex: a,
    onSelect: o,
    locked: s
  } = e;
  return (0, r.jsx)(T, {
    onSelect: i ? true : o,
    isSelected: n,
    id: t.id,
    className: i ? g.disabled : true,
    tabIndex: a,
    locked: s,
    children: (0, r.jsx)(_.Z, {
      id: t.id,
      width: p.M9
    })
  })
}