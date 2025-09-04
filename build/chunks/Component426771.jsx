/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  var t, n, x;
  let _, {
      guildId: b,
      group: h,
      powerups: C
    } = e,
    [j, P] = o.useState(false),
    E = (0, c.Gv)(b, C),
    I = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
    T = (0, d.Z)(h, b);
  if (true === T || C.length <= 0) return null;
  let y = E.some(e => e.type !== m.A3.INACTIVE),
    w = (0, p.d)(y),
    Z = E.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  true !== Z ? _ = {
    type: "expiring",
    expiringAt: Z
  } : y && (_ = {
    type: "active",
    statusText: g.intl.string(f.default.FFLkm5)
  });
  let S = E.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === m.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    N = E.reduce((e, t) => {
      var n, r;
      let {
        powerup: o
      } = t;
      return e < (null != (n = null == o ? true : o.cost) ? n : 0) ? e : null != (r = null == o ? true : o.cost) ? r : 0
    }, null != (x = null == (n = E[0]) || null == (t = n.powerup) ? true : t.cost) ? x : 0),
    k = E.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    O = y ? S : N,
    A = !y && k > O ? "+" : true,
    R = !I && j ? T.image.animatedUrl : T.image.staticUrl,
    U = null != T.viewCta && "" !== T.viewCta ? T.viewCta : g.intl.string(f.default["27GkOj"]),
    L = null != T.viewCtaTooltip && "" !== T.viewCtaTooltip ? T.viewCtaTooltip : true;
  return (0, r.jsxs)(u.aB, {
    label: T.title,
    isActive: y,
    badge: T.badge,
    onClick: () => T.openModal(C),
    onMouseOver: () => P(true),
    onMouseLeave: () => P(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: R,
      className: v.image
    }), (0, r.jsx)(u.Q9, {
      title: T.title,
      textColor: w,
      footer: (0, r.jsx)(u.uf, {
        status: _,
        cost: O,
        costDecorator: A
      }),
      children: (0, r.jsx)(a.Text, {
        className: v.description,
        color: w,
        variant: "text-sm/medium",
        children: T.description
      })
    }), (0, r.jsx)(u.N4, {
      children: null != L ? (0, r.jsx)(l.u, {
        asContainer: true,
        text: L,
        delay: 100,
        children: (0, r.jsx)(a.zxk, {
          text: U,
          fullWidth: true
        })
      }) : (0, r.jsx)(a.zxk, {
        text: U,
        fullWidth: true
      })
    })]
  })
}