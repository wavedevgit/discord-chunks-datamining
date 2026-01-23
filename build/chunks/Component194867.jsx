/** Chunk was on 88615 **/
/** chunk id: 194867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  var t, n, f;
  let {
    guildId: v,
    group: g,
    powerups: A
  } = e, [_, x] = l.useState(false), h = (0, i.bG)([a.A], () => a.A.useReducedMotion), b = (0, p.A)(g, v), j = !h && _ ? null == b || null == (n = b.image) ? true : n.animatedUrl : null == b || null == (f = b.image) ? true : f.staticUrl, E = (0, u.A)({
    guildId: v,
    powerups: A
  }), {
    textColor: w
  } = (0, c.A)(null != (t = null == E ? true : E.isActive) && t);
  if (null == E || null == b) return null;
  let {
    status: y,
    cost: I,
    costDecorator: S
  } = E;
  return (0, r.jsxs)(d.NI, {
    label: b.title,
    isActive: (null == y ? true : y.type) === "active",
    isWarning: (null == y ? true : y.type) === "expiring",
    badge: b.badge,
    onClick: () => b.openModal(A),
    onMouseOver: () => x(true),
    onMouseLeave: () => x(false),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: j,
      className: m.S
    }), (0, r.jsx)(d.Ft, {
      title: b.title,
      textColor: w,
      footer: (0, r.jsx)(d.$L, {
        status: y,
        cost: I,
        costDecorator: S
      }),
      children: (0, r.jsx)(s.Text, {
        className: m.h,
        color: w,
        variant: "text-sm/medium",
        children: b.description
      })
    }), (0, r.jsx)(d.kd, {
      children: (null == b ? true : b.viewCtaTooltip) != null ? (0, r.jsx)(o.m, {
        asContainer: true,
        text: b.viewCtaTooltip,
        delay: 100,
        children: (0, r.jsx)(s.Button, {
          text: b.viewCta,
          fullWidth: true
        })
      }) : (0, r.jsx)(s.Button, {
        text: b.viewCta,
        fullWidth: true
      })
    })]
  })
}