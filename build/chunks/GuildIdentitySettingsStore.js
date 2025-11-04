/** Chunk was on web.js **/
/** chunk id: 778825, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, _, p;
require.d(exports, {
  Z: () => V
});
var h, Chunk979554 = require("./979554.js"),
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

function I(e) {
  _ = e.guild, O = b.QZA.OPEN, v = {}, p = e.source
}

function T() {
  O = Chunk981631.QZA.CLOSED, v = {}, p = true
}

function S() {
  O = Chunk981631.QZA.SUBMITTING, v = {}
}

function A(e) {
  _ = e.guild, v = {}
}

function C(e) {
  var t;
  if (O !== b.QZA.SUBMITTING) returnfalse;
  O = b.QZA.OPEN, v = null != (t = e.errors) ? t : {}
}

function N(e) {
  O = b.QZA.OPEN, v = e.errors
}

function R(e) {
  let {
    avatar: t
  } = e;
  r = t
}

function P(e) {
  let {
    item: t
  } = e;
  t.type === m.Z.AVATAR_DECORATION ? i = t.value : t.type === m.Z.PROFILE_EFFECT ? o = t.value : t.type === m.Z.NAMEPLATE && (a = t.value)
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

function j(e) {
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

function B() {
  v = {}
}

function Z() {
  k(), T()
}
class F extends(h = Chunk442837.ZP.Store) {
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
    return _
  }
  getSource() {
    return p
  }
}
y(F, "displayName", "GuildIdentitySettingsStore");
let V = new F(Chunk570140.Z, {
  GUILD_IDENTITY_SETTINGS_INIT: I,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: Z,
  GUILD_IDENTITY_SETTINGS_SET_GUILD: A,
  GUILD_IDENTITY_SETTINGS_SUBMIT: S,
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: C,
  USER_PROFILE_UPDATE_FAILURE: N,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: R,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM: P,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: j,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: w,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: D,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: x,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: M,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: U,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: k,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: k,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: B
})