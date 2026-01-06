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
  Chunk700092 = require("./700092.js"),
  Chunk535396 = require("./535396.js");

function m(e) {
  let {
    guildId: t,
    powerup: n,
    className: i
  } = e, l = (0, s.ZP)(t, n), a = l.type !== p.A3.LEVEL_ACTIVATED, d = (0, o.Z)(t, n, "GuildPowerupCardBodyFooter"), f = (0, u.P)(n, l, d);
  return (0, r.jsx)(c.uf, {
    status: f,
    cost: a ? n.cost : true,
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
  } = e, b = (0, a.Z)(n), h = (0, s.ZP)(n, u), j = h.type !== p.A3.INACTIVE, Z = (null == (t = h.sourceEntitlement) ? true : t.ends_at) != null, _ = (0, o.Z)(n, u, "GuildPowerupCard"), C = i.useRef(null), w = (0, f.Z)(n, u), [E, I] = i.useState(false), P = (0, l.O)(I, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.aB, {
      label: u.title,
      isActive: j,
      isWarning: Z,
      badge: m,
      canRollback: _,
      onClick: w,
      onMouseOver: () => null == v ? true : v(true),
      onMouseLeave: () => null == v ? true : v(false),
      className: g,
      ref: e => {
        C.current = e, P.current = e
      },
      children: x
    }), !_ && b && (0, r.jsx)(d.Z, {
      powerup: u,
      targetRef: C,
      isCardVisible: E
    })]
  })
}