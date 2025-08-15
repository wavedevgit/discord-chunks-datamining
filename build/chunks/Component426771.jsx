/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk857666 = require("./857666.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk535396 = require("./535396.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk639560 = require("./639560.js");

function x(e) {
  var t, n, x;
  let g, {
      guildId: v,
      group: b,
      powerups: h
    } = e,
    [j, C] = o.useState(false),
    E = (0, a.Gv)(v, h),
    I = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
    N = (0, u.Z)(b, v);
  if (true === N || h.length <= 0) return null;
  let w = E.some(e => e.type !== p.A3.INACTIVE),
    Z = (0, d.d)(w),
    P = E.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  true !== P ? g = {
    type: "expiring",
    expiringAt: P
  } : w && (g = {
    type: "active",
    statusText: f.intl.string(m.default.FFLkm5)
  });
  let S = E.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === p.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    y = E.reduce((e, t) => {
      var n, r;
      let {
        powerup: o
      } = t;
      return e < (null != (n = null == o ? true : o.cost) ? n : 0) ? e : null != (r = null == o ? true : o.cost) ? r : 0
    }, null != (x = null == (n = E[0]) || null == (t = n.powerup) ? true : t.cost) ? x : 0),
    T = E.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    O = w ? S : y,
    A = !w && T > O ? "+" : true,
    R = !I && j ? N.image.animatedUrl : N.image.staticUrl,
    L = null != N.viewCta && "" !== N.viewCta ? N.viewCta : f.intl.string(m.default["27GkOj"]),
    k = null != N.viewCtaTooltip && "" !== N.viewCtaTooltip ? N.viewCtaTooltip : true;
  return (0, r.jsxs)(c.aB, {
    label: N.title,
    isActive: w,
    badge: N.badge,
    onClick: () => N.openModal(h),
    onMouseOver: () => C(true),
    onMouseLeave: () => C(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: R,
      className: _.image
    }), (0, r.jsx)(c.Q9, {
      title: N.title,
      textColor: Z,
      footer: (0, r.jsx)(c.uf, {
        status: g,
        cost: O,
        costDecorator: A
      }),
      children: (0, r.jsx)(l.Text, {
        className: _.description,
        color: Z,
        variant: "text-sm/medium",
        children: N.description
      })
    }), (0, r.jsx)(c.N4, {
      children: null != k ? (0, r.jsx)(l.DY3, {
        text: k,
        delay: 100,
        children: (0, r.jsx)(l.zxk, {
          text: L,
          fullWidth: true
        })
      }) : (0, r.jsx)(l.zxk, {
        text: L,
        fullWidth: true
      })
    })]
  })
}