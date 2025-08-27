/** Chunk was on web.js **/
/** chunk id: 411149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
let d = {},
  f = 0,
  _ = new Set,
  p = {},
  h = {};

function m() {
  f = 1
}

function g(e) {
  let {
    wallpapers: t
  } = e;
  f = 2, t.forEach(e => {
    d[e.id] = e
  })
}

function E() {
  f = 3
}

function b() {
  d = {}, f = 0
}

function y(e) {
  let {
    channelId: t
  } = e, n = new Set(_);
  n.add(t), _ = n
}

function O(e) {
  let {
    channelId: t
  } = e, n = new Set(_);
  n.delete(t), _ = n
}

function v(e) {
  var t, n;
  let {
    wallpaperId: r,
    overrides: a
  } = e;
  if (null == d[r] || null == a) return void delete h[r];
  null == h[r] && (h[r] = (0, i.cloneDeep)(d[r]));
  let o = h[r];
  o.default = u({}, o.default, a), (null == o || null == (t = o.variants) ? true : t.dark) != null && (o.variants.dark = u({}, o.variants.dark, a)), (null == o || null == (n = o.variants) ? true : n.light) != null && (o.variants.light = u({}, o.variants.light, a))
}

function I(e) {
  let {
    channelId: t,
    message: n
  } = e;
  if (n.type !== l.uaV.CHAT_WALLPAPER_SET) returnfalse;
  s.default.compare(n.id, p[t]) > 0 && (p[t] = n.id)
}

function T(e) {
  let {
    channelId: t,
    messages: n
  } = e, r = n.find(e => e.type === l.uaV.CHAT_WALLPAPER_SET);
  if (null == r) returnfalse;
  p[t] = r.id
}
class S extends(r = Chunk442837.ZP.Store) {
  get isFetchingWallpapers() {
    return 1 === f
  }
  get shouldFetchWallpapers() {
    return 0 === f
  }
  get hasFetchedWallpapers() {
    return 2 === f
  }
  get failedToFetchWallpapers() {
    return 3 === f
  }
  get wallpapers() {
    return Object.values(d)
  }
  getWallpaperById(e) {
    var t;
    if (null != e && null != d[e]) return null != (t = h[e]) ? t : d[e]
  }
  isUpdatingChatWallpaperFlagForChannel(e) {
    return _.has(e)
  }
  getLastSetWallpaperMessageIdForChannel(e) {
    return p[e]
  }
}
c(S, "displayName", "ChatWallpaperStore");
let A = new S(Chunk570140.Z, {
  FETCH_CHAT_WALLPAPERS_START: m,
  FETCH_CHAT_WALLPAPERS_SUCCESS: g,
  FETCH_CHAT_WALLPAPERS_FAILURE: E,
  LOAD_MESSAGES_SUCCESS: T,
  MESSAGE_CREATE: I,
  UPDATE_CHAT_WALLPAPER_FLAG_START: y,
  UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE: O,
  UPDATE_CHAT_WALLPAPER_OVERRIDES: v,
  LOGOUT: b
})