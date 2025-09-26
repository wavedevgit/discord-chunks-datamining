/** Chunk was on web.js **/
/** chunk id: 475977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = (0, Chunk906732.ZP)(Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = Chunk647438.useRef(null), {
    asset: n,
    popoutAsset: h,
    title: m,
    body: g,
    version: E,
    revertTextColor: b
  } = (0, Chunk196033.W)();
  Chunk647438.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: module,
      version: E
    })
  }, [module, E]);
  let y = () => {
    (0, Chunk335131.mK)({
      analyticsLocations: module,
      analyticsSource: Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
    })
  };
  return (0, Chunk951288.jsxs)("div", {
    ref: exports,
    className: Chunk227919.container,
    style: {
      backgroundImage: "url(".concat(require, ")")
    },
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk227919.artContainer,
      "aria-hidden": true,
      role: "presentation",
      children: (0, Chunk951288.jsx)("img", {
        src: h,
        className: Chunk227919.art,
        alt: ""
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk227919.mainColumn,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/extrabold",
        color: b ? "redesign-button-overlay-text" : "currentColor",
        className: Chunk227919.title,
        children: m
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: b ? "redesign-button-overlay-text" : "currentColor",
        children: g
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
      onClick: y,
      variant: "overlay-primary",
      text: Chunk388032.intl.string(Chunk388032.t.fYfGgI)
    })]
  })
}