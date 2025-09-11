/** Chunk was on web.js **/
/** chunk id: 663389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
});
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = Chunk981631.QZA.CLOSED,
  _ = null,
  p = null,
  h = {},
  m = {},
  g = {},
  E = null,
  b = null,
  y = false,
  O = false,
  v = null,
  I = null,
  T = [],
  S = null,
  A = null;

function C(e) {
  y = true, N(e)
}

function N(e) {
  var t, n, r, i, a, o;
  let s = l.default.getCurrentUser();
  if (null == s) return R();
  p = null != (t = e.section) ? t : p, S = null != (n = e.section) ? n : p, null != e.subsection && null != p && (h[p] = e.subsection), null != e.scrollPosition && null != p && (m[p] = e.scrollPosition), O = !!e.openWithoutBackstack, f = c.QZA.OPEN, g = {}, b = d({}, E = {
    [c.oAB.ACCOUNT]: {
      userId: s.id,
      username: s.username,
      discriminator: s.discriminator,
      email: s.email,
      avatar: s.avatar,
      password: "",
      newPassword: null,
      claimed: s.isClaimed()
    }
  }), v = null != (r = e.onClose) ? r : null, I = null != (i = e.analyticsLocation) ? i : null, T = null != (a = e.analyticsLocations) ? a : [], A = null != (o = e.searchParams) ? o : null
}

function R() {
  f = Chunk981631.QZA.CLOSED, y = false, E = null, S = null, b = null, _ = null, p = null, h = {}, m = {}, v = null, I = null, T = [], A = null
}

function P(e) {
  var t;
  _ = p, p = e.section, I = null, T = null != (t = e.analyticsLocations) ? t : [], null != e.subsection && (h[p] = e.subsection)
}

function w(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete h[t] : null != p && delete h[p]
}

function D(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete m[t] : null != p && delete m[p]
}

function x(e) {
  let {
    settings: t
  } = e;
  null == b && (b = {});
  let n = b[c.oAB.ACCOUNT];
  b[c.oAB.ACCOUNT] = d({}, n, t)
}

function L() {
  f = Chunk981631.QZA.SUBMITTING
}

function j() {
  let e = Chunk594174.default.getCurrentUser();
  M(), null != module && (b = d({}, E = {
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

function M() {
  f = Chunk981631.QZA.OPEN, g = {}
}

function k(e) {
  var t;
  if (f !== c.QZA.SUBMITTING) returnfalse;
  f = c.QZA.OPEN, p = c.oAB.ACCOUNT, g = null != (t = e.errors) ? t : {}
}
class U extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  hasChanges() {
    return null != b && null != E && !!this.isOpen() && !a().isEqual(b, E)
  }
  isOpen() {
    return y
  }
  getPreviousSection() {
    return _
  }
  getSection() {
    return p
  }
  getSubsection() {
    return null != p ? h[p] : null
  }
  getScrollPosition() {
    return null != p ? m[p] : null
  }
  shouldOpenWithoutBackstack() {
    return O
  }
  getProps() {
    return {
      submitting: f === Chunk981631.QZA.SUBMITTING,
      section: p,
      subsection: null != p ? h[p] : null,
      scrollPosition: null != p ? m[p] : null,
      settings: b,
      errors: g,
      hasChanges: this.hasChanges(),
      openWithoutBackstack: O,
      analyticsLocation: I,
      analyticsLocations: T,
      initialSection: S,
      searchParams: A
    }
  }
  get onClose() {
    return v
  }
}
u(U, "displayName", "UserSettingsModalStore");
let G = new U(Chunk570140.Z, {
  USER_SETTINGS_MODAL_OPEN: C,
  USER_SETTINGS_MODAL_INIT: N,
  USER_SETTINGS_MODAL_CLOSE: R,
  LOGOUT: R,
  USER_SETTINGS_MODAL_SUBMIT: L,
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: k,
  USER_SETTINGS_MODAL_SET_SECTION: P,
  USER_SETTINGS_MODAL_CLEAR_SUBSECTION: w,
  USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: D,
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: x,
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
  USER_SETTINGS_MODAL_RESET: j
})