/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk857666 = require("./857666.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk535396 = require("./535396.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk574524 = require("./574524.js");

function x(e) {
  var t, n, x;
  let v, {
      guildId: _,
      group: b,
      powerups: j
    } = e,
    [h, E] = o.useState(false),
    C = (0, a.Gv)(_, j),
    I = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
    O = (0, c.Z)(b, _);
  if (true === O || j.length <= 0) return null;
  let y = C.some(e => e.type !== p.A3.INACTIVE),
    w = (0, d.d)(y),
    P = C.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  true !== P ? v = {
    type: "expiring",
    expiringAt: P
  } : y && (v = {
    type: "active",
    statusText: m.intl.string(f.default.FFLkm5)
  });
  let N = C.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === p.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    Z = C.reduce((e, t) => {
      var n, r;
      let {
        powerup: o
      } = t;
      return e < (null != (n = null == o ? true : o.cost) ? n : 0) ? e : null != (r = null == o ? true : o.cost) ? r : 0
    }, null != (x = null == (n = C[0]) || null == (t = n.powerup) ? true : t.cost) ? x : 0),
    S = C.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    T = y ? N : Z,
    A = !y && S > T ? "+" : true,
    R = !I && h ? O.image.animatedUrl : O.image.staticUrl,
    k = null != O.viewCta && "" !== O.viewCta ? O.viewCta : m.intl.string(f.default["27GkOj"]),
    L = null != O.viewCtaTooltip && "" !== O.viewCtaTooltip ? O.viewCtaTooltip : true;
  return (0, r.jsxs)(u.aB, {
    label: O.title,
    isActive: y,
    badge: O.badge,
    onClick: () => O.openModal(j),
    onMouseOver: () => E(true),
    onMouseLeave: () => E(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: R,
      className: g.image
    }), (0, r.jsx)(u.Q9, {
      title: O.title,
      textColor: w,
      footer: (0, r.jsx)(u.uf, {
        status: v,
        cost: T,
        costDecorator: A
      }),
      children: (0, r.jsx)(l.Text, {
        className: g.description,
        color: w,
        variant: "text-sm/medium",
        children: O.description
      })
    }), (0, r.jsx)(u.N4, {
      children: null != L ? (0, r.jsx)(l.DY3, {
        text: L,
        children: (0, r.jsx)(l.zxk, {
          text: k,
          fullWidth: true
        })
      }) : (0, r.jsx)(l.zxk, {
        text: k,
        fullWidth: true
      })
    })]
  })
}