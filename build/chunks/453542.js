/** Chunk was on 53494 **/
n.d(t, {
  X: () => l
}), n(442837);
var r = n(868854),
  i = n(801077),
  o = n(674563);

function l() {
  let e = (0, r.a)();
  return function(e, t) {
    let n = e.reduce((e, t) => {
      var n;
      let r = null !== (n = t.party.currentActivities.filter(e => null != e.game.name && e.game.type === o.wW.GAME).map(e => e.game.name)) && void 0 !== n ? n : [];
      return e.concat(r)
    }, []);
    return {
      now_playing_visible: t,
      now_playing_num_cards: e.length,
      now_playing_games_detected: n
    }
  }(i.Z.nowPlayingCards, e)
}