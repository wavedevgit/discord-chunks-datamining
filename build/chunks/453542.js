/** Chunk was on web.js **/
/** chunk id: 453542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => o
}), require("./442837.js");
var Chunk868854 = require("./868854.js"),
  Chunk801077 = require("./801077.js"),
  Chunk626135 = require("./626135.js");

function o() {
  let e = (0, r.a)();
  return s(i.Z.nowPlayingCards, e)
}

function s(e, t) {
  let n = e.reduce((e, t) => {
    var n;
    let r = null != (n = t.party.currentActivities.filter(e => null != e.game.name && (0, a.isGameApplicationType)(e.game.type)).map(e => e.game.name)) ? n : [];
    return e.concat(r)
  }, []);
  return {
    now_playing_visible: t,
    now_playing_num_cards: e.length,
    now_playing_games_detected: n
  }
}