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
  Chunk200471 = require("./200471.js");
let h = () => {
  var e;
  let {
    analyticsLocations: t
  } = (0, s.ZP)(o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), n = i.useRef(null), {
    asset: h,
    popoutAsset: g,
    title: E,
    body: b,
    version: y,
    revertTextColor: O
  } = (0, d.W)(), v = i.useContext(l.Tx), S = null != (e = null == v ? true : v.navigateWithValidation) ? e : e => e();
  i.useEffect(() => {
    c.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
      type: p.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: t,
      version: y
    })
  }, [t, y]);
  let I = () => {
    S(() => (0, u.mK)({
      analyticsLocations: t,
      analyticsSource: o.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
    }))
  };
  return (0, r.jsxs)("div", {
    ref: n,
    className: m.container,
    style: {
      backgroundImage: "url(".concat(h, ")")
    },
    children: [(0, r.jsx)("div", {
      className: m.artContainer,
      "aria-hidden": true,
      role: "presentation",
      children: (0, r.jsx)("img", {
        src: g,
        className: m.art,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: m.mainColumn,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/extrabold",
        color: O ? "text-overlay-dark" : "currentColor",
        className: m.title,
        children: E
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: O ? "text-overlay-dark" : "currentColor",
        children: b
      })]
    }), (0, r.jsx)(a.Button, {
      onClick: I,
      variant: "overlay-primary",
      text: _.intl.string(_.t.fYfGgK)
    })]
  })
}