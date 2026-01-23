/** Chunk was on 88615 **/
/** chunk id: 634925, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f,
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

function f(e) {
  let {
    guildId: t,
    powerup: n,
    className: l
  } = e, i = (0, a.Ay)(t, n), s = i.type !== m.b_.LEVEL_ACTIVATED, c = (0, o.A)(t, n, "GuildPowerupCardBodyFooter"), p = (0, u.e)(n, i, c);
  return (0, r.jsx)(d.$L, {
    status: p,
    cost: s ? n.cost : true,
    className: l
  })
}

function v(e) {
  var t;
  let {
    guildId: n,
    powerup: u,
    badge: f,
    className: v,
    onHover: g,
    children: A
  } = e, _ = (0, s.A)(n), x = (0, a.Ay)(n, u), h = x.type !== m.b_.INACTIVE, b = (null == (t = x.sourceEntitlement) ? true : t.ends_at) != null, j = (0, o.A)(n, u, "GuildPowerupCard"), E = l.useRef(null), w = (0, p.A)(n, u), [y, I] = l.useState(false), S = (0, i.K)(I, 1);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.NI, {
      label: u.title,
      isActive: h,
      isWarning: b,
      badge: f,
      canRollback: j,
      onClick: w,
      onMouseOver: () => null == g ? true : g(true),
      onMouseLeave: () => null == g ? true : g(false),
      className: v,
      ref: e => {
        E.current = e, S.current = e
      },
      children: A
    }), !j && _ && (0, r.jsx)(c.A, {
      powerup: u,
      targetRef: E,
      isCardVisible: y
    })]
  })
}