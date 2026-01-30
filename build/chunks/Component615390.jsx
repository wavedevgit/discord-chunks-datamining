/** Chunk was on 49559 **/
/** chunk id: 615390, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk694705 = require("./694705.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk681168 = require("./681168.jsx"),
  Chunk158611 = require("./158611.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    contentInventoryEntry: t,
    channel: n
  } = e, {
    parsedEntry: l
  } = (0, o.v)();
  return (0, r.jsx)(u.A, m(p({}, l), {
    entry: t,
    channel: n
  }))
}

function O(e) {
  let t = (0, c.jc)();
  a()(null != t, "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?");
  let {
    channelId: n
  } = t, l = (0, i.bG)([s.A], () => s.A.getChannel(n));
  return a()(null != l, "channel must be defined"), (0, r.jsx)(o.f, {
    location: d.Z.EMBED,
    entry: e.contentInventoryEntry,
    channel: l,
    errorFallback: null,
    children: (0, r.jsx)(f, m(p({}, e), {
      channel: l
    }))
  })
}