/** Chunk was on 1272 **/
/** chunk id: 763916, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk812206 = require("./812206.js"),
  Chunk877481 = require("./877481.js"),
  Chunk592745 = require("./592745.js");

function o(e) {
  let {
    gameId: t
  } = e;
  var n = t;
  let o = a.Z.launchableGames[n],
    s = i.Z.getApplication(n);
  (null != s ? l.Z.isLaunchable(s) : l.Z.isGameLaunchable(n)).then(e => {
    e !== o && r.Z.dispatch({
      type: "GAME_LAUNCHABLE_UPDATE",
      gameId: n,
      isLaunchable: e
    })
  })
}
let s = {
  initialize() {
    Chunk570140.Z.subscribe("CHECK_LAUNCHABLE_GAME", o)
  }
}