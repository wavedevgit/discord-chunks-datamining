/** Chunk was on web.js **/
/** chunk id: 401460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk997945 = require("./997945.js"),
  Chunk630117 = require("./630117.jsx"),
  Chunk441319 = require("./441319.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787630 = require("./787630.js");
let E = () => [Chunk388032.intl.string(Chunk388032.t["EgWTY+"]), Chunk388032.intl.string(Chunk388032.t.umBn5f), Chunk388032.intl.string(Chunk388032.t.dG1wD1), Chunk388032.intl.string(Chunk388032.t.SesI4S), Chunk388032.intl.string(Chunk388032.t.RnMLvl)],
  b = () => {
    var e;
    return null != (e = l().sample(E())) ? module : Chunk388032.intl.string(Chunk388032.t["EgWTY+"])
  };

function y(e) {
  let {
    id: t,
    className: n,
    onSelect: a,
    isSelected: s = false,
    tabIndex: l,
    children: p,
    locked: h = false
  } = e, [E, y] = i.useState((0, _.aW)(t).name), O = t === f.Ru.PIRATE;
  return (0, r.jsx)(c.u, {
    text: E,
    onTooltipShow: () => O && y(b()),
    children: (0, r.jsxs)("div", {
      className: g.appIconSelectionContainer,
      children: [(0, r.jsx)(u.P3F, {
        role: "radio",
        "aria-label": E,
        "aria-checked": s,
        tabIndex: null != l ? l : s ? 0 : false,
        className: o()(g.appIconSelection, {
          [g.selected]: s
        }, n),
        onClick: s ? m.dG4 : () => null == a ? true : a(t),
        children: p
      }), s && (0, r.jsx)(d.oK, {}), h && (0, r.jsx)("div", {
        className: g.lockedBadgeContainer,
        children: (0, r.jsx)(u.mBM, {
          className: g.lockedBadge,
          color: "currentColor"
        })
      })]
    })
  })
}

function O(e) {
  let {
    icon: t,
    isSelected: n,
    disabled: i,
    tabIndex: a,
    onSelect: o,
    locked: s
  } = e;
  return (0, r.jsx)(y, {
    onSelect: i ? true : o,
    isSelected: n,
    id: t.id,
    className: i ? g.disabled : true,
    tabIndex: a,
    locked: s,
    children: (0, r.jsx)(p.Z, {
      id: t.id,
      width: _.M9
    })
  })
}