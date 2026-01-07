/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk992046 = require("./992046.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk707541 = require("./707541.js"),
  Chunk857666 = require("./857666.jsx"),
  Chunk699261 = require("./699261.js");

function m(e) {
  var t, n, m;
  let {
    guildId: v,
    group: g,
    powerups: x
  } = e, [b, h] = i.useState(false), j = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), Z = (0, f.Z)(g, v), _ = !j && b ? null == Z || null == (t = Z.image) ? true : t.animatedUrl : null == Z || null == (n = Z.image) ? true : n.staticUrl, w = (0, u.Z)({
    guildId: v,
    powerups: x
  }), {
    textColor: C
  } = (0, d.Z)(null != (m = null == w ? true : w.isActive) && m);
  if (null == w || null == Z) return null;
  let {
    status: I,
    cost: E,
    costDecorator: P
  } = w;
  return (0, r.jsxs)(c.aB, {
    label: Z.title,
    isActive: (null == I ? true : I.type) === "active",
    isWarning: (null == I ? true : I.type) === "expiring",
    badge: Z.badge,
    onClick: () => Z.openModal(x),
    onMouseOver: () => h(true),
    onMouseLeave: () => h(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: _,
      className: p.image
    }), (0, r.jsx)(c.Q9, {
      title: Z.title,
      textColor: C,
      footer: (0, r.jsx)(c.uf, {
        status: I,
        cost: E,
        costDecorator: P
      }),
      children: (0, r.jsx)(a.Text, {
        className: p.description,
        color: C,
        variant: "text-sm/medium",
        children: Z.description
      })
    }), (0, r.jsx)(c.N4, {
      children: (null == Z ? true : Z.viewCtaTooltip) != null ? (0, r.jsx)(l.u, {
        asContainer: true,
        text: Z.viewCtaTooltip,
        delay: 100,
        children: (0, r.jsx)(a.Button, {
          text: Z.viewCta,
          fullWidth: true
        })
      }) : (0, r.jsx)(a.Button, {
        text: Z.viewCta,
        fullWidth: true
      })
    })]
  })
}