/** Chunk was on web.js **/
/** chunk id: 603880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk653523 = require("./653523.jsx"),
  Chunk350972 = require("./350972.js"),
  Chunk677056 = require("./677056.jsx"),
  Chunk635917 = require("./635917.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk649542 = require("./649542.js");
let E = () => [m.intl.string(m.t["EgWTY+"]), m.intl.string(m.t.umBn5f), m.intl.string(m.t.dG1wD1), m.intl.string(m.t.SesI4S), m.intl.string(m.t.RnMLvl)],
  y = () => {
    var e;
    return null != (e = l().sample(E())) ? e : m.intl.string(m.t["EgWTY+"])
  };

function b(e) {
  let {
    id: t,
    className: n,
    onSelect: a,
    isSelected: o = false,
    tabIndex: l,
    children: p,
    locked: m = false
  } = e, [E, b] = i.useState((0, _.gG)(t).name), O = t === f.Ic.PIRATE;
  return (0, r.jsx)(c.m, {
    text: E,
    onTooltipShow: () => O && b(y()),
    children: (0, r.jsxs)("div", {
      className: g.Co,
      children: [(0, r.jsx)(u.DUT, {
        role: "radio",
        "aria-label": E,
        "aria-checked": o,
        tabIndex: null != l ? l : o ? 0 : false,
        className: s()(g.Ni, {
          [g.wH]: o
        }, n),
        onClick: o ? h.tEg : () => null == a ? true : a(t),
        children: p
      }), o && (0, r.jsx)(d.H$, {}), m && (0, r.jsx)("div", {
        className: g.RK,
        children: (0, r.jsx)(u.XAi, {
          className: g.AA,
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
    onSelect: s,
    locked: o
  } = e;
  return (0, r.jsx)(b, {
    onSelect: i ? true : s,
    isSelected: n,
    id: t.id,
    className: i ? g.r9 : true,
    tabIndex: a,
    locked: o,
    children: (0, r.jsx)(p.A, {
      id: t.id,
      width: _.Kl
    })
  })
}