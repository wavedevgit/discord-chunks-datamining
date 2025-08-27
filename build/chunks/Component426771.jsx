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
      guildId: b,
      group: h,
      powerups: C
    } = e,
    [j, I] = i.useState(false),
    E = (0, u.Gv)(b, C),
    w = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
    Z = (0, d.Z)(h, b);
  if (true === Z || C.length <= 0) return null;
  let N = E.some(e => e.type !== f.A3.INACTIVE),
    P = (0, p.d)(N),
    y = E.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  true !== y ? x = {
    type: "expiring",
    expiringAt: y
  } : N && (x = {
    type: "active",
    statusText: _.intl.string(m.default.FFLkm5)
  });
  let T = E.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === f.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    S = E.reduce((e, t) => {
      var n, r;
      let {
        powerup: i
      } = t;
      return e < (null != (n = null == i ? true : i.cost) ? n : 0) ? e : null != (r = null == i ? true : i.cost) ? r : 0
    }, null != (v = null == (n = E[0]) || null == (t = n.powerup) ? true : t.cost) ? v : 0),
    A = E.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    O = N ? T : S,
    k = !N && A > O ? "+" : true,
    R = !w && j ? Z.image.animatedUrl : Z.image.staticUrl,
    L = null != Z.viewCta && "" !== Z.viewCta ? Z.viewCta : _.intl.string(m.default["27GkOj"]),
    U = null != Z.viewCtaTooltip && "" !== Z.viewCtaTooltip ? Z.viewCtaTooltip : true;
  return (0, r.jsxs)(c.aB, {
    label: Z.title,
    isActive: N,
    badge: Z.badge,
    onClick: () => Z.openModal(C),
    onMouseOver: () => I(true),
    onMouseLeave: () => I(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: R,
      className: g.image
    }), (0, r.jsx)(c.Q9, {
      title: Z.title,
      textColor: P,
      footer: (0, r.jsx)(c.uf, {
        status: x,
        cost: O,
        costDecorator: k
      }),
      children: (0, r.jsx)(a.Text, {
        className: g.description,
        color: P,
        variant: "text-sm/medium",
        children: Z.description
      })
    }), (0, r.jsx)(c.N4, {
      children: null != U ? (0, r.jsx)(l.u, {
        asContainer: true,
        text: U,
        delay: 100,
        children: (0, r.jsx)(a.zxk, {
          text: L,
          fullWidth: true
        })
      }) : (0, r.jsx)(a.zxk, {
        text: L,
        fullWidth: true
      })
    })]
  })
}