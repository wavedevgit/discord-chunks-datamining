/** Chunk was on web.js **/
/** chunk id: 304761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => y,
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk865427 = require("./865427.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var d = function(e) {
  return e[e.NotResolved = 0] = "NotResolved", e[e.Resolving = 1] = "Resolving", e[e.Resolved = 2] = "Resolved", e[e.Invalid = 3] = "Invalid", e
}({});
let f = 0,
  _ = null,
  p = {};

function h() {
  0 === f && (f = 1, (0, Chunk865427.Ce)().then(e => {
    o.Z.dispatch({
      type: "CURRENT_BUILD_OVERRIDE_RESOLVED",
      overrides: e
    })
  }))
}

function m(e) {
  let {
    overrides: t
  } = e;
  f = 2, _ = t
}

function g(e) {
  if (e in p) return;
  let t = (0, a.r4)(e);
  if (null == t) {
    p = u(l({}, p), {
      [e]: {
        url: e,
        state: 3
      }
    });
    return
  }
  p = u(l({}, p), {
    [e]: {
      url: e,
      validatedURL: t.url,
      payload: String(t.payload),
      state: 1
    }
  }), (0, a._I)(t.url).then(t => {
    o.Z.dispatch({
      type: "BUILD_OVERRIDE_RESOLVED",
      url: e,
      override: t
    })
  })
}

function E(e) {
  let {
    url: t,
    override: n
  } = e, r = null == n ? 3 : 2;
  p = u(l({}, p), {
    [t]: u(l({}, p[t]), {
      state: r,
      override: n
    })
  })
}
class b extends(r = Chunk442837.ZP.Store) {
  getCurrentBuildOverride() {
    return h(), {
      state: f,
      overrides: _
    }
  }
  getBuildOverride(e) {
    return g(e), p[e]
  }
  getBuildOverrides() {
    return p
  }
}
s(b, "displayName", "BuildOverrideStore");
let y = new b(Chunk570140.Z, {
  BUILD_OVERRIDE_RESOLVED: E,
  CURRENT_BUILD_OVERRIDE_RESOLVED: m
})