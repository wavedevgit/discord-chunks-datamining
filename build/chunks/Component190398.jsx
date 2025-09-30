/** Chunk was on 1272 **/
/** chunk id: 190398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk861509 = require("./861509.js");

function h() {
  let e = (0, Chunk266454.zu)(Chunk704215.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE);
  return (Chunk647438.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.NITRO_TAB_BADGE_SHOWN, {
      type: "September 2025 Marketing Moment Nitro Tab Badge"
    })
  }, []), module) ? (0, Chunk951288.jsxs)("div", {
    className: a()(Chunk861509.premiumTrialBadge, Chunk861509.premiumTrialAcknowledgedBadge, {}),
    children: [(0, Chunk951288.jsx)(Chunk481060.T39, {
      size: "custom",
      width: 14,
      height: 14,
      color: "currentColor",
      className: Chunk861509.clockIcon
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "eyebrow",
      color: "text-secondary",
      children: Chunk388032.intl.string(Chunk388032.t.OS9KPj)
    })]
  }) : (0, Chunk951288.jsx)("div", {
    className: a()(Chunk861509.premiumTrialBadge, Chunk861509.backgroundGradient),
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "eyebrow",
      color: "always-white",
      children: Chunk388032.intl.string(Chunk388032.t.OS9KPj)
    })
  })
}