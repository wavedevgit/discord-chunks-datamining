/** Chunk was on web.js **/
/** chunk id: 628965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
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
let u = Chunk652215.XlH.CLOSED,
  d = null,
  f = {},
  p = {},
  _ = {},
  h = null,
  m = null,
  g = false,
  E = null,
  y = [],
  b = null;

function O(e) {
  v(e)
}

function v(e) {
  var t, n, r, i;
  let a = s.default.getCurrentUser();
  if (null == a) return A();
  d = null != (t = e.section) ? t : d, null != e.subsection && null != d && (f[d] = e.subsection), null != e.scrollPosition && null != d && (p[d] = e.scrollPosition), g = !!e.openWithoutBackstack, u = o.XlH.OPEN, _ = {}, m = c({}, h = {
    [o.nc_.ACCOUNT]: {
      userId: a.id,
      username: a.username,
      discriminator: a.discriminator,
      email: a.email,
      avatar: a.avatar,
      password: "",
      newPassword: null,
      claimed: a.isClaimed()
    }
  }), E = null != (n = e.analyticsLocation) ? n : null, y = null != (r = e.analyticsLocations) ? r : [], b = null != (i = e.searchParams) ? i : null
}

function A() {
  u = o.XlH.CLOSED, h = null, m = null, d = null, f = {}, p = {}, E = null, y = [], b = null
}

function I(e) {
  var t;
  d = e.section, E = null, y = null != (t = e.analyticsLocations) ? t : [], null != e.subsection && (f[d] = e.subsection)
}

function S(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete f[t] : null != d && delete f[d]
}

function T(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete p[t] : null != d && delete p[d]
}

function C(e) {
  let {
    settings: t
  } = e;
  null == m && (m = {});
  let n = m[o.nc_.ACCOUNT];
  m[o.nc_.ACCOUNT] = c({}, n, t)
}

function N() {
  u = o.XlH.SUBMITTING
}

function R() {
  let e = s.default.getCurrentUser();
  w(), null != e && (m = c({}, h = {
    [o.nc_.ACCOUNT]: {
      userId: e.id,
      username: e.username,
      discriminator: e.discriminator,
      email: e.email,
      avatar: e.avatar,
      password: "",
      newPassword: null,
      claimed: e.isClaimed()
    }
  }))
}

function w() {
  u = o.XlH.OPEN, _ = {}
}

function P(e) {
  var t;
  if (u !== o.XlH.SUBMITTING) returnfalse;
  u = o.XlH.OPEN, d = o.nc_.ACCOUNT, _ = null != (t = e.errors) ? t : {}
}
class D extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.default)
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
    return y
  }
  getErrors() {
    return _
  }
  getSubmitting() {
    return u === o.XlH.SUBMITTING
  }
  getSettings() {
    return m
  }
  getOpenWithoutBackstack() {
    return g
  }
  getSearchParams() {
    return b
  }
}
l(D, "displayName", "UserSettingsModalStore");
let x = new D(Chunk73153.h, {
  USER_SETTINGS_MODAL_OPEN: O,
  USER_SETTINGS_MODAL_INIT: v,
  USER_SETTINGS_MODAL_CLOSE: A,
  LOGOUT: A,
  USER_SETTINGS_MODAL_SUBMIT: N,
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: P,
  USER_SETTINGS_MODAL_SET_SECTION: I,
  USER_SETTINGS_MODAL_CLEAR_SUBSECTION: S,
  USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: T,
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: C,
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: w,
  USER_SETTINGS_MODAL_RESET: R
})