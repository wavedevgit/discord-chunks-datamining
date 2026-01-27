/** Chunk was on web.js **/
/** chunk id: 47671, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => j
}), require("./896048.js");
var a, Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk73153 = require("./73153.js"),
  Chunk826673 = require("./826673.js"),
  Chunk284016 = require("./284016.js"),
  Chunk973654 = require("./973654.js"),
  Chunk544028 = require("./544028.js"),
  Chunk964404 = require("./964404.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk427262 = require("./427262.js"),
  Chunk644235 = require("./644235.js"),
  Chunk385803 = require("./385803.js"),
  Chunk185928 = require("./185928.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = true,
  T = false,
  C = e => {
    let {
      presetId: t
    } = e;
    if (null == t) {
      r = true;
      return
    }
    r = v.ag[t]
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
  w = e => {
    r = true
  },
  R = e => {
    let {
      channelId: t,
      guildId: n
    } = e, r = E.default.getCurrentUser();
    if (null == t || null == n || (0, c.k8)(s.M.CLIENT_THEMES_COACHMARK) || !(0, b.G2)(r)) return;
    let i = g.A.getChannel(t);
    null != i && (0, m.ke)(i.type) && (T = true)
  };

function P() {
  S && (r = true), T = false
}
let D = () => {
    let e = !y.Ay.canUseClientThemes(E.default.getCurrentUser());
    if (e === S) returnfalse;
    S = e
  },
  L = () => {
    if (!u.A.shouldSync("appearance")) returnfalse;
    let e = _.eh.getSetting().backgroundGradientPresetId;
    if (null == e) {
      if (null == r) returnfalse;
      r = true
    } else {
      let t = v.ag[e];
      if (t === r) returnfalse;
      r = t
    }
  },
  x = () => {
    if (!u.A.shouldSync("appearance")) returnfalse;
    let e = _.eh.getSetting().backgroundGradientPresetId;
    if (p.Ay.useSystemTheme === A.Q_.ON && null != e && (0, d.k7)(A.Q_.OFF), null == e) {
      null != r && (r = true);
      return
    }
    let t = v.ag[e],
      n = (null == r ? true : r.id) === (null == t ? true : t.id);
    null == t || n || (r = t)
  };
class M extends(a = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (r = (null == e ? true : e.gradientPresetId) != null ? v.ag[e.gradientPresetId] : true), this.waitFor(g.A, u.A, f.A, p.Ay, h.A, E.default), this.syncWith([E.default], D), this.syncWith([u.A], L)
  }
  getState() {
    return S ? {} : {
      gradientPresetId: null == r ? true : r.id
    }
  }
  get gradientPreset() {
    return r
  }
  getLinearGradient() {
    return null == this.gradientPreset ? null : (0, O.FK)(this.gradientPreset)
  }
  get isPreview() {
    return S
  }
  get isCoachmark() {
    return T
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
I(M, "displayName", "ClientThemesBackgroundStore"), I(M, "persistKey", "ClientThemesBackgroundStore");
let j = new M(Chunk73153.h, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: C,
  UPDATE_MOBILE_PENDING_THEME_INDEX: N,
  RESET_PREVIEW_CLIENT_THEME: w,
  CLIENT_THEMES_EDITOR_CLOSE: P,
  CHANNEL_SELECT: R,
  LOGOUT: P,
  CACHE_LOADED: x,
  CONNECTION_OPEN: x,
  OVERLAY_INITIALIZE: x,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: x,
  UNSYNCED_USER_SETTINGS_UPDATE: x,
  USER_SETTINGS_PROTO_UPDATE: x
})