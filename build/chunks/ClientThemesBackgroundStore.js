/** Chunk was on web.js **/
/** chunk id: 514361, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => M
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
  Chunk469115 = require("./469115.js"),
  Chunk874893 = require("./874893.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let T = true,
  C = false,
  A = e => {
    let {
      presetId: t
    } = e;
    if (null == t) {
      r = true;
      return
    }
    r = v.qt[t]
  },
  N = e => {
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
  w = e => {
    let {
      channelId: t,
      guildId: n
    } = e, r = E.default.getCurrentUser();
    if (null == t || null == n || (0, c.zu)(s.z.CLIENT_THEMES_COACHMARK) || !(0, y.Fc)(r)) return;
    let i = g.Z.getChannel(t);
    null != i && (0, m.zi)(i.type) && (C = true)
  };

function R() {
  T && (r = true), C = false
}
let D = () => {
    let e = !b.ZP.canUseClientThemes(E.default.getCurrentUser());
    if (e === T) returnfalse;
    T = e
  },
  x = () => {
    if (!u.Z.shouldSync("appearance")) returnfalse;
    let e = _.L1.getSetting().backgroundGradientPresetId;
    if (null == e) {
      if (null == r) returnfalse;
      r = true
    } else {
      let t = v.qt[e];
      if (t === r) returnfalse;
      r = t
    }
  },
  L = () => {
    if (!u.Z.shouldSync("appearance")) returnfalse;
    let e = _.L1.getSetting().backgroundGradientPresetId;
    if (p.ZP.useSystemTheme === S.KW.ON && null != e && (0, d.hi)(S.KW.OFF), null == e) {
      null != r && (r = true);
      return
    }
    let t = v.qt[e],
      n = (null == r ? true : r.id) === (null == t ? true : t.id);
    null == t || n || (r = t)
  };
class j extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (r = (null == e ? true : e.gradientPresetId) != null ? v.qt[e.gradientPresetId] : true), this.waitFor(g.Z, u.Z, f.Z, p.ZP, h.Z, E.default), this.syncWith([E.default], D), this.syncWith([u.Z], x)
  }
  getState() {
    return T ? {} : {
      gradientPresetId: null == r ? true : r.id
    }
  }
  get gradientPreset() {
    return r
  }
  getLinearGradient() {
    return null == this.gradientPreset ? null : (0, O.VK)(this.gradientPreset)
  }
  get isPreview() {
    return T
  }
  get isCoachmark() {
    return C
  }
  get mobilePendingThemeIndex() {
    return i
  }
  constructor(...e) {
    super(...e), I(this, "migrations", [e => {
      var t;
      return {
        gradientPresetId: null == e || null == (t = e.gradientPreset) ? true : t.id
      }
    }])
  }
}
I(j, "displayName", "ClientThemesBackgroundStore"), I(j, "persistKey", "ClientThemesBackgroundStore");
let M = new j(Chunk570140.Z, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: A,
  UPDATE_MOBILE_PENDING_THEME_INDEX: N,
  RESET_PREVIEW_CLIENT_THEME: P,
  CLIENT_THEMES_EDITOR_CLOSE: R,
  CHANNEL_SELECT: w,
  LOGOUT: R,
  CACHE_LOADED: L,
  CONNECTION_OPEN: L,
  OVERLAY_INITIALIZE: L,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: L,
  UNSYNCED_USER_SETTINGS_UPDATE: L,
  USER_SETTINGS_PROTO_UPDATE: L
})