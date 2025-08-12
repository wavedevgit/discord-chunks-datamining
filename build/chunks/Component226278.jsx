/** Chunk was on 44799 **/
/** chunk id: 226278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  g: () => m
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

function m(e) {
  var t;
  let {
    guildId: n,
    powerup: o,
    className: i
  } = e, s = (0, a.ZP)(n, o), c = s.type !== f.A3.LEVEL_ACTIVATED, d = (0, l.Z)(n, o, "GuildPowerupCardBodyFooter"), m = null != (t = (0, p._)(o, s, d)) ? t : true;
  return (0, r.jsx)(u.uf, {
    status: m,
    cost: c ? o.cost : true,
    className: i
  })
}

function g(e) {
  var t;
  let {
    guildId: n,
    powerup: p,
    badge: m,
    className: g,
    onHover: x,
    children: v
  } = e, _ = (0, s.Z)(n), b = (0, a.ZP)(n, p), j = b.type !== f.A3.INACTIVE, h = (null == (t = b.sourceEntitlement) ? true : t.ends_at) != null, E = (0, l.Z)(n, p, "GuildPowerupCard"), C = o.useRef(null), {
    onShowMore: I
  } = (0, d.ZP)(n, p), [O, y] = o.useState(false), P = (0, i.O)(y, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.aB, {
      label: p.title,
      isActive: j,
      isWarning: h,
      badge: m,
      canRollback: E,
      onClick: I,
      onMouseOver: () => null == x ? true : x(true),
      onMouseLeave: () => null == x ? true : x(false),
      className: g,
      ref: e => {
        C.current = e, P.current = e
      },
      children: v
    }), !E && _ && (0, r.jsx)(c.Z, {
      powerup: p,
      targetRef: C,
      isCardVisible: O
    })]
  })
}