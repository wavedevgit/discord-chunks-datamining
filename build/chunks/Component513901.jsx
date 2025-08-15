/** Chunk was on 30202 **/
/** chunk id: 513901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function j(e) {
  let {
    user: t,
    guild: n,
    className: s,
    sectionTitle: j,
    forcedDivider: E = false,
    withTutorial: C = false,
    showBorder: O = false,
    isTryItOutFlow: v = false,
    initialSelectedEffectId: S
  } = e, T = (0, p.Kg)(t, n), N = m.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: I
  } = (0, c.ZP)(), {
    pendingProfileEffectId: y,
    errors: A
  } = (0, p.bd)(n), P = r.useCallback(() => (0, d.H)({
    analyticsLocations: I,
    initialSelectedEffectId: S,
    guild: n
  }), [I, S, n]);
  r.useEffect(() => {
    N && u.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
      type: b.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: I
    })
  }, [N, I]);
  let R = null != n,
    D = C ? o.gtL : l.zx;
  return (0, i.jsx)(g.Z, {
    forcedDivider: E,
    borderType: h.Y.PREMIUM,
    hasBackground: true,
    title: j,
    showBorder: O,
    errors: A,
    className: s,
    children: (0, i.jsxs)("div", {
      className: _.buttonsContainer,
      children: [(0, i.jsx)(D, {
        size: l.zx.Sizes.SMALL,
        onClick: P,
        className: a()({
          [_.buttonHighlighted]: C
        }),
        children: x.intl.string(x.t["/dRfCQ"])
      }), (v || true !== y ? null != y : null != T) && (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: _.removeButton,
        children: (0, i.jsx)(o.zxk, {
          variant: "secondary",
          size: "sm",
          text: R ? x.intl.string(x.t.CHf9iI) : x.intl.string(x.t.uMuafH),
          onClick: function() {
            (0, p.s6)(null, T, null == n ? true : n.id)
          }
        })
      })]
    })
  })
}