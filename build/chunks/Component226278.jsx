/** Chunk was on 44799 **/
/** chunk id: 226278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  g: () => g
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

function g(e) {
  var t;
  let {
    guildId: n,
    powerup: o,
    className: i
  } = e, a = (0, s.ZP)(n, o), u = a.type !== m.A3.LEVEL_ACTIVATED, d = (0, l.Z)(n, o, "GuildPowerupCardBodyFooter"), g = null != (t = (0, p._)(o, a, d)) ? t : true;
  return (0, r.jsx)(c.uf, {
    status: g,
    cost: u ? o.cost : true,
    className: i
  })
}

function f(e) {
  var t;
  let {
    guildId: n,
    powerup: p,
    badge: g,
    className: f,
    onHover: v,
    children: _
  } = e, h = (0, a.Z)(n), x = (0, s.ZP)(n, p), b = x.type !== m.A3.INACTIVE, C = (null == (t = x.sourceEntitlement) ? true : t.ends_at) != null, j = (0, l.Z)(n, p, "GuildPowerupCard"), E = o.useRef(null), {
    onShowMore: T
  } = (0, d.ZP)(n, p), [P, I] = o.useState(false), y = (0, i.O)(I, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.aB, {
      label: p.title,
      isActive: b,
      isWarning: C,
      badge: g,
      canRollback: j,
      onClick: T,
      onMouseOver: () => null == v ? true : v(true),
      onMouseLeave: () => null == v ? true : v(false),
      className: f,
      ref: e => {
        E.current = e, y.current = e
      },
      children: _
    }), !j && h && (0, r.jsx)(u.Z, {
      powerup: p,
      targetRef: E,
      isCardVisible: P
    })]
  })
}