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
  let t, {
    gameId: n
  } = e;
  var o = n;
  let s = a.Z.launchableGames[o],
    c = i.Z.getApplication(o);
  (null != c ? l.Z.isLaunchable(c) : l.Z.isGameLaunchable(o)).then(e => {
    e !== s && r.Z.dispatch({
      type: "GAME_LAUNCHABLE_UPDATE",
      gameId: o,
      isLaunchable: e
    })
  })
}
let s = {
  initialize() {
    Chunk570140.Z.subscribe("CHECK_LAUNCHABLE_GAME", o)
  }
}