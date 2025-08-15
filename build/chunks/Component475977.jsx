/** Chunk was on 30202 **/
/** chunk id: 475977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk335131 = require("./335131.js"),
  Chunk196033 = require("./196033.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk227919 = require("./227919.js");
let h = () => {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = Chunk73800.useRef(null), {
    asset: n,
    popoutAsset: h,
    title: f,
    body: b,
    version: x,
    revertTextColor: _
  } = (0, Chunk196033.W)();
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: module,
      version: x
    })
  }, [module, x]), (0, Chunk255367.jsxs)("div", {
    ref: exports,
    className: Chunk227919.container,
    style: {
      backgroundImage: "url(".concat(require, ")")
    },
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk227919.artContainer,
      "aria-hidden": true,
      role: "presentation",
      children: (0, Chunk255367.jsx)("img", {
        src: h,
        className: Chunk227919.art,
        alt: ""
      })
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk227919.mainColumn,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/extrabold",
        color: _ ? "redesign-button-overlay-text" : "currentColor",
        className: Chunk227919.title,
        children: f
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: _ ? "redesign-button-overlay-text" : "currentColor",
        children: b
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
      onClick: () => {
        (0, Chunk335131.mK)({
          analyticsLocations: module,
          analyticsSource: Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
        })
      },
      variant: "overlay-primary",
      text: Chunk388032.intl.string(Chunk388032.t.fYfGgI)
    })]
  })
}