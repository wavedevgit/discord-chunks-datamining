/** Chunk was on 60667 **/
/** chunk id: 807676, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk322631 = require("./322631.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk70338 = require("./70338.js");
let u = e => {
  let {
    setIsAllPerksVisible: t,
    previousComponent: n
  } = e;
  return (0, r.jsx)(l.wLn, {
    "data-migration-pending": true,
    color: i.XD.CUSTOM,
    onlyShineOnHover: true,
    shineSize: l._Jd.SMALL,
    className: d.Wg,
    onClick: () => {
      t(true), s.default.track(o.HAw.NITRO_HOME_NAVIGATION, {
        current_component: n,
        next_component: a.A2.SEE_ALL,
        interaction_component: "See All Button"
      })
    },
    children: (0, r.jsxs)("div", {
      className: d.zB,
      children: [c.intl.string(c.t["37C26f"]), (0, r.jsx)(l._BQ, {
        color: "currentColor"
      })]
    })
  })
}