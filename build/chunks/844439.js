/** Chunk was on web.js **/
/** chunk id: 844439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => d,
  ZP: () => O
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = "0";
var d = function(e) {
  return e[e.FETCHING = 0] = "FETCHING", e[e.FETCHED = 1] = "FETCHED", e[e.ERROR = 2] = "ERROR", e
}({});
let f = {},
  _ = {},
  p = {};

function h(e) {
  let {
    location: t,
    channelId: n,
    withCommands: r
  } = e;
  return "location:".concat(t, " channelId:").concat(u, " withCommands:").concat(r)
}

function m(e) {
  let {
    location: t,
    channelId: n,
    withCommands: r
  } = e;
  _ = c(s({}, _), {
    [h({
      location: t,
      channelId: n,
      withCommands: r
    })]: 0
  })
}

function g(e) {
  let {
    recommendations: t,
    location: n,
    channelId: r,
    withCommands: i
  } = e, a = h({
    location: n,
    channelId: r,
    withCommands: i
  });
  f = c(s({}, f), {
    [a]: t
  }), _ = c(s({}, _), {
    [a]: 1
  });
  let o = Date.now();
  p = c(s({}, p), {
    [a]: o
  })
}

function E(e) {
  let {
    location: t,
    channelId: n,
    withCommands: r
  } = e;
  _ = c(s({}, _), {
    [h({
      location: t,
      channelId: n,
      withCommands: r
    })]: 2
  })
}
let b = Object.freeze([]);
class y extends(r = Chunk442837.ZP.Store) {
  getLastFetchTimeMs(e) {
    let {
      location: t,
      channelId: n,
      withCommands: r
    } = e;
    return p[h({
      location: t,
      channelId: n,
      withCommands: r
    })]
  }
  getFetchState(e) {
    let {
      location: t,
      channelId: n,
      withCommands: r
    } = e;
    return _[h({
      location: t,
      channelId: n,
      withCommands: r
    })]
  }
  getRecommendations(e) {
    var t;
    let {
      location: n,
      channelId: r,
      withCommands: i
    } = e;
    return null != (t = f[h({
      location: n,
      channelId: r,
      withCommands: i
    })]) ? t : b
  }
}
o(y, "displayName", true);
let O = new y(Chunk570140.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: m,
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: g,
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: E
})