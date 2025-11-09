/** Chunk was on 94709 **/
/** chunk id: 12694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function u() {
  let e = Chunk695346.G6.useSetting(),
    t = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getStatus());
  (0, Chunk647438.useEffect)(() => {
    Chunk626135.default.track(Chunk981631.rMx.RUNNING_GAME_CARD_STATE_CHANGED, {
      show_current_game: module,
      status: exports,
      rtc_popout_available: !module || exports === Chunk481060.Skl.INVISIBLE
    })
  }, [module, exports])
}