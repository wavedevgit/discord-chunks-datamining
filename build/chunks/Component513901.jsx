/** Chunk was on web.js **/
/** chunk id: 513901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk642619 = require("./642619.jsx"),
  Chunk350327 = require("./350327.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk445143 = require("./445143.js");

function O(e) {
  let {
    user: t,
    guild: n,
    initialSelectedEffect: a,
    className: O,
    sectionTitle: v,
    forcedDivider: I = false,
    withTutorial: S = false,
    showBorder: T = false,
    isTryItOut: A = false
  } = e, {
    analyticsLocations: C
  } = (0, c.ZP)(), N = _.ZP.canUsePremiumProfileCustomization(t), R = (0, p.nh)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingProfileEffect: P,
    errors: w
  } = (0, p.sY)({
    guildId: null == n ? true : n.id,
    isTryItOut: A
  }), D = i.useCallback(() => {
    (0, u.H)({
      analyticsLocations: C,
      guild: n,
      initialSelectedEffect: a,
      isTryItOut: A
    })
  }, [C, a, n, A]);
  i.useEffect(() => {
    N && f.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
      type: E.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: C
    })
  }, [N, C]);
  let x = A || true !== P ? null != P : null != R;

  function L() {
    A ? (0, d.Ju)(null) : (0, p.UK)(null, null == n ? true : n.id)
  }
  let M = S ? l.gtL : s.zx;
  return (0, r.jsx)(h.Z, {
    forcedDivider: I,
    borderType: m.Y.PREMIUM,
    hasBackground: true,
    title: v,
    showBorder: T,
    errors: w,
    className: O,
    children: (0, r.jsxs)("div", {
      className: y.buttonsContainer,
      children: [(0, r.jsx)(M, {
        size: s.zx.Sizes.SMALL,
        onClick: D,
        className: o()({
          [y.buttonHighlighted]: S
        }),
        children: b.intl.string(b.t["/dRfCf"])
      }), x && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: y.removeButton,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: null != n ? b.intl.string(b.t.CHf9iJ) : b.intl.string(b.t.uMuafO),
          onClick: L
        })
      })]
    })
  })
}