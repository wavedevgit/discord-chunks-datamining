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
      guildId: h,
      group: C,
      powerups: b
    } = e,
    [E, j] = o.useState(false),
    T = (0, c.Gv)(h, b),
    P = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
    I = (0, d.Z)(C, h);
  if (true === I || b.length <= 0) return null;
  let y = T.some(e => e.type !== m.A3.INACTIVE),
    S = (0, p.d)(y),
    w = T.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  true !== w ? x = {
    type: "expiring",
    expiringAt: w
  } : y && (x = {
    type: "active",
    statusText: f.intl.string(g.default.FFLkm5)
  });
  let O = T.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === m.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    N = T.reduce((e, t) => {
      var n, r;
      let {
        powerup: o
      } = t;
      return e < (null != (n = null == o ? true : o.cost) ? n : 0) ? e : null != (r = null == o ? true : o.cost) ? r : 0
    }, null != (_ = null == (n = T[0]) || null == (t = n.powerup) ? true : t.cost) ? _ : 0),
    Z = T.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    k = y ? O : N,
    A = !y && Z > k ? "+" : true,
    U = !P && E ? I.image.animatedUrl : I.image.staticUrl,
    R = null != I.viewCta && "" !== I.viewCta ? I.viewCta : f.intl.string(g.default["27GkOj"]),
    L = null != I.viewCtaTooltip && "" !== I.viewCtaTooltip ? I.viewCtaTooltip : true;
  return (0, r.jsxs)(u.aB, {
    label: I.title,
    isActive: y,
    badge: I.badge,
    onClick: () => I.openModal(b),
    onMouseOver: () => j(true),
    onMouseLeave: () => j(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: U,
      className: v.image
    }), (0, r.jsx)(u.Q9, {
      title: I.title,
      textColor: S,
      footer: (0, r.jsx)(u.uf, {
        status: x,
        cost: k,
        costDecorator: A
      }),
      children: (0, r.jsx)(a.Text, {
        className: v.description,
        color: S,
        variant: "text-sm/medium",
        children: I.description
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