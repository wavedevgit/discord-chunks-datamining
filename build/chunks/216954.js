/** Chunk was on 21738 **/
/** chunk id: 216954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk587895 = require("./587895.js"),
  Chunk25171 = require("./25171.js"),
  Chunk651743 = require("./651743.js");

function s(e) {
  let t, n, {
    gameId: s
  } = e;
  t = a.A.launchableGames[s], (null != (n = i.A.getApplication(s)) ? l.A.isLaunchable(n) : l.A.isGameLaunchable(s)).then(e => {
    e !== t && r.h.dispatch({
      type: "GAME_LAUNCHABLE_UPDATE",
      gameId: s,
      isLaunchable: e
    })
  })
}
let o = {
  initialize() {
    r.h.subscribe("CHECK_LAUNCHABLE_GAME", s)
  }
}