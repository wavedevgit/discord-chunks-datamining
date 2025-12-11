/** Chunk was on 44799 **/
/** chunk id: 226278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  g: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk448222 = require("./448222.js"),
  Chunk10765 = require("./10765.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk329134 = require("./329134.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk69323 = require("./69323.jsx"),
  Chunk535396 = require("./535396.js");

function m(e) {
  let {
    guildId: t,
    powerup: n,
    className: i
  } = e, l = (0, c.ZP)(t, n), o = l.type !== p.A3.LEVEL_ACTIVATED, s = (0, a.Z)(t, n, "GuildPowerupCardBodyFooter"), f = (0, u.P)(n, l, s);
  return (0, r.jsx)(d.uf, {
    status: f,
    cost: o ? n.cost : true,
    className: i
  })
}

function g(e) {
  var t;
  let {
    guildId: n,
    powerup: u,
    badge: m,
    className: g,
    onHover: v,
    children: x
  } = e, b = (0, s.Z)(n), h = (0, c.ZP)(n, u), j = h.type !== p.A3.INACTIVE, _ = (null == (t = h.sourceEntitlement) ? true : t.ends_at) != null, C = (0, a.Z)(n, u, "GuildPowerupCard"), Z = i.useRef(null), {
    onShowMore: w
  } = (0, o.Z)(n, u), [I, E] = i.useState(false), P = (0, l.O)(E, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.aB, {
      label: u.title,
      isActive: j,
      isWarning: _,
      badge: m,
      canRollback: C,
      onClick: w,
      onMouseOver: () => null == v ? true : v(true),
      onMouseLeave: () => null == v ? true : v(false),
      className: g,
      ref: e => {
        Z.current = e, P.current = e
      },
      children: x
    }), !C && b && (0, r.jsx)(f.Z, {
      powerup: u,
      targetRef: Z,
      isCardVisible: I
    })]
  })
}