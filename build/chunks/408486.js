/** Chunk was on 97492 **/
/** chunk id: 408486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk253932 = require("./253932.js"),
  Chunk461213 = require("./461213.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function u() {
  let e = a.tz.useSetting(),
    t = (0, l.bG)([s.A], () => s.A.getStatus());
  (0, r.useEffect)(() => {
    o.default.track(c.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
      show_current_game: e,
      status: t,
      rtc_popout_available: !e || t === i.clD.INVISIBLE
    })
  }, [e, t])
}