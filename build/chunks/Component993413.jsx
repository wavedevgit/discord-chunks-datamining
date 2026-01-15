/** Chunk was on web.js **/
/** chunk id: 993413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./704826.js"), require("./35282.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk403182 = require("./403182.js"),
  Chunk587446 = require("./587446.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk500207 = require("./500207.js");

function f(e) {
  return e.replace(/[0-9.,]+ ?kb/g, e => {
    let t = 1024 * parseInt(e, 10);
    return isNaN(t) ? e : (0, l.Ng)(t)
  })
}

function p(e) {
  let {
    errors: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: d.errorMessage,
      children: f(e)
    }, t))
  })
}
let _ = Chunk473749.forwardRef(function(e, t) {
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
    showPremiumIcon: v = false
  } = e;
  return (0, r.jsx)("div", {
    className: o()(d.customizationSection, _, {
      [d.disabled]: m,
      [d.hideDivider]: g,
      [d.showBorder]: E,
      [d.withDivider]: O
    }),
    ref: t,
    children: (0, r.jsxs)(u.Z, {
      className: d.customizationSectionBorder,
      backgroundClassName: d.customizationSectionBackground,
      isShown: E,
      type: b,
      hasBackground: y,
      children: [(0, r.jsxs)(s.vwX, {
        className: d.title,
        id: a,
        "data-migration-pending": true,
        children: [n, v && (0, r.jsx)(c.Z, {}), i]
      }), null != l ? (0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        className: d.sectionDescription,
        "data-migration-pending": true,
        children: l
      }) : null, f, null != h && (0, r.jsx)(p, {
        errors: h
      })]
    })
  })
})