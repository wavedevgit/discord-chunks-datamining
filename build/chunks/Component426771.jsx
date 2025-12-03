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
  Chunk707541 = require("./707541.js"),
  Chunk857666 = require("./857666.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk639560 = require("./639560.js");

function x(e) {
  var t, n, x;
  let _, {
      guildId: b,
      group: h,
      powerups: j
    } = e,
    [C, w] = i.useState(false),
    Z = (0, u.Gv)(b, j),
    I = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
    E = (0, p.Z)(h, b),
    P = Z.some(e => e.type !== f.A3.INACTIVE),
    {
      textColor: T
    } = (0, d.Z)(P);
  if (true === E || j.length <= 0) return null;
  let y = Z.reduce((e, t) => {
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
  let N = Z.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === f.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    O = Z.reduce((e, t) => {
      var n, r;
      let {
        powerup: i
      } = t;
      return e < (null != (n = null == i ? true : i.cost) ? n : 0) ? e : null != (r = null == i ? true : i.cost) ? r : 0
    }, null != (x = null == (n = Z[0]) || null == (t = n.powerup) ? true : t.cost) ? x : 0),
    S = Z.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    A = P ? N : O,
    k = !I && C ? E.image.animatedUrl : E.image.staticUrl,
    R = null != E.viewCta && "" !== E.viewCta ? E.viewCta : g.intl.string(m.default["27GkOu"]),
    L = null != E.viewCtaTooltip && "" !== E.viewCtaTooltip ? E.viewCtaTooltip : true;
  return (0, r.jsxs)(c.aB, {
    label: E.title,
    isActive: (null == _ ? true : _.type) === "active",
    isWarning: (null == _ ? true : _.type) === "expiring",
    badge: E.badge,
    onClick: () => E.openModal(j),
    onMouseOver: () => w(true),
    onMouseLeave: () => w(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: k,
      className: v.image
    }), (0, r.jsx)(c.Q9, {
      title: E.title,
      textColor: T,
      footer: (0, r.jsx)(c.uf, {
        status: _,
        cost: A,
        costDecorator: !P && S > A ? "+" : true
      }),
      children: (0, r.jsx)(a.Text, {
        className: v.description,
        color: T,
        variant: "text-sm/medium",
        children: E.description
      })
    }), (0, r.jsx)(c.N4, {
      children: null != L ? (0, r.jsx)(l.u, {
        asContainer: true,
        text: L,
        delay: 100,
        children: (0, r.jsx)(a.Button, {
          text: R,
          fullWidth: true
        })
      }) : (0, r.jsx)(a.Button, {
        text: R,
        fullWidth: true
      })
    })]
  })
}