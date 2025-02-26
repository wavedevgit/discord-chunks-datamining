/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => G
});
var r, i = n(392711),
  o = n.n(i),
  a = n(442837),
  s = n(570140),
  l = n(594174),
  c = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let f = c.QZA.CLOSED,
  _ = null,
  p = null,
  h = {},
  g = {},
  m = {},
  E = null,
  v = null,
  b = !1,
  y = !1,
  O = null,
  S = null,
  I = [],
  T = null,
  N = null;

function A(e) {
  b = !0, C(e)
}

function C(e) {
  var t, n, r, i, o, a;
  let s = l.default.getCurrentUser();
  if (null == s) return R();
  p = null !== (t = e.section) && void 0 !== t ? t : p, T = null !== (n = e.section) && void 0 !== n ? n : p, null != e.subsection && null != p && (h[p] = e.subsection), null != e.scrollPosition && null != p && (g[p] = e.scrollPosition), y = !!e.openWithoutBackstack, f = c.QZA.OPEN, m = {}, v = d({}, E = {
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
  }), O = null !== (r = e.onClose) && void 0 !== r ? r : null, S = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, I = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [], N = null !== (a = e.impressionSource) && void 0 !== a ? a : null
}

function R() {
  f = c.QZA.CLOSED, b = !1, E = null, T = null, v = null, _ = null, p = null, h = {}, g = {}, O = null, S = null, I = [], N = null
}

function P(e) {
  var t;
  _ = p, p = e.section, S = null, I = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (h[p] = e.subsection)
}

function D(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete h[t] : null != p && delete h[p]
}

function w(e) {
  let {
    forSection: t
  } = e;
  null != t ? delete g[t] : null != p && delete g[p]
}

function L(e) {
  let {
    settings: t
  } = e;
  null == v && (v = {});
  let n = v[c.oAB.ACCOUNT];
  v[c.oAB.ACCOUNT] = d({}, n, t)
}

function x() {
  f = c.QZA.SUBMITTING
}

function M() {
  let e = l.default.getCurrentUser();
  k(), null != e && (v = d({}, E = {
    [c.oAB.ACCOUNT]: {
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

function k() {
  f = c.QZA.OPEN, m = {}
}

function j(e) {
  var t;
  if (f !== c.QZA.SUBMITTING) return !1;
  f = c.QZA.OPEN, p = c.oAB.ACCOUNT, m = null !== (t = e.errors) && void 0 !== t ? t : {}
}
class U extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(l.default)
  }
  hasChanges() {
    return null != v && null != E && !!this.isOpen() && !o().isEqual(v, E)
  }
  isOpen() {
    return b
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
    return null != p ? g[p] : null
  }
  shouldOpenWithoutBackstack() {
    return y
  }
  getProps() {
    return {
      submitting: f === c.QZA.SUBMITTING,
      section: p,
      subsection: null != p ? h[p] : null,
      scrollPosition: null != p ? g[p] : null,
      settings: v,
      errors: m,
      hasChanges: this.hasChanges(),
      openWithoutBackstack: y,
      analyticsLocation: S,
      analyticsLocations: I,
      initialSection: T,
      impressionSource: N
    }
  }
  get onClose() {
    return O
  }
}
u(U, "displayName", "UserSettingsModalStore");
let G = new U(s.Z, {
  USER_SETTINGS_MODAL_OPEN: A,
  USER_SETTINGS_MODAL_INIT: C,
  USER_SETTINGS_MODAL_CLOSE: R,
  LOGOUT: R,
  USER_SETTINGS_MODAL_SUBMIT: x,
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: j,
  USER_SETTINGS_MODAL_SET_SECTION: P,
  USER_SETTINGS_MODAL_CLEAR_SUBSECTION: D,
  USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: w,
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: L,
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: k,
  USER_SETTINGS_MODAL_RESET: M
})