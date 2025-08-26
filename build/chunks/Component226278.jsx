/** Chunk was on 44799 **/
/** chunk id: 226278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  g: () => m
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

function m(e) {
  var t;
  let {
    guildId: n,
    powerup: i,
    className: o
  } = e, a = (0, s.ZP)(n, i), c = a.type !== f.A3.LEVEL_ACTIVATED, d = (0, l.Z)(n, i, "GuildPowerupCardBodyFooter"), m = null != (t = (0, p._)(i, a, d)) ? t : true;
  return (0, r.jsx)(u.uf, {
    status: m,
    cost: c ? i.cost : true,
    className: o
  })
}

function _(e) {
  var t;
  let {
    guildId: n,
    powerup: p,
    badge: m,
    className: _,
    onHover: g,
    children: v
  } = e, x = (0, a.Z)(n), b = (0, s.ZP)(n, p), h = b.type !== f.A3.INACTIVE, C = (null == (t = b.sourceEntitlement) ? true : t.ends_at) != null, j = (0, l.Z)(n, p, "GuildPowerupCard"), I = i.useRef(null), {
    onShowMore: E
  } = (0, d.ZP)(n, p), [w, Z] = i.useState(false), N = (0, o.O)(Z, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.aB, {
      label: p.title,
      isActive: h,
      isWarning: C,
      badge: m,
      canRollback: j,
      onClick: E,
      onMouseOver: () => null == g ? true : g(true),
      onMouseLeave: () => null == g ? true : g(false),
      className: _,
      ref: e => {
        I.current = e, N.current = e
      },
      children: v
    }), !j && x && (0, r.jsx)(c.Z, {
      powerup: p,
      targetRef: I,
      isCardVisible: w
    })]
  })
}