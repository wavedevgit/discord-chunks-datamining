/** Chunk was on 18824 **/
/** chunk id: 518560, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk797614 = require("./797614.js"),
  Chunk626135 = require("./626135.js"),
  Chunk103879 = require("./103879.js"),
  Chunk451284 = require("./451284.js"),
  Chunk802429 = require("./802429.js"),
  Chunk846488 = require("./846488.js"),
  Chunk181211 = require("./181211.js"),
  Chunk811085 = require("./811085.jsx"),
  Chunk967254 = require("./967254.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk737943 = require("./737943.js");

function N() {
  let t = (0, Chunk181211.Z)(),
    e = (0, Chunk846488.e)(),
    n = (0, Chunk451284.P)(),
    N = (0, Chunk802429.i)();
  (0, Chunk493773.ZP)(() => {
    Chunk103879.yq()
  });
  let S = Chunk73800.useRef(require);
  return (Chunk73800.useEffect(() => {
    S.current = require
  }), Chunk73800.useEffect(() => {
    exports && (Chunk626135.default.track(Chunk981631.rMx.SAFETY_HUB_VIEWED, {
      account_standing: S.current.state
    }), Chunk797614.Z.increment({
      name: Chunk286379.V.SAFETY_HUB_VIEW
    }))
  }, [exports]), module) ? (0, Chunk255367.jsx)(Chunk481060.$jN, {}) : null != N ? (0, Chunk255367.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    className: Chunk737943.nagbar,
    children: [Chunk388032.intl.string(Chunk388032.t.TDRvqq), (0, Chunk255367.jsx)(Chunk481060.EyT, {
      onClick: () => Chunk103879.yq(),
      children: Chunk388032.intl.string(Chunk388032.t.R1AN4O)
    })]
  }) : (0, Chunk255367.jsxs)("div", {
    className: Chunk737943.container,
    children: [(0, Chunk255367.jsx)(Chunk811085.Z, {}), (0, Chunk255367.jsx)(Chunk967254.N, {})]
  })
}