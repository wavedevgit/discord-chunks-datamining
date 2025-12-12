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
    guildId: g,
    group: v,
    powerups: x
  } = e, [b, h] = i.useState(false), j = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), _ = (0, f.Z)(v, g), C = !j && b ? null == _ || null == (t = _.image) ? true : t.animatedUrl : null == _ || null == (n = _.image) ? true : n.staticUrl, Z = (0, c.Z)({
    guildId: g,
    powerups: x
  }), {
    textColor: w
  } = (0, d.Z)(null != (m = null == Z ? true : Z.isActive) && m);
  if (null == Z || null == _) return null;
  let {
    status: I,
    cost: E,
    costDecorator: P
  } = Z;
  return (0, r.jsxs)(u.aB, {
    label: _.title,
    isActive: (null == I ? true : I.type) === "active",
    isWarning: (null == I ? true : I.type) === "expiring",
    badge: _.badge,
    onClick: () => _.openModal(x),
    onMouseOver: () => h(true),
    onMouseLeave: () => h(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: C,
      className: p.image
    }), (0, r.jsx)(u.Q9, {
      title: _.title,
      textColor: w,
      footer: (0, r.jsx)(u.uf, {
        status: I,
        cost: E,
        costDecorator: P
      }),
      children: (0, r.jsx)(a.Text, {
        className: p.description,
        color: w,
        variant: "text-sm/medium",
        children: _.description
      })
    }), (0, r.jsx)(u.N4, {
      children: (null == _ ? true : _.viewCtaTooltip) != null ? (0, r.jsx)(o.u, {
        asContainer: true,
        text: _.viewCtaTooltip,
        delay: 100,
        children: (0, r.jsx)(a.Button, {
          text: _.viewCta,
          fullWidth: true
        })
      }) : (0, r.jsx)(a.Button, {
        text: _.viewCta,
        fullWidth: true
      })
    })]
  })
}