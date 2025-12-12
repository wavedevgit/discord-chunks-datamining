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
  Chunk639560 = require("./639560.js");

function m(e) {
  var t, n, m;
  let {
    guildId: g,
    group: v,
    powerups: x
  } = e, [_, b] = i.useState(false), h = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), j = (0, p.Z)(v, g), C = !h && _ ? null == j || null == (t = j.image) ? true : t.animatedUrl : null == j || null == (n = j.image) ? true : n.staticUrl, Z = (0, u.Z)({
    guildId: g,
    powerups: x
  }), {
    textColor: w
  } = (0, d.Z)(null != (m = null == Z ? true : Z.isActive) && m);
  if (null == Z || null == j) return null;
  let {
    status: I,
    cost: E,
    costDecorator: P
  } = Z;
  return (0, r.jsxs)(c.aB, {
    label: j.title,
    isActive: (null == I ? true : I.type) === "active",
    isWarning: (null == I ? true : I.type) === "expiring",
    badge: j.badge,
    onClick: () => j.openModal(x),
    onMouseOver: () => b(true),
    onMouseLeave: () => b(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: C,
      className: f.image
    }), (0, r.jsx)(c.Q9, {
      title: j.title,
      textColor: w,
      footer: (0, r.jsx)(c.uf, {
        status: I,
        cost: E,
        costDecorator: P
      }),
      children: (0, r.jsx)(a.Text, {
        className: f.description,
        color: w,
        variant: "text-sm/medium",
        children: j.description
      })
    }), (0, r.jsx)(c.N4, {
      children: (null == j ? true : j.viewCtaTooltip) != null ? (0, r.jsx)(o.u, {
        asContainer: true,
        text: j.viewCtaTooltip,
        delay: 100,
        children: (0, r.jsx)(a.Button, {
          text: j.viewCta,
          fullWidth: true
        })
      }) : (0, r.jsx)(a.Button, {
        text: j.viewCta,
        fullWidth: true
      })
    })]
  })
}