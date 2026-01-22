/** Chunk was on 88615 **/
/** chunk id: 194867, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk600941 = require("./600941.js"),
  Chunk890942 = require("./890942.jsx"),
  Chunk744201 = require("./744201.js"),
  Chunk271484 = require("./271484.jsx"),
  Chunk628743 = require("./628743.js");

function m(e) {
  var t, l, m;
  let {
    guildId: v,
    group: A,
    powerups: g
  } = e, [x, b] = n.useState(false), h = (0, i.bG)([a.A], () => a.A.useReducedMotion), j = (0, f.A)(A, v), _ = !h && x ? null == j || null == (l = j.image) ? true : l.animatedUrl : null == j || null == (m = j.image) ? true : m.staticUrl, E = (0, u.A)({
    guildId: v,
    powerups: g
  }), {
    textColor: y
  } = (0, c.A)(null != (t = null == E ? true : E.isActive) && t);
  if (null == E || null == j) return null;
  let {
    status: I,
    cost: S,
    costDecorator: w
  } = E;
  return (0, r.jsxs)(d.NI, {
    label: j.title,
    isActive: (null == I ? true : I.type) === "active",
    isWarning: (null == I ? true : I.type) === "expiring",
    badge: j.badge,
    onClick: () => j.openModal(g),
    onMouseOver: () => b(true),
    onMouseLeave: () => b(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: _,
      className: p.S
    }), (0, r.jsx)(d.Ft, {
      title: j.title,
      textColor: y,
      footer: (0, r.jsx)(d.$L, {
        status: I,
        cost: S,
        costDecorator: w
      }),
      children: (0, r.jsx)(o.Text, {
        className: p.h,
        color: y,
        variant: "text-sm/medium",
        children: j.description
      })
    }), (0, r.jsx)(d.kd, {
      children: (null == j ? true : j.viewCtaTooltip) != null ? (0, r.jsx)(s.m, {
        asContainer: true,
        text: j.viewCtaTooltip,
        delay: 100,
        children: (0, r.jsx)(o.Button, {
          text: j.viewCta,
          fullWidth: true
        })
      }) : (0, r.jsx)(o.Button, {
        text: j.viewCta,
        fullWidth: true
      })
    })]
  })
}