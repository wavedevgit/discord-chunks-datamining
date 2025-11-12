/** Chunk was on 44799 **/
/** chunk id: 226278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  g: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk907331 = require("./907331.js"),
  Chunk10765 = require("./10765.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk69323 = require("./69323.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk787188 = require("./787188.js"),
  Chunk535396 = require("./535396.js");

function m(e) {
  var t;
  let {
    guildId: n,
    powerup: i,
    className: l
  } = e, a = (0, s.ZP)(n, i), u = a.type !== f.A3.LEVEL_ACTIVATED, d = (0, o.Z)(n, i, "GuildPowerupCardBodyFooter"), m = null != (t = (0, p._)(i, a, d)) ? t : true;
  return (0, r.jsx)(c.uf, {
    status: m,
    cost: u ? i.cost : true,
    className: l
  })
}

function g(e) {
  var t;
  let {
    guildId: n,
    powerup: p,
    badge: m,
    className: g,
    onHover: v,
    children: x
  } = e, _ = (0, a.Z)(n), b = (0, s.ZP)(n, p), h = b.type !== f.A3.INACTIVE, j = (null == (t = b.sourceEntitlement) ? true : t.ends_at) != null, C = (0, o.Z)(n, p, "GuildPowerupCard"), w = i.useRef(null), {
    onShowMore: I
  } = (0, d.ZP)(n, p), [E, Z] = i.useState(false), P = (0, l.O)(Z, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.aB, {
      label: p.title,
      isActive: h,
      isWarning: j,
      badge: m,
      canRollback: C,
      onClick: I,
      onMouseOver: () => null == v ? true : v(true),
      onMouseLeave: () => null == v ? true : v(false),
      className: g,
      ref: e => {
        w.current = e, P.current = e
      },
      children: x
    }), !C && _ && (0, r.jsx)(u.Z, {
      powerup: p,
      targetRef: w,
      isCardVisible: E
    })]
  })
}