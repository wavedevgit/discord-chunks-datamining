/** Chunk was on web.js **/
/** chunk id: 663389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

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
let u = Chunk981631.QZA.CLOSED,
  d = null,
  f = {},
  _ = {},
  p = {},
  h = null,
  m = null,
  g = false,
  E = null,
  b = [],
  y = null;

function O(e) {
  v(e)
}

function v(e) {
  var t, n, r, i;
  let a = o.default.getCurrentUser();
  if (null == a) return I();
  d = null != (t = e.section) ? t : d, null != e.subsection && null != d && (f[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), g = !!e.openWithoutBackstack, u = s.QZA.OPEN, p = {}, m = c({}, h = {
    [s.oAB.ACCOUNT]: {
      userId: a.id,
      username: a.username,
      discriminator: a.discriminator,
      email: a.email,
      avatar: a.avatar,
      password: "",
      newPassword: null,
      claimed: a.isClaimed()
    }
  }), E = null != (n = e.analyticsLocation) ? n : null, b = null != (r = e.analyticsLocations) ? r : [], y = null != (i = e.searchParams) ? i : null
}

function I() {
  u = Chunk981631.QZA.CLOSED, h = null, m = null, d = null, f = {}, _ = {}, E = null, b = [], y = null
}

function T(e) {
  var t;
  d = e.section, E = null, b = null != (t = e.analyticsLocations) ? t : [], null != e.subsection && (f[d] = e.subsection)
}

function S(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete f[t] : null != d && delete f[d]
}

function A(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete _[t] : null != d && delete _[d]
}

function C(e) {
  let {
    settings: t
  } = e;
  null == m && (m = {});
  let n = m[s.oAB.ACCOUNT];
  m[s.oAB.ACCOUNT] = c({}, n, t)
}

function N() {
  u = Chunk981631.QZA.SUBMITTING
}

function R() {
  let e = Chunk594174.default.getCurrentUser();
  P(), null != module && (m = c({}, h = {
    [Chunk981631.oAB.ACCOUNT]: {
      userId: module.id,
      username: module.username,
      discriminator: module.discriminator,
      email: module.email,
      avatar: module.avatar,
      password: "",
      newPassword: null,
      claimed: module.isClaimed()
    }
  }))
}

function P() {
  u = Chunk981631.QZA.OPEN, p = {}
}

function D(e) {
  var t;
  if (u !== s.QZA.SUBMITTING) returnfalse;
  u = s.QZA.OPEN, d = s.oAB.ACCOUNT, p = null != (t = e.errors) ? t : {}
}
class w extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  getSection() {
    return d
  }
  getSubsection() {
    return null != d ? f[d] : null
  }
  getScrollPosition() {
    return null != d ? _[d] : null
  }
  getAnalyticsLocation() {
    return E
  }
  getAnalyticsLocations() {
    return b
  }
  getErrors() {
    return p
  }
  getSubmitting() {
    return u === Chunk981631.QZA.SUBMITTING
  }
  getSettings() {
    return m
  }
  getOpenWithoutBackstack() {
    return g
  }
  getSearchParams() {
    return y
  }
}
l(w, "displayName", "UserSettingsModalStore");
let L = new w(Chunk570140.Z, {
  USER_SETTINGS_MODAL_OPEN: O,
  USER_SETTINGS_MODAL_INIT: v,
  USER_SETTINGS_MODAL_CLOSE: I,
  LOGOUT: I,
  USER_SETTINGS_MODAL_SUBMIT: N,
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: D,
  USER_SETTINGS_MODAL_SET_SECTION: T,
  USER_SETTINGS_MODAL_CLEAR_SUBSECTION: S,
  USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: A,
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: C,
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: P,
  USER_SETTINGS_MODAL_RESET: R
})