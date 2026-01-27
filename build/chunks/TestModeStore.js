/** Chunk was on web.js **/
/** chunk id: 147964, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  A: () => T
}), require("./896048.js"), require("./142703.js");
var o, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk284016 = require("./284016.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk189081 = require("./189081.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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
  E = false;

function y() {
  a = null
}

function b() {
  r = null, i = null, g = new Set, m.applicationId = null, m.originURL = null, y()
}

function O(e) {
  let {
    applicationId: t
  } = e;
  g.add(t), a = null
}

function v(e) {
  let {
    applicationId: t,
    originURL: n
  } = e;
  r = t, i = n, g.delete(t), a = null, m.applicationId = t, m.originURL = n
}

function A(e) {
  let {
    applicationId: t,
    error: n
  } = e;
  g.delete(t), a = n
}

function I(e) {
  let {
    testModeApplicationId: t
  } = e;
  r = t
}
class S extends(o = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    r = (m = _({}, null != e ? e : h)).applicationId, i = m.originURL, this.waitFor(f.A, c.A, d.A), this.syncWith([d.A, c.A], () => true), f.A.whenInitialized(() => {
      E = true
    })
  }
  inTestModeForApplication(e) {
    return r === e
  }
  inTestModeForEmbeddedApplication(e) {
    return r === e && null != i
  }
  shouldDisplayTestMode(e) {
    return u.Q_.getSetting() && this.inTestModeForApplication(e)
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
    return a
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (E) return setImmediate(e), false
    })
  }
}
p(S, "displayName", "TestModeStore"), p(S, "persistKey", "TestModeStore");
let T = new S(Chunk73153.h, {
  DEVELOPER_TEST_MODE_AUTHORIZATION_START: O,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: v,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: A,
  OVERLAY_INITIALIZE: I,
  DEVELOPER_TEST_MODE_RESET_ERROR: y,
  LOGOUT: b,
  DEVELOPER_TEST_MODE_RESET: b
})