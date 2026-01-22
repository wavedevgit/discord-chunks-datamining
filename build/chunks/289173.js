/** Chunk was on web.js **/
/** chunk id: 289173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yy: () => u,
  fu: () => c,
  hL: () => l
});
var Chunk926675 = require("./926675.js"),
  Chunk540185 = require("./540185.js"),
  Chunk735321 = require("./735321.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = [Chunk540185.x.CURRENT_GAMES, Chunk540185.x.FAVORITE_GAMES, Chunk540185.x.WANT_TO_PLAY_GAMES, Chunk540185.x.PLAYED_GAMES];

function l(e) {
  return o.includes(e)
}

function c(e) {
  return e instanceof u
}
class u {
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
        games: this.games.map(e)
      }
    }
  }
  isDiscardable() {
    return 0 === this.games.length
  }
  isValid() {
    return this.games.length > 0 && this.games.length <= r.um[this.type]
  }
  isEqual(e) {
    return e instanceof u && e.type === this.type && (0, a.g1)(this.games, e.games, this.type)
  }
  getUniqueKey() {
    return this.type
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
    s(this, "id", true), s(this, "type", true), s(this, "games", true), this.id = e, this.type = t, this.games = n
  }
}