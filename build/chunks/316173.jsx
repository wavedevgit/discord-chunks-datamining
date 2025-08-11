/** Chunk was on 1272 **/
/** chunk id: 316173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304761 = require("./304761.js"),
  Chunk865427 = require("./865427.js"),
  Chunk820254 = require("./820254.js"),
  Chunk388032 = require("./388032.js"),
  Chunk545549 = require("./545549.js");
let g = "isHideDevBanner",
  m = () => {
    var e;
    let [t, n] = (0, Chunk73800.useState)((null == (e = Chunk433517.K.get(g, "false")) ? true : module.toString()) === "true"), l = (0, Chunk442837.e7)([Chunk304761.C], () => {
      var e;
      return (0, Chunk865427.fD)() ? null == (e = Chunk304761.C.getCurrentBuildOverride().overrides) ? true : module.discord_web : null
    });
    if (exports) return null;
    let m = () => {
        Chunk433517.K.set(g, true), require(true)
      },
      b = () => <Chunk481060.P3F onClick={m} className={Chunk545549.closeButton} aria-label={Chunk388032.intl.string(Chunk388032.t.WAI6xs)}><Chunk481060.Dio size={"md"} color={"currentColor"} className={Chunk545549.closeIcon} /></Chunk481060.P3F>;
    return null != Chunk120356 ? <div className={a()(Chunk545549.devBanner, Chunk545549.buildOverride)}>{<Chunk820254.Z className={Chunk545549.icon} />}{Chunk388032.intl.string(Chunk388032.t.Wj3LW1)}{<b />}</div> : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? <div className={a()(Chunk545549.devBanner, Chunk545549.staging)}>{<Chunk820254.Z className={Chunk545549.icon} />}{Chunk388032.intl.format(Chunk388032.t.uyrfYG, {
        buildNumber: "429655"
      })}{<b />}</div> : null
  }