/** Chunk was on web.js **/
/** chunk id: 514361, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var o, Chunk442837 = require("./442837.js"),
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = true,
  A = false,
  N = e => {
    let {
      presetId: t
    } = e;
    if (null == t) {
      r = true;
      return
    }
    r = S.qt[t]
  },
  P = e => {
    let {
      mobileThemesIndex: t
    } = e;
    if (null == t) {
      i = true;
      return
    }
    i = t
  },
  R = e => {
    r = true
  },
  w = e => {
    let {
      channelId: t,
      guildId: n
    } = e, r = E.default.getCurrentUser();
    if (null == t || null == n || (0, c.zu)(s.z.CLIENT_THEMES_COACHMARK) || !(0, y.Fc)(r)) return;
    let i = g.Z.getChannel(t);
    null != i && (0, h.zi)(i.type) && (A = true)
  };

function D() {
  C && (r = true), A = false
}
let x = () => {
    let e = !Chunk74538.ZP.canUseClientThemes(Chunk594174.default.getCurrentUser());
    if (module === C) returnfalse;
    C = module
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
  j = () => {
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
class M extends(o = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (r = (null == e ? true : e.gradientPresetId) != null ? S.qt[e.gradientPresetId] : true), this.waitFor(g.Z, u.Z, f.Z, p.ZP, m.Z, E.default), this.syncWith([E.default], x), this.syncWith([u.Z], L)
  }
  getState() {
    return C ? {} : {
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
    return C
  }
  get isCoachmark() {
    return A
  }
  get mobilePendingThemeIndex() {
    return i
  }
  constructor(...e) {
    super(...e), T(this, "migrations", [e => {
      var t;
      return {
        gradientPresetId: null == e || null == (t = e.gradientPreset) ? true : t.id
      }
    }])
  }
}
T(M, "displayName", "ClientThemesBackgroundStore"), T(M, "persistKey", "ClientThemesBackgroundStore");
let k = new M(Chunk570140.Z, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: N,
  UPDATE_MOBILE_PENDING_THEME_INDEX: P,
  RESET_PREVIEW_CLIENT_THEME: R,
  CLIENT_THEMES_EDITOR_CLOSE: D,
  CHANNEL_SELECT: w,
  LOGOUT: D,
  CACHE_LOADED: j,
  CONNECTION_OPEN: j,
  OVERLAY_INITIALIZE: j,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: j,
  UNSYNCED_USER_SETTINGS_UPDATE: j,
  USER_SETTINGS_PROTO_UPDATE: j
})