/** Chunk was on web.js **/
/** chunk id: 660387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => o
}), require("./311907.js");
var Chunk812808 = require("./812808.js"),
  Chunk943577 = require("./943577.js"),
  Chunk954571 = require("./954571.js");

function o() {
  let e = (0, r.B)();
  return s(i.A.nowPlayingCards, e)
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