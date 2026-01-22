/** Chunk was on web.js **/
/** chunk id: 540305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk15285 = require("./15285.js");

function i(e) {
  let t, n;
  if (null == e) return {};
  let i = e.sourcePid;
  if (null != i) {
    let e = r.Ay.getGameForPID(i);
    t = null == e ? true : e.name, n = null == e ? true : e.id
  }
  return {
    soundshare_session: e.soundshareSession,
    share_game_name: t,
    share_game_id: n
  }
}