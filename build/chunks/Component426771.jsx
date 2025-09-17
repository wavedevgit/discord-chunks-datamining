/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function _(e) {
  var t, n, _;
  let x, {
      guildId: C,
      group: h,
      powerups: b
    } = e,
    [E, j] = o.useState(false),
    I = (0, c.Gv)(C, b),
    T = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
    P = (0, d.Z)(h, C);
  if (true === P || b.length <= 0) return null;
  let y = I.some(e => e.type !== m.A3.INACTIVE),
    w = (0, p.d)(y),
    N = I.reduce((e, t) => {
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
  let S = I.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === m.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    Z = I.reduce((e, t) => {
      var n, r;
      let {
        powerup: o
      } = t;
      return e < (null != (n = null == o ? true : o.cost) ? n : 0) ? e : null != (r = null == o ? true : o.cost) ? r : 0
    }, null != (_ = null == (n = I[0]) || null == (t = n.powerup) ? true : t.cost) ? _ : 0),
    k = I.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    O = y ? S : Z,
    A = !y && k > O ? "+" : true,
    U = !T && E ? P.image.animatedUrl : P.image.staticUrl,
    R = null != P.viewCta && "" !== P.viewCta ? P.viewCta : f.intl.string(g.default["27GkOj"]),
    L = null != P.viewCtaTooltip && "" !== P.viewCtaTooltip ? P.viewCtaTooltip : true;
  return (0, r.jsxs)(u.aB, {
    label: P.title,
    isActive: y,
    badge: P.badge,
    onClick: () => P.openModal(b),
    onMouseOver: () => j(true),
    onMouseLeave: () => j(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: U,
      className: v.image
    }), (0, r.jsx)(u.Q9, {
      title: P.title,
      textColor: w,
      footer: (0, r.jsx)(u.uf, {
        status: x,
        cost: O,
        costDecorator: A
      }),
      children: (0, r.jsx)(a.Text, {
        className: v.description,
        color: w,
        variant: "text-sm/medium",
        children: P.description
      })
    }), (0, r.jsx)(u.N4, {
      children: null != L ? (0, r.jsx)(l.u, {
        asContainer: true,
        text: L,
        delay: 100,
        children: (0, r.jsx)(a.zxk, {
          text: R,
          fullWidth: true
        })
      }) : (0, r.jsx)(a.zxk, {
        text: R,
        fullWidth: true
      })
    })]
  })
}