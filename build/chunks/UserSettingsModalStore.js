/** Chunk was on web.js **/
/** chunk id: 663389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
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
  p = {},
  _ = {},
  m = null,
  h = null,
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
  if (null == a) return S();
  d = null != (t = e.section) ? t : d, null != e.subsection && null != d && (f[d] = e.subsection), null != e.scrollPosition && null != d && (p[d] = e.scrollPosition), g = !!e.openWithoutBackstack, u = s.QZA.OPEN, _ = {}, h = c({}, m = {
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

function S() {
  u = Chunk981631.QZA.CLOSED, m = null, h = null, d = null, f = {}, p = {}, E = null, b = [], y = null
}

function I(e) {
  var t;
  d = e.section, E = null, b = null != (t = e.analyticsLocations) ? t : [], null != e.subsection && (f[d] = e.subsection)
}

function T(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete f[t] : null != d && delete f[d]
}

function C(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete p[t] : null != d && delete p[d]
}

function A(e) {
  let {
    settings: t
  } = e;
  null == h && (h = {});
  let n = h[s.oAB.ACCOUNT];
  h[s.oAB.ACCOUNT] = c({}, n, t)
}

function N() {
  u = Chunk981631.QZA.SUBMITTING
}

function P() {
  let e = Chunk594174.default.getCurrentUser();
  R(), null != module && (h = c({}, m = {
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

function R() {
  u = Chunk981631.QZA.OPEN, _ = {}
}

function w(e) {
  var t;
  if (u !== s.QZA.SUBMITTING) returnfalse;
  u = s.QZA.OPEN, d = s.oAB.ACCOUNT, _ = null != (t = e.errors) ? t : {}
}
class D extends(r = Chunk442837.ZP.Store) {
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
    return null != d ? p[d] : null
  }
  getAnalyticsLocation() {
    return E
  }
  getAnalyticsLocations() {
    return b
  }
  getErrors() {
    return _
  }
  getSubmitting() {
    return u === Chunk981631.QZA.SUBMITTING
  }
  getSettings() {
    return h
  }
  getOpenWithoutBackstack() {
    return g
  }
  getSearchParams() {
    return y
  }
}
l(D, "displayName", "UserSettingsModalStore");
let x = new D(Chunk570140.Z, {
  USER_SETTINGS_MODAL_OPEN: O,
  USER_SETTINGS_MODAL_INIT: v,
  USER_SETTINGS_MODAL_CLOSE: S,
  LOGOUT: S,
  USER_SETTINGS_MODAL_SUBMIT: N,
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: w,
  USER_SETTINGS_MODAL_SET_SECTION: I,
  USER_SETTINGS_MODAL_CLEAR_SUBSECTION: T,
  USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: C,
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: A,
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: R,
  USER_SETTINGS_MODAL_RESET: P
})