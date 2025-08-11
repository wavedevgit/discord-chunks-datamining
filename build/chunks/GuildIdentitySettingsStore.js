/** Chunk was on web.js **/
/** chunk id: 778825, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o, a, s, l, c, u, d, f, _;
require.d(exports, {
  Z: () => F
});
var p, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = Chunk981631.QZA.CLOSED,
  y = {};

function O(e) {
  f = e.guild, b = g.QZA.OPEN, y = {}, _ = e.source
}

function v() {
  b = Chunk981631.QZA.CLOSED, y = {}, _ = true
}

function I() {
  b = Chunk981631.QZA.SUBMITTING, y = {}
}

function T(e) {
  f = e.guild, y = {}
}

function S(e) {
  var t;
  if (b !== g.QZA.SUBMITTING) returnfalse;
  b = g.QZA.OPEN, y = null != (t = e.errors) ? t : {}
}

function A(e) {
  b = g.QZA.OPEN, y = e.errors
}

function N(e) {
  let {
    avatar: t
  } = e;
  r = t
}

function C(e) {
  let {
    avatarDecoration: t
  } = e;
  i = t
}

function R(e) {
  let {
    profileEffectId: t
  } = e;
  a = t
}

function P(e) {
  let {
    banner: t
  } = e;
  s = t
}

function w(e) {
  let {
    bio: t
  } = e;
  l = t
}

function D(e) {
  let {
    pronouns: t
  } = e;
  c = t
}

function L(e) {
  let {
    nickname: t
  } = e;
  u = t
}

function x(e) {
  let {
    themeColors: t
  } = e;
  d = t
}

function M(e) {
  let {
    nameplate: t
  } = e;
  o = t
}

function k() {
  j(), U(), y = {}, b = Chunk981631.QZA.OPEN
}

function j() {
  r = true, u = true, i = true, o = true
}

function U() {
  s = true, l = true, c = true, d = true, a = true
}

function G() {
  y = {}
}

function B() {
  k(), v()
}
class Z extends(p = Chunk442837.ZP.Store) {
  getFormState() {
    return b
  }
  getErrors() {
    return y
  }
  showNotice() {
    return true !== r || true !== i || true !== a || true !== s || true !== l || true !== c || true !== u || true !== d || true !== o
  }
  getIsSubmitDisabled() {
    return true !== l && l.length > Chunk981631.tPV
  }
  getPendingAvatar() {
    return r
  }
  getPendingAvatarDecoration() {
    return i
  }
  getPendingProfileEffectId() {
    return a
  }
  getPendingBanner() {
    return s
  }
  getPendingBio() {
    return l
  }
  getPendingNickname() {
    return u
  }
  getPendingPronouns() {
    return c
  }
  getPendingAccentColor() {
    return u
  }
  getPendingThemeColors() {
    return d
  }
  getPendingNameplate() {
    return o
  }
  getAllPending() {
    return {
      pendingAvatar: r,
      pendingAvatarDecoration: i,
      pendingProfileEffectId: a,
      pendingBanner: s,
      pendingBio: l,
      pendingPronouns: c,
      pendingNickname: u,
      pendingThemeColors: d,
      pendingNameplate: o
    }
  }
  getGuild() {
    return f
  }
  getSource() {
    return _
  }
}
E(Z, "displayName", "GuildIdentitySettingsStore");
let F = new Z(Chunk570140.Z, {
  GUILD_IDENTITY_SETTINGS_INIT: O,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: B,
  GUILD_IDENTITY_SETTINGS_SET_GUILD: T,
  GUILD_IDENTITY_SETTINGS_SUBMIT: I,
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: S,
  USER_PROFILE_UPDATE_FAILURE: A,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: N,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: C,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NAMEPLATE: M,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: R,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: P,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: w,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: D,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: x,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: j,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: U,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: k,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: k,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: G
})