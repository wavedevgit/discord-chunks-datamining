/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
let r, i, o;
n.d(t, {
  Z: () => N
}), n(47120), n(177593);
var a, s = n(442837),
  l = n(570140),
  c = n(238514),
  u = n(695346),
  d = n(581883),
  f = n(283595);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let h = {
    applicationId: null,
    originURL: null
  },
  m = h,
  g = new Set,
  E = !1;

function v() {
  o = null
}

function b() {
  r = null, i = null, g = new Set, m.applicationId = null, m.originURL = null, v()
}

function y(e) {
  let {
    applicationId: t
  } = e;
  g.add(t), o = null
}

function O(e) {
  let {
    applicationId: t,
    originURL: n
  } = e;
  r = t, i = n, g.delete(t), o = null, m.applicationId = t, m.originURL = n
}

function S(e) {
  let {
    applicationId: t,
    error: n
  } = e;
  g.delete(t), o = n
}

function I(e) {
  let {
    testModeApplicationId: t
  } = e;
  r = t
}
class T extends(a = s.ZP.PersistedStore) {
  initialize(e) {
    r = (m = _({}, null != e ? e : h)).applicationId, i = m.originURL, this.waitFor(d.Z, c.Z), this.syncWith([d.Z, c.Z], () => !0), f.Z.whenInitialized(() => {
      E = !0
    })
  }
  inTestModeForApplication(e) {
    return r === e
  }
  inTestModeForEmbeddedApplication(e) {
    return r === e && null != i
  }
  shouldDisplayTestMode(e) {
    return u.Sb.getSetting() && this.inTestModeForApplication(e)
  }
  getState() {
    return m
  }
  get isTestMode() {
    return null != r
  }
  get isFetchingAuthorization() {
    return g.size > 0
  }
  get testModeEmbeddedApplicationId() {
    return null != i ? r : null
  }
  get testModeApplicationId() {
    return r
  }
  get testModeOriginURL() {
    return i
  }
  get error() {
    return o
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (E) return setImmediate(e), !1
    })
  }
}
p(T, "displayName", "TestModeStore"), p(T, "persistKey", "TestModeStore");
let N = new T(l.Z, {
  DEVELOPER_TEST_MODE_AUTHORIZATION_START: y,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: O,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: S,
  OVERLAY_INITIALIZE: I,
  DEVELOPER_TEST_MODE_RESET_ERROR: v,
  LOGOUT: b,
  DEVELOPER_TEST_MODE_RESET: b
})