/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  C: () => b,
  Z: () => d
});
var r, i = n(442837),
  o = n(570140),
  a = n(865427);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  p = null,
  _ = {};

function h() {
  0 === f && (f = 1, (0, a.Ce)().then(e => {
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
  f = 2, p = t
}

function g(e) {
  if (e in _) return;
  let t = (0, a.r4)(e);
  if (null == t) {
    _ = u(l({}, _), {
      [e]: {
        url: e,
        state: 3
      }
    });
    return
  }
  _ = u(l({}, _), {
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
  _ = u(l({}, _), {
    [t]: u(l({}, _[t]), {
      state: r,
      override: n
    })
  })
}
class v extends(r = i.ZP.Store) {
  getCurrentBuildOverride() {
    return h(), {
      state: f,
      overrides: p
    }
  }
  getBuildOverride(e) {
    return g(e), _[e]
  }
  getBuildOverrides() {
    return _
  }
}
s(v, "displayName", "BuildOverrideStore");
let b = new v(o.Z, {
  BUILD_OVERRIDE_RESOLVED: E,
  CURRENT_BUILD_OVERRIDE_RESOLVED: m
})