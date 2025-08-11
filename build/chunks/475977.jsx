/** Chunk was on 75708 **/
/** chunk id: 475977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk626135 = require("./626135.js"),
  Chunk335131 = require("./335131.js"),
  Chunk196033 = require("./196033.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk811344 = require("./811344.js");
let h = () => {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = Chunk73800.useRef(null), {
    asset: n,
    popoutAsset: h,
    title: f,
    body: b,
    version: x,
    revertTextColor: _
  } = (0, Chunk196033.W)();
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: module,
      version: x
    })
  }, [module, x]), <div ref={exports} className={Chunk811344.container} style={{
      backgroundImage: "url(".concat(require, ")")
    }}>{<div className={Chunk811344.artContainer} aria-hidden={true} role={"presentation"}><img src={h} className={Chunk811344.art} alt={""} /></div>}{<div className={Chunk811344.mainColumn}>{<Chunk481060.X6q variant={"heading-lg/extrabold"} color={_ ? "redesign-button-overlay-text" : "currentColor"} className={Chunk811344.title}>{f}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/normal"} color={_ ? "redesign-button-overlay-text" : "currentColor"}>{b}</Chunk481060.Text>}</div>}{<Chunk481060.zxk onClick={() => {
        (0, Chunk335131.mK)({
          analyticsLocations: module,
          analyticsSource: Chunk100527.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
        })
      }} variant={"overlay-primary"} text={Chunk388032.intl.string(Chunk388032.t.fYfGgI)} />}</div>
}