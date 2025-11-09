/** Chunk was on web.js **/
/** chunk id: 475977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk335131 = require("./335131.js"),
  Chunk196033 = require("./196033.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk29990 = require("./29990.js");
let m = () => {
  var e;
  let {
    analyticsLocations: t
  } = (0, Chunk906732.ZP)(Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), n = Chunk647438.useRef(null), {
    asset: m,
    popoutAsset: g,
    title: E,
    body: b,
    version: y,
    revertTextColor: O
  } = (0, Chunk196033.W)(), v = Chunk647438.useContext(Chunk924052.Tx), I = null != (e = null == v ? true : v.navigateWithValidation) ? module : e => e();
  Chunk647438.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: exports,
      version: y
    })
  }, [exports, y]);
  let S = () => {
    I(() => (0, Chunk335131.mK)({
      analyticsLocations: exports,
      analyticsSource: Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
    }))
  };
  return (0, Chunk951288.jsxs)("div", {
    ref: require,
    className: Chunk29990.container,
    style: {
      backgroundImage: "url(".concat(m, ")")
    },
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk29990.artContainer,
      "aria-hidden": true,
      role: "presentation",
      children: (0, Chunk951288.jsx)("img", {
        src: g,
        className: Chunk29990.art,
        alt: ""
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk29990.mainColumn,
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/extrabold",
        color: O ? "redesign-button-overlay-text" : "currentColor",
        className: Chunk29990.title,
        children: E
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: O ? "redesign-button-overlay-text" : "currentColor",
        children: b
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.Button, {
      onClick: S,
      variant: "overlay-primary",
      text: Chunk388032.intl.string(Chunk388032.t.fYfGgK)
    })]
  })
}