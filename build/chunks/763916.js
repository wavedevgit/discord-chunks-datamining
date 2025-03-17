/** Chunk was on 1272 **/
n.d(t, {
  Z: () => s
});
var r = n(570140),
  i = n(812206),
  l = n(877481),
  a = n(592745);

function o(e) {
  let {
    gameId: t
  } = e;
  ! function(e) {
    let t;
    let n = a.Z.launchableGames[e],
      o = i.Z.getApplication(e);
    (null != o ? l.Z.isLaunchable(o) : l.Z.isGameLaunchable(e)).then(t => {
      t !== n && r.Z.dispatch({
        type: "GAME_LAUNCHABLE_UPDATE",
        gameId: e,
        isLaunchable: t
      })
    })
  }(t)
}
let s = {
  initialize() {
    r.Z.subscribe("CHECK_LAUNCHABLE_GAME", o)
  }
}