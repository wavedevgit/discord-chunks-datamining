/** Chunk was on web.js **/
/** chunk id: 222692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk430452 = require("./430452.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

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

function f(e) {
  a.A.supports(o.O5.VIDEO) ? (0, i.mMO)(async () => {
    let {
      default: t
    } = await n.e("11487").then(n.bind(n, 792866));
    return n => (0, r.jsx)(t, d(c({}, n), {
      header: s.intl.string(s.t["8jSzSe"]),
      body: s.intl.string(s.t.bhqSWl),
      confirmText: s.intl.string(s.t.BddRzS),
      onConfirm: e
    }))
  }) : (0, i.mMO)(async () => {
    let {
      default: t
    } = await n.e("11487").then(n.bind(n, 792866));
    return a => (0, r.jsx)(t, d(c({}, a), {
      header: s.intl.string(s.t.XLw6FF),
      body: s.intl.string(s.t.wVjKGi),
      confirmText: s.intl.string(s.t["BK8LK+"]),
      onConfirm: () => {
        null == e || e(), (0, i.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
          return t => (0, r.jsx)(e, c({
            source: "Video unsupported browser"
          }, t))
        })
      }
    }))
  })
}