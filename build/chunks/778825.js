/** Chunk was on web.js **/
"use strict";
let r, i, o, a, s, l, c, u, d, f, _, p;
n.d(t, {
  Z: () => Z
});
var h, g = n(442837),
  m = n(570140),
  E = n(981631);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let b = E.QZA.CLOSED,
  y = {};

function O(e) {
  f = e.guild, b = E.QZA.OPEN, y = {}, _ = e.source, p = e.analyticsLocations
}

function S() {
  b = E.QZA.CLOSED, y = {}, _ = void 0, p = []
}

function I() {
  b = E.QZA.SUBMITTING, y = {}
}

function T(e) {
  f = e.guild, y = {}
}

function N(e) {
  var t;
  if (b !== E.QZA.SUBMITTING) return !1;
  b = E.QZA.OPEN, y = null !== (t = e.errors) && void 0 !== t ? t : {}
}

function A(e) {
  b = E.QZA.OPEN, y = e.errors
}

function C(e) {
  let {
    avatar: t
  } = e;
  r = t
}

function R(e) {
  let {
    avatar: t
  } = e;
  i = t
}

function P(e) {
  let {
    avatarDecoration: t
  } = e;
  o = t
}

function D(e) {
  let {
    profileEffectId: t
  } = e;
  a = t
}

function w(e) {
  let {
    banner: t
  } = e;
  s = t
}

function L(e) {
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

function M(e) {
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

function k() {
  U(), G(), y = {}, b = E.QZA.OPEN
}

function U() {
  r = void 0, i = void 0, u = void 0, o = void 0
}

function G() {
  s = void 0, l = void 0, c = void 0, d = void 0, a = void 0
}

function B() {
  y = {}
}

function F() {
  k(), S()
}
class V extends(h = g.ZP.Store) {
  getFormState() {
    return b
  }
  getErrors() {
    return y
  }
  showNotice() {
    return void 0 !== r || void 0 !== i || void 0 !== o || void 0 !== a || void 0 !== s || void 0 !== l || void 0 !== c || void 0 !== u || void 0 !== d
  }
  getIsSubmitDisabled() {
    return void 0 !== l && l.length > E.tPV
  }
  getPendingAvatar() {
    return r
  }
  getPendingAvatarV2() {
    return i
  }
  getPendingAvatarDecoration() {
    return o
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
  getAllPending() {
    return {
      pendingAvatar: r,
      pendingAvatarV2: i,
      pendingAvatarDecoration: o,
      pendingProfileEffectId: a,
      pendingBanner: s,
      pendingBio: l,
      pendingPronouns: c,
      pendingNickname: u,
      pendingThemeColors: d
    }
  }
  getGuild() {
    return f
  }
  getSource() {
    return _
  }
  getAnalyticsLocations() {
    return p
  }
}
v(V, "displayName", "GuildIdentitySettingsStore");
let Z = new V(m.Z, {
  GUILD_IDENTITY_SETTINGS_INIT: O,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: F,
  GUILD_IDENTITY_SETTINGS_SET_GUILD: T,
  GUILD_IDENTITY_SETTINGS_SUBMIT: I,
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: N,
  USER_PROFILE_UPDATE_FAILURE: A,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: C,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_V2: R,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: P,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: D,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: w,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: L,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: x,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: M,
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: j,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: U,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: k,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: k,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: B
})