/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk857666 = require("./857666.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk535396 = require("./535396.js"),
  Chunk501669 = require("./501669.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk703754 = require("./703754.js");

function x(e) {
  var t, n, x;
  let _, {
      guildId: b,
      group: h,
      powerups: j
    } = e,
    [C, w] = i.useState(false),
    I = (0, c.Gv)(b, j),
    E = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
    Z = (0, d.Z)(h, b);
  if (true === Z || j.length <= 0) return null;
  let P = I.some(e => e.type !== f.A3.INACTIVE),
    T = (0, p.d)(P),
    y = I.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  null != y ? _ = {
    type: "expiring",
    expiringAt: y
  } : P && (_ = {
    type: "active",
    statusText: g.intl.string(m.default.FFLkmx)
  });
  let N = I.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === f.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    O = I.reduce((e, t) => {
      var n, r;
      let {
        powerup: i
      } = t;
      return e < (null != (n = null == i ? true : i.cost) ? n : 0) ? e : null != (r = null == i ? true : i.cost) ? r : 0
    }, null != (x = null == (n = I[0]) || null == (t = n.powerup) ? true : t.cost) ? x : 0),
    S = I.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    A = P ? N : O,
    k = !P && S > A ? "+" : true,
    R = !E && C ? Z.image.animatedUrl : Z.image.staticUrl,
    L = null != Z.viewCta && "" !== Z.viewCta ? Z.viewCta : g.intl.string(m.default["27GkOu"]),
    U = null != Z.viewCtaTooltip && "" !== Z.viewCtaTooltip ? Z.viewCtaTooltip : true;
  return (0, r.jsxs)(u.aB, {
    label: Z.title,
    isActive: (null == _ ? true : _.type) === "active",
    isWarning: (null == _ ? true : _.type) === "expiring",
    badge: Z.badge,
    onClick: () => Z.openModal(j),
    onMouseOver: () => w(true),
    onMouseLeave: () => w(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: R,
      className: v.image
    }), (0, r.jsx)(u.Q9, {
      title: Z.title,
      textColor: T,
      footer: (0, r.jsx)(u.uf, {
        status: _,
        cost: A,
        costDecorator: k
      }),
      children: (0, r.jsx)(a.Text, {
        className: v.description,
        color: T,
        variant: "text-sm/medium",
        children: Z.description
      })
    }), (0, r.jsx)(u.N4, {
      children: null != U ? (0, r.jsx)(o.u, {
        asContainer: true,
        text: U,
        delay: 100,
        children: (0, r.jsx)(a.Button, {
          text: L,
          fullWidth: true
        })
      }) : (0, r.jsx)(a.Button, {
        text: L,
        fullWidth: true
      })
    })]
  })
}