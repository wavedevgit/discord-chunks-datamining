/** Chunk was on web.js **/
/** chunk id: 938038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => s
});
var Chunk433517 = require("./433517.js"),
  Chunk593472 = require("./593472.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
class s {
  save() {
    let e = {
      games: this.games
    };
    Chunk433517.K.set(s.storageKey, module)
  }
  static load() {
    return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded
  }
  static loadInternal() {
    let e = Chunk433517.K.get(s.storageKey);
    if (null != module) {
      var t;
      return new s(null != (t = module.games) ? exports : {})
    }
    let n = new s({});
    return require.save(), require
  }
  static getGameSettings(e) {
    var t;
    return null == e ? null : null != (t = s.load().games[e]) ? t : null
  }
  static updateGameSettings(e, t) {
    if (null == e) return;
    let n = s.load(),
      r = n.games[e];
    if (null == r) {
      n.games[e] = a({
        screen: i.Jx.UNKNOWN,
        date: Date.now()
      }, t), n.save();
      return
    }
    "boolean" == typeof t.disabled && (r.disabled = t.disabled), "number" == typeof t.screen && (r.screen = t.screen), r.date = Date.now(), n.save()
  }
  static isPromptingForGameDisable(e) {
    var t, n;
    return null != (n = null == (t = s.getGameSettings(e)) ? true : t.disabled) && n
  }
  static setPromptingForGameDisable(e, t) {
    s.updateGameSettings(e, {
      disabled: t
    })
  }
  static getGameDisplayMode(e) {
    var t, n;
    return null == e ? null : null != (n = null == (t = s.getGameSettings(e)) ? true : t.screen) ? n : null
  }
  static setGameDisplayMode(e, t) {
    s.updateGameSettings(e, {
      screen: t
    })
  }
  static clearOldGameSettings() {
    let e = s.load();
    if (null == module.games) return;
    let t = Date.now() - 31536e6;
    for (let n in module.games) module.games[require].date < exports && delete module.games[require];
    module.save()
  }
  static reset() {
    let e = s.load();
    module.games = {}, module.save()
  }
  static isTestMode() {
    return !!window.__GAME_DISPLAY_MODE_TEST_MODE__
  }
  static isVerbose() {
    return !!window.__GAME_DISPLAY_MODE_DEBUG__
  }
  constructor(e) {
    o(this, "games", true), this.games = e
  }
}
o(s, "_loaded", null), o(s, "storageKey", "GameDisplayModeStorage"), setTimeout(() => s.clearOldGameSettings(), 6e4)