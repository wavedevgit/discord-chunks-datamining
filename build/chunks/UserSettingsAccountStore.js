/** Chunk was on web.js **/
/** chunk id: 752319, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, s, o, l, c, u, d, f, p, _, h, m, g, E, b, y, O;
require.d(exports, {
  A: () => ec
});
var A, Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let N = Chunk652215.XlH.CLOSED,
  R = {};

function w() {
  N = T.XlH.OPEN, R = {}
}

function P() {
  N = T.XlH.CLOSED, R = {}
}

function D() {
  N = T.XlH.SUBMITTING, R = {}
}

function x(e) {
  var t;
  if (N !== T.XlH.SUBMITTING) returnfalse;
  N = T.XlH.OPEN, R = null != (t = e.errors) ? t : {}
}

function L(e) {
  let {
    section: t
  } = e;
  return t === T.nc_.ACCOUNT && w()
}

function j(e) {
  let {
    avatar: t
  } = e;
  r = t, g = true
}

function M(e) {
  let {
    globalName: t
  } = e;
  i = t
}

function k(e) {
  let {
    legacyUsernameDisabled: t
  } = e;
  p = t
}

function U(e) {
  let {
    item: t
  } = e;
  t.type === v.R.AVATAR_DECORATION ? a = t.value : t.type === v.R.PROFILE_EFFECT ? s = t.value : t.type === v.R.NAMEPLATE && (o = t.value)
}

function G(e) {
  let {
    banner: t
  } = e;
  l = t
}

function V(e) {
  let {
    bio: t
  } = e;
  c = t
}

function F(e) {
  let {
    pronouns: t
  } = e;
  u = t
}

function B(e) {
  let {
    color: t
  } = e;
  d = t
}

function H(e) {
  let {
    themeColors: t
  } = e;
  f = t
}

function Y(e) {
  let {
    primaryGuildId: t
  } = e;
  _ = t
}

function W(e) {
  let {
    displayNameStyles: t
  } = e;
  h = t
}

function K(e) {
  let {
    themeColors: t
  } = e;
  m = t
}

function z(e) {
  let {
    avatar: t
  } = e;
  g = t
}

function q(e) {
  let {
    avatarDecoration: t
  } = e;
  E = t
}

function X(e) {
  let {
    profileEffect: t
  } = e;
  b = t
}

function Z(e) {
  let {
    banner: t
  } = e;
  y = t
}

function Q(e) {
  let {
    displayNameStyles: t
  } = e;
  O = t
}

function $(e) {
  let {
    banner: t,
    themeColors: n,
    avatarDecoration: r,
    displayNameStyles: i
  } = e;
  y = t, m = n, E = r, O = i
}

function J() {
  r = true
}

function ee() {
  R = {}
}

function et() {
  en(), er(), ea(), es(), R = {}
}

function en() {
  r = true, i = true, a = true, s = true, o = true, h = true
}

function er() {
  l = true, c = true, u = true, d = true, f = true, s = true
}

function ei() {
  g = true, E = true, b = true, y = true, m = true, O = true
}

function ea() {
  p = true
}

function es() {
  _ = true
}

function eo() {
  et(), ei(), P()
}
class el extends(A = Chunk311907.Ay.Store) {
  getFormState() {
    return N
  }
  getErrors() {
    return R
  }
  showNotice() {
    return true !== r || true !== l || true !== c || true !== u || true !== d || true !== f || true !== a || true !== s || true !== i || true !== o || true !== p || true !== _ || true !== h
  }
  getIsSubmitDisabled() {
    return true !== c && c.length > T.NA2
  }
  getPendingAvatar() {
    return r
  }
  getPendingGlobalName() {
    return i
  }
  getPendingBanner() {
    return l
  }
  getPendingBio() {
    return c
  }
  getPendingPronouns() {
    return u
  }
  getPendingAccentColor() {
    return d
  }
  getPendingThemeColors() {
    return f
  }
  getPendingAvatarDecoration() {
    return a
  }
  getPendingNameplate() {
    return o
  }
  getPendingProfileEffect() {
    return s
  }
  getPendingDisplayNameStyles() {
    return h
  }
  getAllPending() {
    return {
      pendingAvatar: r,
      pendingBanner: l,
      pendingBio: c,
      pendingPronouns: u,
      pendingAccentColor: d,
      pendingThemeColors: f,
      pendingAvatarDecoration: a,
      pendingProfileEffect: s,
      pendingGlobalName: i,
      pendingNameplate: o,
      pendingLegacyUsernameDisabled: p,
      pendingPrimaryGuildId: _,
      pendingDisplayNameStyles: h
    }
  }
  getTryItOutThemeColors() {
    return m
  }
  getTryItOutAvatar() {
    return g
  }
  getTryItOutAvatarDecoration() {
    return E
  }
  getTryItOutProfileEffect() {
    return b
  }
  getTryItOutBanner() {
    return y
  }
  getTryItOutDisplayNameStyles() {
    return O
  }
  getAllTryItOut() {
    return {
      tryItOutThemeColors: m,
      tryItOutAvatar: g,
      tryItOutAvatarDecoration: E,
      tryItOutProfileEffect: b,
      tryItOutBanner: y,
      tryItOutDisplayNameStyles: O
    }
  }
}
C(el, "displayName", "UserSettingsAccountStore");
let ec = new el(Chunk73153.h, {
  USER_SETTINGS_ACCOUNT_INIT: w,
  USER_SETTINGS_MODAL_INIT: w,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: w,
  USER_SETTINGS_MODAL_SET_SECTION: L,
  USER_SETTINGS_ACCOUNT_CLOSE: P,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: eo,
  USER_SETTINGS_ACCOUNT_SUBMIT: D,
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: x,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: j,
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: M,
  USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: k,
  USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM: U,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: G,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: V,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: F,
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: B,
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: H,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: z,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: X,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Z,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: K,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: Q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: $,
  USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: Y,
  USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: W,
  USER_SETTINGS_CLEAR_ERRORS: ee,
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: en,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: er,
  USER_SETTINGS_RESET_ALL_PENDING: et,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: ei,
  USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: ea,
  USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: es,
  LOGOUT: J
})