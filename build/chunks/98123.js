/** Chunk was on web.js **/
/** chunk id: 98123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JG: () => _,
  Jt: () => d,
  T3: () => m,
  VG: () => p,
  o8: () => h
}), require("./388685.js"), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk123314 = require("./123314.js"),
  Chunk933174 = require("./933174.js"),
  Chunk761699 = require("./761699.js");

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
  return e.Loading = "loading", e.Loaded = "loaded", e
}({});
let f = (0, Chunk933174.U)(() => ({
  riveAssetCache: new Map,
  riveOverrideCache: {}
}));

function p(e) {
  let t = h(e),
    n = f(t => null == e ? null : t.riveAssetCache.get(e));
  return ((0, r.useEffect)(() => {
    if (null == e || null != t || f.getState().riveAssetCache.has(e)) return;
    let n = new i.RiveFile({
        src: e
      }),
      r = () => {
        n.init(), n.on(i.EventType.Load, () => {
          let t = {
            status: "loaded",
            buffer: n.buffer
          };
          f.setState(n => ({
            riveAssetCache: n.riveAssetCache.set(e, t)
          }))
        }), n.on(i.EventType.LoadError, t => {
          console.error("Rive file load error", e, t)
        })
      };
    (0, o.f)(r)
  }, [e, t]), null != t) ? {
    status: "loaded",
    buffer: t
  } : null != n ? n : {
    status: "loading",
    buffer: null
  }
}

function _(e, t) {
  let n = f.getState().riveOverrideCache;
  f.setState({
    riveOverrideCache: u(l({}, n), {
      [e]: t
    })
  })
}

function h(e) {
  let t = f(e => e.riveOverrideCache);
  return null == e ? null : t[e]
}

function m(e) {
  return null != f(e => e.riveOverrideCache)[e]
}