/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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

function v(e) {
  var t, n, v;
  let x, {
      guildId: C,
      group: h,
      powerups: b
    } = e,
    [E, I] = o.useState(false),
    T = (0, c.Gv)(C, b),
    j = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
    P = (0, d.Z)(h, C);
  if (true === P || b.length <= 0) return null;
  let y = T.some(e => e.type !== m.A3.INACTIVE),
    S = (0, p.d)(y),
    N = T.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  true !== N ? x = {
    type: "expiring",
    expiringAt: N
  } : y && (x = {
    type: "active",
    statusText: f.intl.string(g.default.FFLkm5)
  });
  let Z = T.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === m.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    w = T.reduce((e, t) => {
      var n, r;
      let {
        powerup: o
      } = t;
      return e < (null != (n = null == o ? true : o.cost) ? n : 0) ? e : null != (r = null == o ? true : o.cost) ? r : 0
    }, null != (v = null == (n = T[0]) || null == (t = n.powerup) ? true : t.cost) ? v : 0),
    O = T.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    k = y ? Z : w,
    A = !y && O > k ? "+" : true,
    U = !j && E ? P.image.animatedUrl : P.image.staticUrl,
    R = null != P.viewCta && "" !== P.viewCta ? P.viewCta : f.intl.string(g.default["27GkOj"]),
    L = null != P.viewCtaTooltip && "" !== P.viewCtaTooltip ? P.viewCtaTooltip : true;
  return (0, r.jsxs)(u.aB, {
    label: P.title,
    isActive: y,
    badge: P.badge,
    onClick: () => P.openModal(b),
    onMouseOver: () => I(true),
    onMouseLeave: () => I(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: U,
      className: _.image
    }), (0, r.jsx)(u.Q9, {
      title: P.title,
      textColor: S,
      footer: (0, r.jsx)(u.uf, {
        status: x,
        cost: k,
        costDecorator: A
      }),
      children: (0, r.jsx)(s.Text, {
        className: _.description,
        color: S,
        variant: "text-sm/medium",
        children: P.description
      })
    }), (0, r.jsx)(u.N4, {
      children: null != L ? (0, r.jsx)(a.u, {
        asContainer: true,
        text: L,
        delay: 100,
        children: (0, r.jsx)(s.zxk, {
          text: R,
          fullWidth: true
        })
      }) : (0, r.jsx)(s.zxk, {
        text: R,
        fullWidth: true
      })
    })]
  })
}