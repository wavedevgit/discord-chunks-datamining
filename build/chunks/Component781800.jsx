/** Chunk was on web.js **/
/** chunk id: 781800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk391110 = require("./391110.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677599 = require("./677599.js");
let d = e => {
  let {
    setIsAllPerksVisible: t,
    previousComponent: n
  } = e;
  return (0, r.jsx)(a.gtL, {
    "data-migration-pending": true,
    color: i.Tt.CUSTOM,
    onlyShineOnHover: true,
    shineSize: a.rHe.SMALL,
    className: u.seeAllPerksButton,
    onClick: () => {
      t(true), o.default.track(l.rMx.NITRO_HOME_NAVIGATION, {
        current_component: n,
        next_component: s.MQ.SEE_ALL,
        interaction_component: "See All Button"
      })
    },
    children: (0, r.jsxs)("div", {
      className: u.seeAllPerksButtonContent,
      children: [c.intl.string(c.t["37C26f"]), (0, r.jsx)(a.Fbu, {
        color: "currentColor"
      })]
    })
  })
}