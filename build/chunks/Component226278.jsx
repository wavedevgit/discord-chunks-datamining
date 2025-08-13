/** Chunk was on 44799 **/
/** chunk id: 226278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  g: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    powerup: o,
    className: i
  } = e, s = (0, a.ZP)(n, o), u = s.type !== m.A3.LEVEL_ACTIVATED, d = (0, l.Z)(n, o, "GuildPowerupCardBodyFooter"), f = null != (t = (0, p._)(o, s, d)) ? t : true;
  return (0, r.jsx)(c.uf, {
    status: f,
    cost: u ? o.cost : true,
    className: i
  })
}

function _(e) {
  var t;
  let {
    guildId: n,
    powerup: p,
    badge: f,
    className: _,
    onHover: x,
    children: g
  } = e, v = (0, s.Z)(n), b = (0, a.ZP)(n, p), h = b.type !== m.A3.INACTIVE, j = (null == (t = b.sourceEntitlement) ? true : t.ends_at) != null, C = (0, l.Z)(n, p, "GuildPowerupCard"), E = o.useRef(null), {
    onShowMore: I
  } = (0, d.ZP)(n, p), [N, w] = o.useState(false), Z = (0, i.O)(w, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.aB, {
      label: p.title,
      isActive: h,
      isWarning: j,
      badge: f,
      canRollback: C,
      onClick: I,
      onMouseOver: () => null == x ? true : x(true),
      onMouseLeave: () => null == x ? true : x(false),
      className: _,
      ref: e => {
        E.current = e, Z.current = e
      },
      children: g
    }), !C && v && (0, r.jsx)(u.Z, {
      powerup: p,
      targetRef: E,
      isCardVisible: N
    })]
  })
}