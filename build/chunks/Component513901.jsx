/** Chunk was on web.js **/
/** chunk id: 513901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    withTutorial: S = false,
    showBorder: I = false
  } = e, {
    analyticsLocations: T
  } = (0, c.ZP)(), A = f.ZP.canUsePremiumProfileCustomization(t), C = (0, p.nh)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingProfileEffect: N,
    errors: P
  } = (0, p.xZ)(null == n ? true : n.id), R = true === N ? null != C : null != N, w = () => {
    (0, u.H)({
      analyticsLocations: T,
      guild: n,
      initialSelectedEffect: a
    })
  }, D = () => {
    (0, p.UK)(null, null == n ? true : n.id)
  };
  i.useEffect(() => {
    A && d.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
      type: g.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: T
    })
  }, [A, T]);
  let x = S ? l.gtL : s.zx;
  return (0, r.jsx)(_.Z, {
    forcedDivider: v,
    borderType: m.Y.PREMIUM,
    hasBackground: true,
    title: O,
    showBorder: I,
    errors: P,
    className: y,
    children: (0, r.jsxs)("div", {
      className: b.buttonsContainer,
      children: [(0, r.jsx)(x, {
        size: s.zx.Sizes.SMALL,
        onClick: w,
        className: o()({
          [b.buttonHighlighted]: S
        }),
        children: E.intl.string(E.t["/dRfCf"])
      }), R && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: b.removeButton,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: null != n ? E.intl.string(E.t.CHf9iJ) : E.intl.string(E.t.uMuafO),
          onClick: D
        })
      })]
    })
  })
}