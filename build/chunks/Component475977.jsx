/** Chunk was on web.js **/
/** chunk id: 475977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk227919 = require("./227919.js");
let h = () => {
  var e;
  let {
    analyticsLocations: t
  } = (0, Chunk906732.ZP)(Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), n = Chunk473749.useRef(null), {
    asset: h,
    popoutAsset: g,
    title: E,
    body: b,
    version: y,
    revertTextColor: O
  } = (0, Chunk196033.W)(), v = Chunk473749.useContext(Chunk924052.Tx), S = null != (e = null == v ? true : v.navigateWithValidation) ? module : e => e();
  Chunk473749.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: exports,
      version: y
    })
  }, [exports, y]);
  let I = () => {
    S(() => (0, Chunk335131.mK)({
      analyticsLocations: exports,
      analyticsSource: Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
    }))
  };
  return (0, Chunk54381.jsxs)("div", {
    ref: require,
    className: Chunk227919.container,
    style: {
      backgroundImage: "url(".concat(h, ")")
    },
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk227919.artContainer,
      "aria-hidden": true,
      role: "presentation",
      children: (0, Chunk54381.jsx)("img", {
        src: g,
        className: Chunk227919.art,
        alt: ""
      })
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk227919.mainColumn,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/extrabold",
        color: O ? "text-overlay-dark" : "currentColor",
        className: Chunk227919.title,
        children: E
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: O ? "text-overlay-dark" : "currentColor",
        children: b
      })]
    }), (0, Chunk54381.jsx)(Chunk481060.Button, {
      onClick: I,
      variant: "overlay-primary",
      text: Chunk388032.intl.string(Chunk388032.t.fYfGgK)
    })]
  })
}