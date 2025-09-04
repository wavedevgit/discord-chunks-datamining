/** Chunk was on web.js **/
/** chunk id: 25990, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y;
require.d(exports, {
  Z: () => ed
});
var O, Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = Chunk981631.QZA.CLOSED,
  N = {};

function R() {
  C = Chunk981631.QZA.OPEN, N = {}
}

function P() {
  C = Chunk981631.QZA.CLOSED, N = {}
}

function w() {
  C = Chunk981631.QZA.SUBMITTING, N = {}
}

function D(e) {
  var t;
  if (C !== S.QZA.SUBMITTING) returnfalse;
  C = S.QZA.OPEN, N = null != (t = e.errors) ? t : {}
}

function x(e) {
  let {
    section: t
  } = e;
  return t === S.oAB.ACCOUNT && R()
}

function L(e) {
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
  a = t
}

function U(e) {
  let {
    nameplate: t
  } = e;
  s = t
}

function G(e) {
  let {
    profileEffectId: t
  } = e;
  o = t
}

function B(e) {
  let {
    item: t
  } = e;
  (null == t ? true : t.type) === v.Z.PROFILE_EFFECT ? (E = null, b = null == t ? true : t.id) : (null == t ? true : t.type) === v.Z.AVATAR_DECORATION && (b = null, E = t)
}

function Z(e) {
  let {
    banner: t
  } = e;
  l = t
}

function F(e) {
  let {
    bio: t
  } = e;
  c = t
}

function V(e) {
  let {
    pronouns: t
  } = e;
  u = t
}

function H(e) {
  let {
    color: t
  } = e;
  d = t
}

function Y(e) {
  let {
    themeColors: t
  } = e;
  f = t
}

function W(e) {
  let {
    primaryGuildId: t
  } = e;
  p = t
}

function K(e) {
  let {
    displayNameStyles: t
  } = e;
  h = t
}

function z(e) {
  let {
    themeColors: t
  } = e;
  m = t
}

function q(e) {
  let {
    avatar: t
  } = e;
  g = t
}

function X(e) {
  let {
    avatarDecoration: t
  } = e;
  E = t
}

function Q(e) {
  let {
    profileEffectId: t
  } = e;
  b = t
}

function J(e) {
  let {
    banner: t
  } = e;
  y = t
}

function $(e) {
  let {
    banner: t,
    themeColors: n,
    avatarDecoration: r
  } = e;
  y = t, m = n, E = r
}

function ee() {
  r = true
}

function et() {
  N = {}
}

function en() {
  er(), ei(), es(), el(), N = {}
}

function er() {
  r = true, i = true, a = true, o = true, s = true, h = true
}

function ei() {
  l = true, c = true, u = true, d = true, f = true, o = true
}

function ea() {
  g = true, E = true, b = true, y = true, m = true
}

function eo() {
  a = true
}

function es() {
  _ = true
}

function el() {
  p = true
}

function ec() {
  en(), ea(), P()
}
class eu extends(O = Chunk442837.ZP.Store) {
  getFormState() {
    return C
  }
  getErrors() {
    return N
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
  getPendingProfileEffectId() {
    return o
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
      pendingProfileEffectId: o,
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
  getTryItOutProfileEffectId() {
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
      tryItOutProfileEffectId: b,
      tryItOutBanner: y
    }
  }
}
A(eu, "displayName", "UserSettingsAccountStore");
let ed = new eu(Chunk570140.Z, {
  USER_SETTINGS_ACCOUNT_INIT: R,
  USER_SETTINGS_MODAL_INIT: R,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: R,
  USER_SETTINGS_MODAL_SET_SECTION: x,
  USER_SETTINGS_ACCOUNT_CLOSE: P,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: ec,
  USER_SETTINGS_ACCOUNT_SUBMIT: w,
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: D,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: L,
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: j,
  USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: M,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: k,
  USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE: U,
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: B,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: G,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: Z,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: F,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: V,
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: H,
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: Y,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: X,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: Q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: J,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: z,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: $,
  USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: W,
  USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: K,
  USER_SETTINGS_CLEAR_ERRORS: et,
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: er,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: ei,
  USER_SETTINGS_RESET_ALL_PENDING: en,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: ea,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: eo,
  USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: es,
  USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: el,
  LOGOUT: ee
})