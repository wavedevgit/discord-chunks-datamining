/** Chunk was on web.js **/
/** chunk id: 836197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ki: () => o,
  Wc: () => s,
  zy: () => l
});
var Chunk296009 = require("./296009.js"),
  Chunk86419 = require("./86419.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = [Chunk296009.l.CURRENT_GAMES, Chunk296009.l.FAVORITE_GAMES, Chunk296009.l.WANT_TO_PLAY_GAMES, Chunk296009.l.PLAYED_GAMES];

function s(e) {
  return o.includes(e.type)
}
class l {
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
  isSaveable() {
    return this.games.length > 0
  }
  isEqual(e) {
    return e instanceof l && e.type === this.type && (0, i.ou)(this.games, e.games, this.type)
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
    a(this, "id", true), a(this, "type", true), a(this, "games", true), this.id = e, this.type = t, this.games = n
  }
}