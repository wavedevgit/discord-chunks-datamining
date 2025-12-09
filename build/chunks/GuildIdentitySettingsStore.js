/** Chunk was on web.js **/
/** chunk id: 778825, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, p, _;
require.d(exports, {
  Z: () => V
});
var m, Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = Chunk981631.QZA.CLOSED,
  v = {};

function S(e) {
  p = e.guild, O = b.QZA.OPEN, v = {}, _ = e.source
}

function I() {
  O = Chunk981631.QZA.CLOSED, v = {}, _ = true
}

function T() {
  O = Chunk981631.QZA.SUBMITTING, v = {}
}

function A(e) {
  p = e.guild, v = {}
}

function C(e) {
  var t;
  if (O !== b.QZA.SUBMITTING) returnfalse;
  O = b.QZA.OPEN, v = null != (t = e.errors) ? t : {}
}

function N(e) {
  O = b.QZA.OPEN, v = e.errors
}

function P(e) {
  let {
    avatar: t
  } = e;
  r = t
}

function R(e) {
  let {
    item: t
  } = e;
  t.type === h.Z.AVATAR_DECORATION ? i = t.value : t.type === h.Z.PROFILE_EFFECT ? o = t.value : t.type === h.Z.NAMEPLATE && (a = t.value)
}

function D(e) {
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

function x(e) {
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

function j(e) {
  let {
    themeColors: t
  } = e;
  d = t
}

function M(e) {
  let {
    displayNameStyles: t
  } = e;
  f = t
}

function k() {
  U(), G(), v = {}, O = Chunk981631.QZA.OPEN
}

function U() {
  r = true, u = true, i = true, a = true, f = true
}

function G() {
  s = true, l = true, c = true, d = true, o = true
}

function Z() {
  v = {}
}

function B() {
  k(), I()
}
class F extends(m = Chunk442837.ZP.Store) {
  getFormState() {
    return O
  }
  getErrors() {
    return v
  }
  showNotice() {
    return true !== r || true !== i || true !== o || true !== s || true !== l || true !== c || true !== u || true !== d || true !== a || true !== f
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
  getPendingProfileEffect() {
    return o
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
    return a
  }
  getPendingDisplayNameStyles() {
    return f
  }
  getAllPending() {
    return {
      pendingAvatar: r,
      pendingAvatarDecoration: i,
      pendingProfileEffect: o,
      pendingBanner: s,
      pendingBio: l,
      pendingPronouns: c,
      pendingNickname: u,
      pendingThemeColors: d,
      pendingNameplate: a,
      pendingDisplayNameStyles: f
    }
  }
  getGuild() {
    return p
  }
  getSource() {
    return _
  }
}
y(F, "displayName", "GuildIdentitySettingsStore");
let V = new F(Chunk570140.Z, {
  GUILD_IDENTITY_SETTINGS_INIT: S,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: B,
  GUILD_IDENTITY_SETTINGS_SET_GUILD: A,
  GUILD_IDENTITY_SETTINGS_SUBMIT: T,
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: C,
  USER_PROFILE_UPDATE_FAILURE: N,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: P,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM: R,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: M,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: D,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: w,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: x,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: j,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: U,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: k,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: k,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: Z
})