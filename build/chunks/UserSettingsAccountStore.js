/** Chunk was on web.js **/
/** chunk id: 25990, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, b;
require.d(exports, {
  Z: () => ec
});
var y, Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = Chunk981631.QZA.CLOSED,
  N = {};

function C() {
  A = Chunk981631.QZA.OPEN, N = {}
}

function R() {
  A = Chunk981631.QZA.CLOSED, N = {}
}

function P() {
  A = Chunk981631.QZA.SUBMITTING, N = {}
}

function w(e) {
  var t;
  if (A !== T.QZA.SUBMITTING) returnfalse;
  A = T.QZA.OPEN, N = null != (t = e.errors) ? t : {}
}

function D(e) {
  let {
    section: t
  } = e;
  return t === T.oAB.ACCOUNT && C()
}

function L(e) {
  let {
    avatar: t
  } = e;
  r = t, m = true
}

function x(e) {
  let {
    globalName: t
  } = e;
  i = t
}

function M(e) {
  let {
    legacyUsernameDisabled: t
  } = e;
  _ = t
}

function k(e) {
  let {
    avatarDecoration: t
  } = e;
  o = t
}

function j(e) {
  let {
    nameplate: t
  } = e;
  s = t
}

function U(e) {
  let {
    profileEffectId: t
  } = e;
  a = t
}

function G(e) {
  let {
    item: t
  } = e;
  (null == t ? true : t.type) === O.Z.PROFILE_EFFECT ? (g = null, E = null == t ? true : t.id) : (null == t ? true : t.type) === O.Z.AVATAR_DECORATION && (E = null, g = t)
}

function B(e) {
  let {
    banner: t
  } = e;
  l = t
}

function Z(e) {
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

function V(e) {
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
  p = t
}

function W(e) {
  let {
    themeColors: t
  } = e;
  h = t
}

function K(e) {
  let {
    avatar: t
  } = e;
  m = t
}

function z(e) {
  let {
    avatarDecoration: t
  } = e;
  g = t
}

function q(e) {
  let {
    profileEffectId: t
  } = e;
  E = t
}

function X(e) {
  let {
    banner: t
  } = e;
  b = t
}

function Q(e) {
  let {
    banner: t,
    themeColors: n,
    avatarDecoration: r
  } = e;
  b = t, h = n, g = r
}

function J() {
  r = true
}

function $() {
  N = {}
}

function ee() {
  et(), en(), eo(), ea(), N = {}
}

function et() {
  r = true, i = true, o = true, a = true, s = true
}

function en() {
  l = true, c = true, u = true, d = true, f = true, a = true
}

function er() {
  m = true, g = true, E = true, b = true, h = true
}

function ei() {
  o = true
}

function eo() {
  _ = true
}

function ea() {
  p = true
}

function es() {
  ee(), er(), R()
}
class el extends(y = Chunk442837.ZP.Store) {
  getFormState() {
    return A
  }
  getErrors() {
    return N
  }
  showNotice() {
    return true !== r || true !== l || true !== c || true !== u || true !== d || true !== f || true !== o || true !== a || true !== i || true !== s || true !== _ || true !== p
  }
  getIsSubmitDisabled() {
    return true !== c && c.length > Chunk981631.tPV
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
    return o
  }
  getPendingNameplate() {
    return s
  }
  getPendingProfileEffectId() {
    return a
  }
  getAllPending() {
    return {
      pendingAvatar: r,
      pendingBanner: l,
      pendingBio: c,
      pendingPronouns: u,
      pendingAccentColor: d,
      pendingThemeColors: f,
      pendingAvatarDecoration: o,
      pendingProfileEffectId: a,
      pendingGlobalName: i,
      pendingNameplate: s,
      pendingLegacyUsernameDisabled: _,
      pendingPrimaryGuildId: p
    }
  }
  getTryItOutThemeColors() {
    return h
  }
  getTryItOutAvatar() {
    return m
  }
  getTryItOutAvatarDecoration() {
    return g
  }
  getTryItOutProfileEffectId() {
    return E
  }
  getTryItOutBanner() {
    return b
  }
  getAllTryItOut() {
    return {
      tryItOutThemeColors: h,
      tryItOutAvatar: m,
      tryItOutAvatarDecoration: g,
      tryItOutProfileEffectId: E,
      tryItOutBanner: b
    }
  }
}
S(el, "displayName", "UserSettingsAccountStore");
let ec = new el(Chunk570140.Z, {
  USER_SETTINGS_ACCOUNT_INIT: C,
  USER_SETTINGS_MODAL_INIT: C,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: C,
  USER_SETTINGS_MODAL_SET_SECTION: D,
  USER_SETTINGS_ACCOUNT_CLOSE: R,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: es,
  USER_SETTINGS_ACCOUNT_SUBMIT: P,
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: w,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: L,
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: x,
  USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: M,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: k,
  USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: j,
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: G,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: U,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: B,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: Z,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: F,
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: V,
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: H,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: K,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: z,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: X,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: W,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: Q,
  USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: Y,
  USER_SETTINGS_CLEAR_ERRORS: $,
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: et,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: en,
  USER_SETTINGS_RESET_ALL_PENDING: ee,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: er,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: ei,
  USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: eo,
  USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: ea,
  LOGOUT: J
})