/** Chunk was on web.js **/
/** chunk id: 833336, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, p, _;
require.d(exports, {
  A: () => H
});
var h, Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = Chunk652215.XlH.CLOSED,
  v = {};

function A(e) {
  p = e.guild, O = y.XlH.OPEN, v = {}, _ = e.source
}

function I() {
  O = y.XlH.CLOSED, v = {}, _ = true
}

function S() {
  O = y.XlH.SUBMITTING, v = {}
}

function T(e) {
  p = e.guild, v = {}
}

function C(e) {
  var t;
  if (O !== y.XlH.SUBMITTING) returnfalse;
  O = y.XlH.OPEN, v = null != (t = e.errors) ? t : {}
}

function N(e) {
  O = y.XlH.OPEN, v = e.errors
}

function w(e) {
  let {
    avatar: t
  } = e;
  r = t
}

function R(e) {
  let {
    item: t
  } = e;
  t.type === m.R.AVATAR_DECORATION ? i = t.value : t.type === m.R.PROFILE_EFFECT ? o = t.value : t.type === m.R.NAMEPLATE && (a = t.value)
}

function P(e) {
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

function L(e) {
  let {
    pronouns: t
  } = e;
  c = t
}

function x(e) {
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
  U(), G(), v = {}, O = y.XlH.OPEN
}

function U() {
  r = true, u = true, i = true, a = true, f = true
}

function G() {
  s = true, l = true, c = true, d = true, o = true
}

function V() {
  v = {}
}

function F() {
  k(), I()
}
class B extends(h = Chunk311907.Ay.Store) {
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
    return true !== l && l.length > y.NA2
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
b(B, "displayName", "GuildIdentitySettingsStore");
let H = new B(Chunk73153.h, {
  GUILD_IDENTITY_SETTINGS_INIT: A,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: F,
  GUILD_IDENTITY_SETTINGS_SET_GUILD: T,
  GUILD_IDENTITY_SETTINGS_SUBMIT: S,
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: C,
  USER_PROFILE_UPDATE_FAILURE: N,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: w,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM: R,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: j,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: P,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: D,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: L,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: x,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: M,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: U,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: k,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: k,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: V
})