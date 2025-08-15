/** Chunk was on web.js **/
/** chunk id: 993413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./704826.js"), require("./35282.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk403182 = require("./403182.js"),
  Chunk587446 = require("./587446.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607878 = require("./607878.js");

function g(e) {
  return e.replace(/[0-9.,]+ ?kb/g, e => {
    let t = 1024 * parseInt(e, 10);
    return isNaN(t) ? e : (0, f.Ng)(t)
  })
}

function E(e) {
  let {
    errors: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: m.errorMessage,
      children: g(e)
    }, t))
  })
}
let b = Chunk73800.forwardRef(function(e, t) {
  let {
    title: n,
    titleIcon: i,
    titleId: a,
    description: f,
    children: g,
    className: b,
    errors: y,
    disabled: O = false,
    hideDivider: v = false,
    showBorder: I = false,
    borderType: T,
    hasBackground: S = false,
    forcedDivider: A = false,
    showPremiumIcon: N = false,
    showViewFullProfileButton: C = false
  } = e, R = (0, s.e7)([d.default], () => d.default.getCurrentUser()), P = () => {
    null != R && (0, u.openUserProfileModal)({
      userId: R.id,
      disableActionsForPreview: true
    })
  };
  return (0, r.jsx)("div", {
    className: o()(m.customizationSection, b, {
      [m.disabled]: O,
      [m.hideDivider]: v,
      [m.showBorder]: I,
      [m.withDivider]: A
    }),
    ref: t,
    children: (0, r.jsxs)(p.Z, {
      className: m.customizationSectionBorder,
      backgroundClassName: m.customizationSectionBackground,
      isShown: I,
      type: T,
      hasBackground: S,
      children: [(0, r.jsxs)(c.vwX, {
        className: m.title,
        id: a,
        children: [n, N && (0, r.jsx)(_.Z, {}), i, C && null != R && (0, r.jsx)(l.zx, {
          look: l.zx.Looks.LINK,
          color: l.zx.Colors.TRANSPARENT,
          size: l.zx.Sizes.TINY,
          className: m.viewFullProfileButton,
          onClick: P,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            children: h.intl.string(h.t["+Xp3ho"])
          })
        })]
      }), null != f ? (0, r.jsx)(c.R94, {
        type: c.R94.Types.DESCRIPTION,
        className: m.sectionDescription,
        children: f
      }) : null, g, null != y && (0, r.jsx)(E, {
        errors: y
      })]
    })
  })
})