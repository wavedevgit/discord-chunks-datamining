/** Chunk was on 44799 **/
/** chunk id: 226278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  g: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk10765 = require("./10765.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk329134 = require("./329134.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk69323 = require("./69323.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js");

function m(e) {
  let {
    guildId: t,
    powerup: n,
    className: i
  } = e, o = (0, s.ZP)(t, n), a = o.type !== f.A3.LEVEL_ACTIVATED, d = (0, l.Z)(t, n, "GuildPowerupCardBodyFooter"), p = (0, c.P)(n, o, d);
  return (0, r.jsx)(u.uf, {
    status: p,
    cost: a ? n.cost : true,
    className: i
  })
}

function g(e) {
  var t;
  let {
    guildId: n,
    powerup: c,
    badge: m,
    className: g,
    onHover: v,
    children: x
  } = e, _ = (0, a.Z)(n), b = (0, s.ZP)(n, c), h = b.type !== f.A3.INACTIVE, j = (null == (t = b.sourceEntitlement) ? true : t.ends_at) != null, C = (0, l.Z)(n, c, "GuildPowerupCard"), w = i.useRef(null), {
    onShowMore: Z
  } = (0, p.ZP)(n, c), [I, E] = i.useState(false), P = (0, o.O)(E, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.aB, {
      label: c.title,
      isActive: h,
      isWarning: j,
      badge: m,
      canRollback: C,
      onClick: Z,
      onMouseOver: () => null == v ? true : v(true),
      onMouseLeave: () => null == v ? true : v(false),
      className: g,
      ref: e => {
        w.current = e, P.current = e
      },
      children: x
    }), !C && _ && (0, r.jsx)(d.Z, {
      powerup: c,
      targetRef: w,
      isCardVisible: I
    })]
  })
}