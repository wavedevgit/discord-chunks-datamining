/** Chunk was on 1272 **/
/** chunk id: 316173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304761 = require("./304761.js"),
  Chunk865427 = require("./865427.js"),
  Chunk820254 = require("./820254.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk94226 = require("./94226.js");
let g = "isHideDevBanner",
  m = () => {
    var e;
    let [t, n] = (0, Chunk647438.useState)((null == (e = Chunk433517.K.get(g, "false")) ? true : module.toString()) === "true"), l = (0, Chunk442837.e7)([Chunk304761.C], () => {
      var e;
      return (0, Chunk865427.fD)() ? null == (e = Chunk304761.C.getCurrentBuildOverride().overrides) ? true : module.discord_web : null
    });
    if (exports) return null;
    let m = () => {
        Chunk433517.K.set(g, true), require(true)
      },
      _ = () => (0, Chunk951288.jsx)(Chunk481060.P3F, {
        onClick: m,
        className: Chunk94226.closeButton,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.WAI6xu),
        children: (0, Chunk951288.jsx)(Chunk481060.Dio, {
          size: "md",
          color: "currentColor",
          className: Chunk94226.closeIcon
        })
      });
    return null != Chunk120356 ? (0, Chunk951288.jsxs)("div", {
      className: a()(Chunk94226.devBanner, Chunk94226.buildOverride),
      children: [(0, Chunk951288.jsx)(Chunk820254.Z, {
        className: Chunk94226.icon
      }), Chunk388032.intl.string(Chunk388032.t.Wj3LW4), (0, Chunk951288.jsx)(_, {})]
    }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, Chunk951288.jsxs)("div", {
      className: a()(Chunk94226.devBanner, Chunk94226.staging),
      children: [(0, Chunk951288.jsx)(Chunk820254.Z, {
        className: Chunk94226.icon
      }), Chunk388032.intl.format(Chunk388032.t.uyrfYF, {
        buildNumber: "466436"
      }), (0, Chunk951288.jsx)(_, {})]
    }) : null
  }