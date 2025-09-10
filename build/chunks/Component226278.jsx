/** Chunk was on 44799 **/
/** chunk id: 226278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  g: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk434650 = require("./434650.js"),
  Chunk10765 = require("./10765.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk69323 = require("./69323.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk787188 = require("./787188.js"),
  Chunk535396 = require("./535396.js");

function f(e) {
  var t;
  let {
    guildId: n,
    powerup: i,
    className: o
  } = e, l = (0, a.ZP)(n, i), u = l.type !== m.A3.LEVEL_ACTIVATED, d = (0, s.Z)(n, i, "GuildPowerupCardBodyFooter"), f = null != (t = (0, p._)(i, l, d)) ? t : true;
  return (0, r.jsx)(c.uf, {
    status: f,
    cost: u ? i.cost : true,
    className: o
  })
}

function g(e) {
  var t;
  let {
    guildId: n,
    powerup: p,
    badge: f,
    className: g,
    onHover: v,
    children: x
  } = e, _ = (0, l.Z)(n), h = (0, a.ZP)(n, p), b = h.type !== m.A3.INACTIVE, C = (null == (t = h.sourceEntitlement) ? true : t.ends_at) != null, j = (0, s.Z)(n, p, "GuildPowerupCard"), P = i.useRef(null), {
    onShowMore: E
  } = (0, d.ZP)(n, p), [I, T] = i.useState(false), y = (0, o.O)(T, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.aB, {
      label: p.title,
      isActive: b,
      isWarning: C,
      badge: f,
      canRollback: j,
      onClick: E,
      onMouseOver: () => null == v ? true : v(true),
      onMouseLeave: () => null == v ? true : v(false),
      className: g,
      ref: e => {
        P.current = e, y.current = e
      },
      children: x
    }), !j && _ && (0, r.jsx)(u.Z, {
      powerup: p,
      targetRef: P,
      isCardVisible: I
    })]
  })
}