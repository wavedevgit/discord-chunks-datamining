/** Chunk was on web.js **/
/** chunk id: 25990, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O;
require.d(exports, {
  Z: () => e_
});
var v, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk922347 = require("./922347.js"),
  Chunk212161 = require("./212161.js"),
  Chunk981631 = require("./981631.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let R = Chunk981631.QZA.CLOSED,
  P = {};

function w() {
  R = Chunk981631.QZA.OPEN, P = {}
}

function D() {
  R = Chunk981631.QZA.CLOSED, P = {}
}

function L() {
  R = Chunk981631.QZA.SUBMITTING, P = {}
}

function x(e) {
  var t;
  if (R !== C.QZA.SUBMITTING) returnfalse;
  R = C.QZA.OPEN, P = null != (t = e.errors) ? t : {}
}

function M(e) {
  let {
    section: t
  } = e;
  return t === C.oAB.ACCOUNT && w()
}

function k(e) {
  let {
    avatar: t
  } = e;
  r = t, g = true
}

function j(e) {
  let {
    globalName: t
  } = e;
  i = t
}

function U(e) {
  let {
    legacyUsernameDisabled: t
  } = e;
  _ = t
}

function G(e) {
  let {
    avatarDecoration: t
  } = e;
  a = t
}

function B(e) {
  let {
    nameplate: t
  } = e;
  s = t
}

function Z(e) {
  let {
    profileEffect: t
  } = e;
  o = t
}

function F(e) {
  let {
    item: t
  } = e;
  (0, S.M)(t) ? (E = t, b = null) : (0, A.H)(t) && (E = null, b = t)
}

function V(e) {
  let {
    banner: t
  } = e;
  l = t
}

function H(e) {
  let {
    bio: t
  } = e;
  c = t
}

function Y(e) {
  let {
    pronouns: t
  } = e;
  u = t
}

function W(e) {
  let {
    color: t
  } = e;
  d = t
}

function K(e) {
  let {
    themeColors: t
  } = e;
  f = t
}

function z(e) {
  let {
    primaryGuildId: t
  } = e;
  p = t
}

function q(e) {
  let {
    displayNameStyles: t
  } = e;
  h = t
}

function X(e) {
  let {
    themeColors: t
  } = e;
  m = t
}

function Q(e) {
  let {
    avatar: t
  } = e;
  g = t
}

function J(e) {
  let {
    avatarDecoration: t
  } = e;
  E = t
}

function $(e) {
  let {
    profileEffect: t
  } = e;
  b = t
}

function ee(e) {
  let {
    banner: t
  } = e;
  y = t
}

function et(e) {
  let {
    banner: t,
    themeColors: n,
    avatarDecoration: r,
    displayNameStyles: i
  } = e;
  y = t, m = n, E = r, O = i
}

function en() {
  r = true
}

function er() {
  P = {}
}

function ei() {
  ea(), eo(), ec(), eu(), P = {}
}

function ea() {
  r = true, i = true, a = true, o = true, s = true, h = true
}

function eo() {
  l = true, c = true, u = true, d = true, f = true, o = true
}

function es() {
  g = true, E = true, b = true, y = true, m = true, O = true
}

function el() {
  a = true
}

function ec() {
  _ = true
}

function eu() {
  p = true
}

function ed() {
  ei(), es(), D()
}
class ef extends(v = Chunk442837.ZP.Store) {
  getFormState() {
    return R
  }
  getErrors() {
    return P
  }
  showNotice() {
    return true !== r || true !== l || true !== c || true !== u || true !== d || true !== f || true !== a || true !== o || true !== i || true !== s || true !== _ || true !== p || true !== h
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
    return a
  }
  getPendingNameplate() {
    return s
  }
  getPendingProfileEffect() {
    return o
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
      pendingProfileEffect: o,
      pendingGlobalName: i,
      pendingNameplate: s,
      pendingLegacyUsernameDisabled: _,
      pendingPrimaryGuildId: p,
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
N(ef, "displayName", "UserSettingsAccountStore");
let e_ = new ef(Chunk570140.Z, {
  USER_SETTINGS_ACCOUNT_INIT: w,
  USER_SETTINGS_MODAL_INIT: w,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: w,
  USER_SETTINGS_MODAL_SET_SECTION: M,
  USER_SETTINGS_ACCOUNT_CLOSE: D,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: ed,
  USER_SETTINGS_ACCOUNT_SUBMIT: L,
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: x,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: k,
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: j,
  USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: U,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: G,
  USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: B,
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: F,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT: Z,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: V,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: H,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: Y,
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: W,
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: K,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: Q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: J,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: $,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: ee,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: X,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: et,
  USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: z,
  USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: q,
  USER_SETTINGS_CLEAR_ERRORS: er,
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: ea,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: eo,
  USER_SETTINGS_RESET_ALL_PENDING: ei,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: es,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: el,
  USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: ec,
  USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: eu,
  LOGOUT: en
})