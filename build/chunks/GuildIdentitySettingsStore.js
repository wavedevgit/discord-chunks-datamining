/** Chunk was on web.js **/
/** chunk id: 778825, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, _, p;
require.d(exports, {
  Z: () => H
});
var h, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = Chunk981631.QZA.CLOSED,
  O = {};

function v(e) {
  _ = e.guild, y = E.QZA.OPEN, O = {}, p = e.source
}

function I() {
  y = Chunk981631.QZA.CLOSED, O = {}, p = true
}

function T() {
  y = Chunk981631.QZA.SUBMITTING, O = {}
}

function S(e) {
  _ = e.guild, O = {}
}

function A(e) {
  var t;
  if (y !== E.QZA.SUBMITTING) returnfalse;
  y = E.QZA.OPEN, O = null != (t = e.errors) ? t : {}
}

function C(e) {
  y = E.QZA.OPEN, O = e.errors
}

function N(e) {
  let {
    avatar: t
  } = e;
  r = t
}

function R(e) {
  let {
    avatarDecoration: t
  } = e;
  i = t
}

function P(e) {
  let {
    profileEffect: t
  } = e;
  o = t
}

function w(e) {
  let {
    banner: t
  } = e;
  s = t
}

function D(e) {
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

function M(e) {
  let {
    themeColors: t
  } = e;
  d = t
}

function k(e) {
  let {
    nameplate: t
  } = e;
  a = t
}

function j(e) {
  let {
    displayNameStyles: t
  } = e;
  f = t
}

function U() {
  G(), B(), O = {}, y = Chunk981631.QZA.OPEN
}

function G() {
  r = true, u = true, i = true, a = true, f = true
}

function B() {
  s = true, l = true, c = true, d = true, o = true
}

function Z() {
  O = {}
}

function F() {
  U(), I()
}
class V extends(h = Chunk442837.ZP.Store) {
  getFormState() {
    return y
  }
  getErrors() {
    return O
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
    return _
  }
  getSource() {
    return p
  }
}
b(V, "displayName", "GuildIdentitySettingsStore");
let H = new V(Chunk570140.Z, {
  GUILD_IDENTITY_SETTINGS_INIT: v,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: F,
  GUILD_IDENTITY_SETTINGS_SET_GUILD: S,
  GUILD_IDENTITY_SETTINGS_SUBMIT: T,
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: A,
  USER_PROFILE_UPDATE_FAILURE: C,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: N,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: R,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: j,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NAMEPLATE: k,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT: P,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: w,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: D,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: x,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: M,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: G,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: B,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: U,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: U,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: Z
})