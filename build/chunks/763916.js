/** Chunk was on 1272 **/
/** chunk id: 763916, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk812206 = require("./812206.js"),
  Chunk877481 = require("./877481.js"),
  Chunk592745 = require("./592745.js");

function s(e) {
  let {
    gameId: t
  } = e;
  var n = t;
  let s = a.Z.launchableGames[n],
    o = i.Z.getApplication(n);
  (null != o ? l.Z.isLaunchable(o) : l.Z.isGameLaunchable(n)).then(e => {
    e !== s && r.Z.dispatch({
      type: "GAME_LAUNCHABLE_UPDATE",
      gameId: n,
      isLaunchable: e
    })
  })
}
let o = {
  initialize() {
    Chunk570140.Z.subscribe("CHECK_LAUNCHABLE_GAME", s)
  }
}