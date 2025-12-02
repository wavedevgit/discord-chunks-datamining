/** Chunk was on web.js **/
/** chunk id: 25990, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, p, _, m, h, g, E, b, y, O;
require.d(exports, {
  Z: () => ed
});
var v, Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk922347 = require("./922347.js"),
  Chunk212161 = require("./212161.js"),
  Chunk981631 = require("./981631.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let R = Chunk981631.QZA.CLOSED,
  w = {};

function D() {
  R = Chunk981631.QZA.OPEN, w = {}
}

function x() {
  R = Chunk981631.QZA.CLOSED, w = {}
}

function L() {
  R = Chunk981631.QZA.SUBMITTING, w = {}
}

function j(e) {
  var t;
  if (R !== N.QZA.SUBMITTING) returnfalse;
  R = N.QZA.OPEN, w = null != (t = e.errors) ? t : {}
}

function M(e) {
  let {
    section: t
  } = e;
  return t === N.oAB.ACCOUNT && D()
}

function k(e) {
  let {
    avatar: t
  } = e;
  r = t, g = true
}

function U(e) {
  let {
    globalName: t
  } = e;
  i = t
}

function G(e) {
  let {
    legacyUsernameDisabled: t
  } = e;
  p = t
}

function Z(e) {
  let {
    item: t
  } = e;
  t.type === S.Z.AVATAR_DECORATION ? a = t.value : t.type === S.Z.PROFILE_EFFECT ? o = t.value : t.type === S.Z.NAMEPLATE && (s = t.value)
}

function B(e) {
  let {
    item: t
  } = e;
  (0, A.M)(t) ? (E = t, b = null) : (0, C.H)(t) && (E = null, b = t)
}

function F(e) {
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

function H(e) {
  let {
    pronouns: t
  } = e;
  u = t
}

function Y(e) {
  let {
    color: t
  } = e;
  d = t
}

function W(e) {
  let {
    themeColors: t
  } = e;
  f = t
}

function K(e) {
  let {
    primaryGuildId: t
  } = e;
  _ = t
}

function z(e) {
  let {
    displayNameStyles: t
  } = e;
  m = t
}

function q(e) {
  let {
    themeColors: t
  } = e;
  h = t
}

function X(e) {
  let {
    avatar: t
  } = e;
  g = t
}

function Q(e) {
  let {
    avatarDecoration: t
  } = e;
  E = t
}

function J(e) {
  let {
    profileEffect: t
  } = e;
  b = t
}

function $(e) {
  let {
    banner: t
  } = e;
  y = t
}

function ee(e) {
  let {
    banner: t,
    themeColors: n,
    avatarDecoration: r,
    displayNameStyles: i
  } = e;
  y = t, h = n, E = r, O = i
}

function et() {
  r = true
}

function en() {
  w = {}
}

function er() {
  ei(), ea(), es(), el(), w = {}
}

function ei() {
  r = true, i = true, a = true, o = true, s = true, m = true
}

function ea() {
  l = true, c = true, u = true, d = true, f = true, o = true
}

function eo() {
  g = true, E = true, b = true, y = true, h = true, O = true
}

function es() {
  p = true
}

function el() {
  _ = true
}

function ec() {
  er(), eo(), x()
}
class eu extends(v = Chunk442837.ZP.Store) {
  getFormState() {
    return R
  }
  getErrors() {
    return w
  }
  showNotice() {
    return true !== r || true !== l || true !== c || true !== u || true !== d || true !== f || true !== a || true !== o || true !== i || true !== s || true !== p || true !== _ || true !== m
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
      pendingAvatarDecoration: a,
      pendingProfileEffect: o,
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
P(eu, "displayName", "UserSettingsAccountStore");
let ed = new eu(Chunk570140.Z, {
  USER_SETTINGS_ACCOUNT_INIT: D,
  USER_SETTINGS_MODAL_INIT: D,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: D,
  USER_SETTINGS_MODAL_SET_SECTION: M,
  USER_SETTINGS_ACCOUNT_CLOSE: x,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: ec,
  USER_SETTINGS_ACCOUNT_SUBMIT: L,
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: j,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: k,
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: U,
  USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: G,
  USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM: Z,
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: B,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: F,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: V,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: H,
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: Y,
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: W,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: X,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: Q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: J,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: $,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: q,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: ee,
  USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: K,
  USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: z,
  USER_SETTINGS_CLEAR_ERRORS: en,
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: ei,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: ea,
  USER_SETTINGS_RESET_ALL_PENDING: er,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: eo,
  USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: es,
  USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: el,
  LOGOUT: et
})