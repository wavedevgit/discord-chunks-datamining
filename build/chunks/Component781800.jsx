/** Chunk was on 20501 **/
/** chunk id: 781800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk391110 = require("./391110.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk82954 = require("./82954.js");
let u = e => {
  let {
    setIsAllPerksVisible: t,
    previousComponent: n
  } = e;
  return (0, i.jsx)(s.gtL, {
    "data-migration-pending": true,
    color: r.Tt.CUSTOM,
    onlyShineOnHover: true,
    shineSize: s.rHe.SMALL,
    className: d.seeAllPerksButton,
    onClick: () => {
      t(true), a.default.track(o.rMx.NITRO_HOME_NAVIGATION, {
        current_component: n,
        next_component: l.MQ.SEE_ALL,
        interaction_component: "See All Button"
      })
    },
    children: (0, i.jsxs)("div", {
      className: d.seeAllPerksButtonContent,
      children: [c.intl.string(c.t["37C26e"]), (0, i.jsx)(s.Fbu, {
        color: "currentColor"
      })]
    })
  })
}