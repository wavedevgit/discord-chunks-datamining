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
  Chunk78946 = require("./78946.js");

function y(e) {
  let {
    user: t,
    guild: n,
    initialSelectedEffect: a,
    className: y,
    sectionTitle: O,
    forcedDivider: v = false,
    withTutorial: I = false,
    showBorder: T = false,
    isTryItOutFlow: S = false
  } = e, A = (0, _.Kg)(t, n), C = f.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: N
  } = (0, c.ZP)(), {
    pendingProfileEffect: R,
    errors: P
  } = (0, _.bd)(n), w = i.useCallback(() => (0, u.H)({
    analyticsLocations: N,
    initialSelectedEffect: a,
    guild: n
  }), [N, a, n]);
  i.useEffect(() => {
    C && d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
      type: g.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: N
    })
  }, [C, N]);
  let D = null != n,
    L = S || true !== R ? null != R : null != A;

  function x() {
    (0, _.UK)(null, A, null == n ? true : n.id)
  }
  let M = I ? l.gtL : s.zx;
  return (0, r.jsx)(p.Z, {
    forcedDivider: v,
    borderType: h.Y.PREMIUM,
    hasBackground: true,
    title: O,
    showBorder: T,
    errors: P,
    className: y,
    children: (0, r.jsxs)("div", {
      className: b.buttonsContainer,
      children: [(0, r.jsx)(M, {
        size: s.zx.Sizes.SMALL,
        onClick: w,
        className: o()({
          [b.buttonHighlighted]: I
        }),
        children: E.intl.string(E.t["/dRfCf"])
      }), L && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: b.removeButton,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: D ? E.intl.string(E.t.CHf9iJ) : E.intl.string(E.t.uMuafO),
          onClick: x
        })
      })]
    })
  })
}