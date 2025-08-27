/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  var t, n, g;
  let v, {
      guildId: x,
      group: b,
      powerups: h
    } = e,
    [C, j] = i.useState(false),
    I = (0, s.Gv)(x, h),
    E = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
    w = (0, c.Z)(b, x);
  if (true === w || h.length <= 0) return null;
  let Z = I.some(e => e.type !== p.A3.INACTIVE),
    N = (0, d.d)(Z),
    P = I.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  true !== P ? v = {
    type: "expiring",
    expiringAt: P
  } : Z && (v = {
    type: "active",
    statusText: m.intl.string(f.default.FFLkm5)
  });
  let y = I.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === p.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    T = I.reduce((e, t) => {
      var n, r;
      let {
        powerup: i
      } = t;
      return e < (null != (n = null == i ? true : i.cost) ? n : 0) ? e : null != (r = null == i ? true : i.cost) ? r : 0
    }, null != (g = null == (n = I[0]) || null == (t = n.powerup) ? true : t.cost) ? g : 0),
    S = I.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    A = Z ? y : T,
    O = !Z && S > A ? "+" : true,
    k = !E && C ? w.image.animatedUrl : w.image.staticUrl,
    R = null != w.viewCta && "" !== w.viewCta ? w.viewCta : m.intl.string(f.default["27GkOj"]),
    L = null != w.viewCtaTooltip && "" !== w.viewCtaTooltip ? w.viewCtaTooltip : true;
  return (0, r.jsxs)(u.aB, {
    label: w.title,
    isActive: Z,
    badge: w.badge,
    onClick: () => w.openModal(h),
    onMouseOver: () => j(true),
    onMouseLeave: () => j(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: k,
      className: _.image
    }), (0, r.jsx)(u.Q9, {
      title: w.title,
      textColor: N,
      footer: (0, r.jsx)(u.uf, {
        status: v,
        cost: A,
        costDecorator: O
      }),
      children: (0, r.jsx)(l.Text, {
        className: _.description,
        color: N,
        variant: "text-sm/medium",
        children: w.description
      })
    }), (0, r.jsx)(u.N4, {
      children: null != L ? (0, r.jsx)(l.DY3, {
        text: L,
        delay: 100,
        children: (0, r.jsx)(l.zxk, {
          text: R,
          fullWidth: true
        })
      }) : (0, r.jsx)(l.zxk, {
        text: R,
        fullWidth: true
      })
    })]
  })
}