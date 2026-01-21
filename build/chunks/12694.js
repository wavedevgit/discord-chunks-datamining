/** Chunk was on 82124 **/
/** chunk id: 12694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function u() {
  let e = a.G6.useSetting(),
    t = (0, i.e7)([o.Z], () => o.Z.getStatus());
  (0, r.useEffect)(() => {
    s.default.track(c.rMx.RUNNING_GAME_CARD_STATE_CHANGED, {
      show_current_game: e,
      status: t,
      rtc_popout_available: !e || t === l.Skl.INVISIBLE
    })
  }, [e, t])
}