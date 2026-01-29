/** Chunk was on web.js **/
/** chunk id: 836602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => X
});
var r, Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = {},
  p = {},
  _ = {},
  h = {},
  m = p,
  g = Chunk652215.XlH.CLOSED,
  E = {};

function y() {
  g = s.XlH.OPEN, E = {}
}

function b() {
  g = s.XlH.CLOSED, E = {}
}

function O() {
  g = s.XlH.SUBMITTING, E = {}
}

function v(e) {
  let {
    guildId: t,
    errors: n
  } = e;
  if (g !== s.XlH.SUBMITTING) returnfalse;
  g = s.XlH.OPEN, E[null != t ? t : s.ME] = null != n ? n : _
}

function A(e) {
  let {
    section: t
  } = e;
  if (t !== s.nc_.ACCOUNT) returnfalse;
  g = s.XlH.OPEN, E = {}
}

function I(e) {
  let {
    guildId: t,
    avatar: n
  } = e;
  h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingAvatar: n
  }), m = d(c({}, m), {
    tryItOutAvatar: true
  })
}

function S(e) {
  let {
    globalName: t
  } = e;
  h[s.ME] = d(c({}, h[s.ME]), {
    pendingGlobalName: t
  })
}

function T(e) {
  let {
    legacyUsernameDisabled: t
  } = e;
  h[s.ME] = d(c({}, h[s.ME]), {
    pendingLegacyUsernameDisabled: t
  })
}

function C(e) {
  let {
    guildId: t,
    item: n
  } = e;
  n.type === i.R.AVATAR_DECORATION ? h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingAvatarDecoration: n.value
  }) : n.type === i.R.PROFILE_EFFECT ? h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingProfileEffect: n.value
  }) : n.type === i.R.NAMEPLATE && (h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingNameplate: n.value
  }))
}

function N(e) {
  let {
    guildId: t,
    banner: n
  } = e;
  h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingBanner: n
  })
}

function w(e) {
  let {
    guildId: t,
    bio: n
  } = e;
  h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingBio: n
  })
}

function R(e) {
  let {
    guildId: t,
    pronouns: n
  } = e;
  h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingPronouns: n
  })
}

function P(e) {
  let {
    color: t
  } = e;
  h[s.ME] = d(c({}, h[s.ME]), {
    pendingAccentColor: t
  })
}

function D(e) {
  let {
    guildId: t,
    themeColors: n
  } = e;
  h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingThemeColors: n
  })
}

function L(e) {
  let {
    primaryGuildId: t
  } = e;
  h[s.ME] = d(c({}, h[s.ME]), {
    pendingPrimaryGuildId: t
  })
}

function x(e) {
  let {
    guildId: t,
    displayNameStyles: n
  } = e;
  h[null != t ? t : s.ME] = d(c({}, h[null != t ? t : s.ME]), {
    pendingDisplayNameStyles: n
  })
}

function M(e) {
  let {
    themeColors: t
  } = e;
  m = d(c({}, m), {
    tryItOutThemeColors: t
  })
}

function j(e) {
  let {
    avatar: t
  } = e;
  m = d(c({}, m), {
    tryItOutAvatar: t
  })
}

function k(e) {
  let {
    avatarDecoration: t
  } = e;
  m = d(c({}, m), {
    tryItOutAvatarDecoration: t
  })
}

function U(e) {
  let {
    profileEffect: t
  } = e;
  m = d(c({}, m), {
    tryItOutProfileEffect: t
  })
}

function G(e) {
  let {
    banner: t
  } = e;
  m = d(c({}, m), {
    tryItOutBanner: t
  })
}

function F(e) {
  let {
    displayNameStyles: t
  } = e;
  m = d(c({}, m), {
    tryItOutDisplayNameStyles: t
  })
}

function V(e) {
  let {
    banner: t,
    themeColors: n,
    avatarDecoration: r,
    displayNameStyles: i
  } = e;
  m = d(c({}, m), {
    tryItOutBanner: t,
    tryItOutThemeColors: n,
    tryItOutAvatarDecoration: r,
    tryItOutDisplayNameStyles: i
  })
}

function B(e) {
  let {
    guildId: t
  } = e;
  E[null != t ? t : s.ME] = {}
}

function H(e) {
  let {
    guildId: t
  } = e;
  Y({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES",
    guildId: t
  }), W({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES",
    guildId: t
  }), z({
    type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED"
  }), q({
    type: "USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES"
  }), E[null != t ? t : s.ME] = {}
}

function Y(e) {
  var t;
  let {
    guildId: n
  } = e;
  if (0 === Object.keys(null != (t = h[null != n ? n : s.ME]) ? t : {}).length) returnfalse;
  h[null != n ? n : s.ME] = d(c({}, h[null != n ? n : s.ME]), {
    pendingGlobalName: true,
    pendingDisplayNameStyles: true,
    pendingAvatar: true,
    pendingAvatarDecoration: true,
    pendingNameplate: true,
    pendingProfileEffect: true
  })
}

function W(e) {
  var t;
  let {
    guildId: n
  } = e;
  if (0 === Object.keys(null != (t = h[null != n ? n : s.ME]) ? t : {}).length) returnfalse;
  h[null != n ? n : s.ME] = d(c({}, h[null != n ? n : s.ME]), {
    pendingPronouns: true,
    pendingProfileEffect: true,
    pendingBanner: true,
    pendingAccentColor: true,
    pendingThemeColors: true,
    pendingBio: true
  })
}

function K(e) {
  m = p
}

function z(e) {
  var t, n;
  if ((null == (n = null != (t = h[s.ME]) ? t : {}) ? true : n.pendingLegacyUsernameDisabled) === true) returnfalse;
  h[s.ME] = d(c({}, h[s.ME]), {
    pendingLegacyUsernameDisabled: true
  })
}

function q(e) {
  var t, n;
  if ((null == (n = null != (t = h[s.ME]) ? t : {}) ? true : n.pendingPrimaryGuildId) === true) returnfalse;
  h[s.ME] = d(c({}, h[s.ME]), {
    pendingPrimaryGuildId: true
  })
}

function Z() {
  H({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  }), K({
    type: "USER_SETTINGS_RESET_ALL_TRY_IT_OUT"
  }), b()
}
class Q extends(r = Chunk311907.Ay.Store) {
  getFormState() {
    return g
  }
  getErrors(e) {
    var t;
    return null != (t = E[null != e ? e : s.ME]) ? t : _
  }
  getPendingChanges(e) {
    var t;
    return null != (t = h[null != e ? e : s.ME]) ? t : f
  }
  getTryItOutChanges() {
    return m
  }
  showNotice(e) {
    return Object.values(this.getPendingChanges(e)).some(e => true !== e)
  }
  canSubmit(e) {
    let t = this.getPendingChanges(e);
    return true === t.pendingBio || !(t.pendingBio.length > s.NA2)
  }
}
l(Q, "displayName", "UserProfileSettingsStore");
let X = new Q(Chunk73153.h, {
  USER_SETTINGS_ACCOUNT_INIT: y,
  USER_SETTINGS_MODAL_INIT: y,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: y,
  USER_SETTINGS_MODAL_SET_SECTION: A,
  USER_SETTINGS_ACCOUNT_CLOSE: b,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: Z,
  USER_SETTINGS_ACCOUNT_SUBMIT: O,
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: v,
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: I,
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: S,
  USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: T,
  USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM: C,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: N,
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: w,
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: R,
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: P,
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: D,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: j,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: k,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: U,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: G,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: M,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: F,
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: V,
  USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: L,
  USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: x,
  USER_SETTINGS_CLEAR_ERRORS: B,
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: Y,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: W,
  USER_SETTINGS_RESET_ALL_PENDING: H,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: K,
  USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: z,
  USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: q,
  LOGOUT: Z
})