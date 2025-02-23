/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  M: () => f,
  Z: () => I
});
var r, i = n(392711),
  o = n.n(i),
  a = n(442837),
  s = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
var f = function(e) {
  return e[e.FETCHING = 0] = "FETCHING", e[e.FETCHED = 1] = "FETCHED", e[e.ERROR = 2] = "ERROR", e
}({});
let p = [],
  _ = {},
  h = {},
  m = {};

function g(e) {
  let {
    surface: t,
    activeState: n
  } = e;
  return "surface:".concat(t, " activeState:").concat(n)
}

function E(e) {
  let {
    surface: t,
    activeState: n
  } = e;
  h = d(c({}, h), {
    [g({
      surface: t,
      activeState: n
    })]: 0
  })
}

function v(e) {
  return o().sortBy(e, ["position", "id"])
}

function b(e) {
  return o().sortBy(e, ["position", "id"])
}

function y(e) {
  let {
    collections: t,
    surface: n,
    activeState: r
  } = e, i = g({
    surface: n,
    activeState: r
  }), o = v(t.map(e => (e.application_directory_collection_items = b(e.application_directory_collection_items), e)));
  _ = d(c({}, _), {
    [i]: o
  }), h = d(c({}, h), {
    [i]: 1
  });
  let a = Date.now();
  m = d(c({}, m), {
    [i]: a
  })
}

function O(e) {
  let {
    surface: t,
    activeState: n
  } = e;
  h = d(c({}, h), {
    [g({
      surface: t,
      activeState: n
    })]: 2
  })
}
class S extends(r = a.ZP.Store) {
  getLastFetchTimeMs(e) {
    let {
      surface: t,
      activeState: n
    } = e;
    return m[g({
      surface: t,
      activeState: n
    })]
  }
  getFetchState(e) {
    let {
      surface: t,
      activeState: n
    } = e;
    return h[g({
      surface: t,
      activeState: n
    })]
  }
  getCollections(e) {
    var t;
    let {
      surface: n,
      activeState: r
    } = e;
    return null !== (t = _[g({
      surface: n,
      activeState: r
    })]) && void 0 !== t ? t : p
  }
}
l(S, "displayName", void 0);
let I = new S(s.Z, {
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS: E,
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: y,
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: O
})