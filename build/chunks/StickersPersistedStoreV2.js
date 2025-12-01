/** Chunk was on web.js **/
/** chunk id: 822179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk704907 = require("./704907.js"),
  Chunk581883 = require("./581883.js"),
  Chunk70956 = require("./70956.js"),
  Chunk926491 = require("./926491.js"),
  Chunk526761 = require("./526761.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = {
  pendingUsages: []
};
Chunk70956.Z.Millis.DAY;
let E = 20,
  b = new Chunk704907.Z({
    computeBonus: () => 100,
    lookupKey: e => d.Z.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: E
  }),
  y = () => {
    Chunk926491.Z.isLoaded && b.compute()
  },
  O = e => {
    let {
      stickerIds: t
    } = e;
    null == t || t.forEach(e => {
      b.track(e), g.pendingUsages.push({
        key: e,
        timestamp: Date.now()
      })
    }), y()
  },
  v = () => {
    y()
  };

function S() {
  var e;
  let t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.stickerFrecency) ? true : module.stickers;
  if (null == exports) returnfalse;
  b.overwriteHistory(a().mapValues(exports, e => h(_({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), g.pendingUsages)
}

function I(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  g.pendingUsages = []
}
class T extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(d.Z, c.Z), null != e && (g = e), this.syncWith([d.Z], v), this.syncWith([c.Z], S)
  }
  getState() {
    return g
  }
  hasPendingUsage() {
    return g.pendingUsages.length > 0
  }
  get stickerFrecencyWithoutFetchingLatest() {
    return b
  }
}
p(T, "displayName", "StickersPersistedStore"), p(T, "persistKey", "StickersPersistedStoreV2");
let A = new T(Chunk570140.Z, {
  STICKER_TRACK_USAGE: O,
  USER_SETTINGS_PROTO_UPDATE: I
})