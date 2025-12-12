/** Chunk was on web.js **/
/** chunk id: 836197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ki: () => s,
  Wc: () => l,
  zy: () => c
});
var Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk86419 = require("./86419.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = [Chunk296009.l.CURRENT_GAMES, Chunk296009.l.FAVORITE_GAMES, Chunk296009.l.WANT_TO_PLAY_GAMES, Chunk296009.l.PLAYED_GAMES];

function l(e) {
  return s.includes(e.type)
}
class c {
  toSubmission() {
    let e = e => ({
      game_id: e.applicationId,
      comment: e.comment,
      tags: e.tags
    });
    return {
      id: this.id,
      data: {
        type: this.type,
        games: this.games.map(module)
      }
    }
  }
  isDiscardable() {
    return 0 === this.games.length
  }
  isValid() {
    return this.games.length > 0 && this.games.length <= Chunk624238.kp[this.type]
  }
  isEqual(e) {
    return e instanceof c && e.type === this.type && (0, a.ou)(this.games, e.games, this.type)
  }
  getProfileAnalyticsOptions() {
    return {
      widgetType: this.type
    }
  }
  getProfileEditAnalyticsOptions() {
    return {
      widgetEdited: this.type
    }
  }
  constructor({
    id: e,
    type: t,
    games: n
  }) {
    o(this, "id", true), o(this, "type", true), o(this, "games", true), this.id = e, this.type = t, this.games = n
  }
}