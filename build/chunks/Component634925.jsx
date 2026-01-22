/** Chunk was on 88615 **/
/** chunk id: 634925, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => m,
  h: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk294384 = require("./294384.js"),
  Chunk363487 = require("./363487.js"),
  Chunk998418 = require("./998418.js"),
  Chunk813847 = require("./813847.js"),
  Chunk890942 = require("./890942.jsx"),
  Chunk79275 = require("./79275.jsx"),
  Chunk224331 = require("./224331.js"),
  Chunk568065 = require("./568065.js");

function m(e) {
  let {
    guildId: t,
    powerup: l,
    className: n
  } = e, i = (0, a.Ay)(t, l), o = i.type !== p.b_.LEVEL_ACTIVATED, c = (0, s.A)(t, l, "GuildPowerupCardBodyFooter"), f = (0, u.e)(l, i, c);
  return (0, r.jsx)(d.$L, {
    status: f,
    cost: o ? l.cost : true,
    className: n
  })
}

function v(e) {
  var t;
  let {
    guildId: l,
    powerup: u,
    badge: m,
    className: v,
    onHover: A,
    children: g
  } = e, x = (0, o.A)(l), b = (0, a.Ay)(l, u), h = b.type !== p.b_.INACTIVE, j = (null == (t = b.sourceEntitlement) ? true : t.ends_at) != null, _ = (0, s.A)(l, u, "GuildPowerupCard"), E = n.useRef(null), y = (0, f.A)(l, u), [I, S] = n.useState(false), w = (0, i.K)(S, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.NI, {
      label: u.title,
      isActive: h,
      isWarning: j,
      badge: m,
      canRollback: _,
      onClick: y,
      onMouseOver: () => null == A ? true : A(true),
      onMouseLeave: () => null == A ? true : A(false),
      className: v,
      ref: e => {
        E.current = e, w.current = e
      },
      children: g
    }), !_ && x && (0, r.jsx)(c.A, {
      powerup: u,
      targetRef: E,
      isCardVisible: I
    })]
  })
}