/** Chunk was on web.js **/
/** chunk id: 128450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./747238.js"), require("./812715.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk453771 = require("./453771.js"),
  Chunk450232 = require("./450232.jsx"),
  Chunk212168 = require("./212168.jsx"),
  Chunk317448 = require("./317448.js");

function f(e) {
  return e.replace(/[0-9.,]+ ?kb/g, e => {
    let t = 1024 * parseInt(e, 10);
    return isNaN(t) ? e : (0, l.Hb)(t)
  })
}

function p(e) {
  let {
    errors: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: d.gJ,
      children: f(e)
    }, t))
  })
}
let _ = Chunk64700.forwardRef(function(e, t) {
  let {
    title: n,
    titleIcon: i,
    titleId: a,
    description: l,
    children: f,
    className: _,
    errors: h,
    disabled: m = false,
    hideDivider: g = false,
    showBorder: E = false,
    borderType: b,
    hasBackground: y = false,
    forcedDivider: O = false,
    showPremiumIcon: A = false
  } = e;
  return (0, r.jsx)("div", {
    className: s()(d.fz, _, {
      [d.r9]: m,
      [d.Ai]: g,
      [d.Ac]: E,
      [d.Cx]: O
    }),
    ref: t,
    children: (0, r.jsxs)(u.A, {
      className: d.D6,
      backgroundClassName: d.fr,
      isShown: E,
      type: b,
      hasBackground: y,
      children: [(0, r.jsxs)(o.zEo, {
        className: d.DD,
        id: a,
        "data-migration-pending": true,
        children: [n, A && (0, r.jsx)(c.A, {}), i]
      }), null != l ? (0, r.jsx)(o.ayl, {
        type: o.ayl.Types.DESCRIPTION,
        className: d.yV,
        "data-migration-pending": true,
        children: l
      }) : null, f, null != h && (0, r.jsx)(p, {
        errors: h
      })]
    })
  })
})