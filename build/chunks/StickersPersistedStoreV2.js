/** Chunk was on web.js **/
/** chunk id: 931959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk283047 = require("./283047.js"),
  Chunk617617 = require("./617617.js"),
  Chunk927813 = require("./927813.js"),
  Chunk679382 = require("./679382.js"),
  Chunk355097 = require("./355097.js");

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

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = {
  pendingUsages: []
};
Chunk927813.A.Millis.DAY;
let E = 20,
  y = new Chunk283047.A({
    computeBonus: () => 100,
    lookupKey: e => d.A.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: E
  }),
  b = () => {
    d.A.isLoaded && y.compute()
  },
  O = e => {
    let {
      stickerIds: t
    } = e;
    null == t || t.forEach(e => {
      y.track(e), g.pendingUsages.push({
        key: e,
        timestamp: Date.now()
      })
    }), b()
  },
  v = () => {
    b()
  };

function A() {
  var e;
  let t = null == (e = c.A.frecencyWithoutFetchingLatest.stickerFrecency) ? true : e.stickers;
  if (null == t) returnfalse;
  y.overwriteHistory(a().mapValues(t, e => m(_({}, e), {
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
  if (t !== f.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  g.pendingUsages = []
}
class S extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(d.A, c.A), null != e && (g = e), this.syncWith([d.A], v), this.syncWith([c.A], A)
  }
  getState() {
    return g
  }
  hasPendingUsage() {
    return g.pendingUsages.length > 0
  }
  get stickerFrecencyWithoutFetchingLatest() {
    return y
  }
}
p(S, "displayName", "StickersPersistedStore"), p(S, "persistKey", "StickersPersistedStoreV2");
let T = new S(Chunk73153.h, {
  STICKER_TRACK_USAGE: O,
  USER_SETTINGS_PROTO_UPDATE: I
})