/** Chunk was on web.js **/
/** chunk id: 25990, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o, a, s, l, c, u, d, f, p, _, m, h, g, E, b, y, O;
require.d(exports, {
  Z: () => ec
});
var v, Chunk979554 = require("./979554.js"),
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
let N = Chunk981631.QZA.CLOSED,
  P = {};

function R() {
  N = Chunk981631.QZA.OPEN, P = {}
}

function w() {
  N = Chunk981631.QZA.CLOSED, P = {}
}

function D() {
  N = Chunk981631.QZA.SUBMITTING, P = {}
}

function x(e) {
  var t;
  if (N !== C.QZA.SUBMITTING) returnfalse;
  N = C.QZA.OPEN, P = null != (t = e.errors) ? t : {}
}

function L(e) {
  let {
    section: t
  } = e;
  return t === C.oAB.ACCOUNT && R()
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
  t.type === S.Z.AVATAR_DECORATION ? o = t.value : t.type === S.Z.PROFILE_EFFECT ? a = t.value : t.type === S.Z.NAMEPLATE && (s = t.value)
}

function G(e) {
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

function B(e) {
  let {
    color: t
  } = e;
  d = t
}

function V(e) {
  let {
    themeColors: t
  } = e;
  f = t
}

function H(e) {
  let {
    primaryGuildId: t
  } = e;
  _ = t
}

function Y(e) {
  let {
    displayNameStyles: t
  } = e;
  m = t
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
  g = t
}

function z(e) {
  let {
    avatarDecoration: t
  } = e;
  E = t
}

function q(e) {
  let {
    profileEffect: t
  } = e;
  b = t
}

function Q(e) {
  let {
    banner: t
  } = e;
  y = t
}

function X(e) {
  let {
    displayNameStyles: t
  } = e;
  O = t
}

function J(e) {
  let {
    banner: t,
    themeColors: n,
    avatarDecoration: r,
    displayNameStyles: i
  } = e;
  y = t, h = n, E = r, O = i
}

function $() {
  r = true
}

function ee() {
  P = {}
}

function et() {
  en(), er(), eo(), ea(), P = {}
}

function en() {
  r = true, i = true, o = true, a = true, s = true, m = true
}

function er() {
  l = true, c = true, u = true, d = true, f = true, a = true
}

function ei() {
  g = true, E = true, b = true, y = true, h = true, O = true
}

function eo() {
  p = true
}

function ea() {
  _ = true
}

function es() {
  et(), ei(), w()
}
class el extends(v = Chunk442837.ZP.Store) {
  getFormState() {
    return N
  }
  getErrors() {
    return P
  }
  showNotice() {
    return true !== r || true !== l || true !== c || true !== u || true !== d || true !== f || true !== o || true !== a || true !== i || true !== s || true !== p || true !== _ || true !== m
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
  getPendingProfileEffect() {
    return a
  }
  getPendingDisplayNameStyles() {
    return m
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
      pendingProfileEffect: a,
      pendingGlobalName: i,
      pendingNameplate: s,
      pendingLegacyUsernameDisabled: p,
      pendingPrimaryGuildId: _,
      pendingDisplayNameStyles: m
    }
  }
  getTryItOutThemeColors() {
    return h
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
      tryItOutThemeColors: h,
      tryItOutAvatar: g,
      tryItOutAvatarDecoration: E,
      tryItOutProfileEffect: b,
      tryItOutBanner: y,
      tryItOutDisplayNameStyles: O
    }
  }
}
A(el, "displayName", "UserSettingsAccountStore");
let ec = new el(Chunk570140.Z, {
  USER_SETTINGS_ACCOUNT_INIT: R,
  USER_SETTINGS_MODAL_INIT: R,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: R,
  USER_SETTINGS_MODAL_SET_SECTION: L,
  USER_SETTINGS_ACCOUNT_CLOSE: w,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: es,
  USER_SETTINGS_ACCOUNT_SUBMIT: D,
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: x,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: j,
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: M,
  USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: k,
  USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM: U,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: G,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: Z,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: F,
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: B,
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: V,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: K,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: z,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: Q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: W,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: X,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: J,
  USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: H,
  USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: Y,
  USER_SETTINGS_CLEAR_ERRORS: ee,
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: en,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: er,
  USER_SETTINGS_RESET_ALL_PENDING: et,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: ei,
  USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: eo,
  USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: ea,
  LOGOUT: $
})