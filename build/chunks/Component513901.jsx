/** Chunk was on web.js **/
/** chunk id: 513901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk642619 = require("./642619.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk445143 = require("./445143.js");

function y(e) {
  let {
    user: t,
    guild: n,
    className: a,
    sectionTitle: y,
    forcedDivider: O = false,
    withTutorial: v = false,
    showBorder: I = false,
    isTryItOutFlow: T = false,
    initialSelectedEffectId: S
  } = e, A = (0, _.Kg)(t, n), C = f.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: N
  } = (0, c.ZP)(), {
    pendingProfileEffectId: R,
    errors: P
  } = (0, _.bd)(n), w = i.useCallback(() => (0, u.H)({
    analyticsLocations: N,
    initialSelectedEffectId: S,
    guild: n
  }), [N, S, n]);
  i.useEffect(() => {
    C && d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
      type: g.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: N
    })
  }, [C, N]);
  let D = null != n,
    L = T || true !== R ? null != R : null != A;

  function x() {
    (0, _.s6)(null, A, null == n ? true : n.id)
  }
  let j = v ? l.gtL : s.zx;
  return (0, r.jsx)(p.Z, {
    forcedDivider: O,
    borderType: h.Y.PREMIUM,
    hasBackground: true,
    title: y,
    showBorder: I,
    errors: P,
    className: a,
    children: (0, r.jsxs)("div", {
      className: b.buttonsContainer,
      children: [(0, r.jsx)(j, {
        size: s.zx.Sizes.SMALL,
        onClick: w,
        className: o()({
          [b.buttonHighlighted]: v
        }),
        children: E.intl.string(E.t["/dRfCQ"])
      }), L && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: b.removeButton,
        children: (0, r.jsx)(l.zxk, {
          variant: "secondary",
          size: "sm",
          text: D ? E.intl.string(E.t.CHf9iI) : E.intl.string(E.t.uMuafH),
          onClick: x
        })
      })]
    })
  })
}