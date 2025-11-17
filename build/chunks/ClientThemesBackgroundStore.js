/** Chunk was on web.js **/
/** chunk id: 514361, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var a, Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk266454 = require("./266454.js"),
  Chunk238514 = require("./238514.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk51144 = require("./51144.js"),
  Chunk47760 = require("./47760.js"),
  Chunk866419 = require("./866419.js"),
  Chunk469115 = require("./469115.js"),
  Chunk874893 = require("./874893.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = true,
  C = false,
  N = e => {
    let {
      presetId: t
    } = e;
    if (null == t) {
      r = true;
      return
    }
    r = I.qt[t]
  },
  R = e => {
    let {
      mobileThemesIndex: t
    } = e;
    if (null == t) {
      i = true;
      return
    }
    i = t
  },
  P = e => {
    r = true
  },
  D = e => {
    let {
      channelId: t,
      guildId: n
    } = e, r = E.default.getCurrentUser();
    if (null == t || null == n || (0, c.zu)(s.z.CLIENT_THEMES_COACHMARK) || !(0, y.Fc)(r)) return;
    let i = g.Z.getChannel(t);
    null != i && (0, m.zi)(i.type) && (C = true)
  };

function w() {
  A && (r = true), C = false
}
let x = () => {
    let e = !Chunk74538.ZP.canUseClientThemes(Chunk594174.default.getCurrentUser());
    if (module === A) returnfalse;
    A = module
  },
  L = () => {
    if (!Chunk238514.Z.shouldSync("appearance")) returnfalse;
    let e = Chunk695346.L1.getSetting().backgroundGradientPresetId;
    if (null == module) {
      if (null == r) returnfalse;
      r = true
    } else {
      let t = Chunk469115.qt[module];
      if (exports === r) returnfalse;
      r = exports
    }
  },
  M = () => {
    if (!Chunk238514.Z.shouldSync("appearance") || (0, Chunk866419.zu)()) returnfalse;
    let e = Chunk695346.L1.getSetting().backgroundGradientPresetId;
    if (Chunk740492.ZP.useSystemTheme === Chunk874893.KW.ON && null != module && (0, Chunk781391.hi)(Chunk874893.KW.OFF), null == module) {
      null != r && (r = true);
      return
    }
    let t = Chunk469115.qt[module],
      n = (null == r ? true : r.id) === (null == exports ? true : exports.id);
    null == exports || require || (r = exports)
  };
class k extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (r = (null == e ? true : e.gradientPresetId) != null ? I.qt[e.gradientPresetId] : true), this.waitFor(g.Z, u.Z, f.Z, _.ZP, h.Z, E.default), this.syncWith([E.default], x), this.syncWith([u.Z], L)
  }
  getState() {
    return A ? {} : {
      gradientPresetId: null == r ? true : r.id
    }
  }
  get gradientPreset() {
    return r
  }
  getLinearGradient() {
    return null == this.gradientPreset ? null : (0, Chunk47760.VK)(this.gradientPreset)
  }
  get isPreview() {
    return A
  }
  get isCoachmark() {
    return C
  }
  get mobilePendingThemeIndex() {
    return i
  }
  constructor(...e) {
    super(...e), S(this, "migrations", [e => {
      var t;
      return {
        gradientPresetId: null == e || null == (t = e.gradientPreset) ? true : t.id
      }
    }])
  }
}
S(k, "displayName", "ClientThemesBackgroundStore"), S(k, "persistKey", "ClientThemesBackgroundStore");
let j = new k(Chunk570140.Z, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: N,
  UPDATE_MOBILE_PENDING_THEME_INDEX: R,
  RESET_PREVIEW_CLIENT_THEME: P,
  CLIENT_THEMES_EDITOR_CLOSE: w,
  CHANNEL_SELECT: D,
  LOGOUT: w,
  CACHE_LOADED: M,
  CONNECTION_OPEN: M,
  OVERLAY_INITIALIZE: M,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: M,
  UNSYNCED_USER_SETTINGS_UPDATE: M,
  USER_SETTINGS_PROTO_UPDATE: M
})