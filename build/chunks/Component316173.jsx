/** Chunk was on 1272 **/
/** chunk id: 316173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304761 = require("./304761.js"),
  Chunk865427 = require("./865427.js"),
  Chunk820254 = require("./820254.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk187794 = require("./187794.js");
let h = "isHideDevBanner",
  m = () => {
    var e;
    let [t, n] = (0, Chunk473749.useState)((null == (e = Chunk433517.K.get(h, "false")) ? true : module.toString()) === "true"), l = (0, Chunk442837.e7)([Chunk304761.C], () => {
      var e;
      return (0, Chunk865427.fD)() ? null == (e = Chunk304761.C.getCurrentBuildOverride().overrides) ? true : module.discord_web : null
    });
    if (exports) return null;
    let m = () => {
        Chunk433517.K.set(h, true), require(true)
      },
      b = () => (0, Chunk54381.jsx)(Chunk481060.P3F, {
        onClick: m,
        className: Chunk187794.closeButton,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.WAI6xu),
        children: (0, Chunk54381.jsx)(Chunk481060.Dio, {
          size: "md",
          color: "currentColor",
          className: Chunk187794.closeIcon
        })
      });
    return null != Chunk120356 ? (0, Chunk54381.jsxs)("div", {
      className: a()(Chunk187794.devBanner, Chunk187794.buildOverride),
      children: [(0, Chunk54381.jsx)(Chunk820254.Z, {
        className: Chunk187794.icon
      }), Chunk388032.intl.string(Chunk388032.t.Wj3LW4), (0, Chunk54381.jsx)(b, {})]
    }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, Chunk54381.jsxs)("div", {
      className: a()(Chunk187794.devBanner, Chunk187794.staging),
      children: [(0, Chunk54381.jsx)(Chunk820254.Z, {
        className: Chunk187794.icon
      }), Chunk388032.intl.format(Chunk388032.t.uyrfYF, {
        buildNumber: "482670"
      }), (0, Chunk54381.jsx)(b, {})]
    }) : null
  }