/** Chunk was on 22878 **/
/** chunk id: 844439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => s,
  ZP: () => g
});
var r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
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
var s = ((r = {})[r.FETCHING = 0] = "FETCHING", r[r.FETCHED = 1] = "FETCHED", r[r.ERROR = 2] = "ERROR", r);
let d = {},
  m = {},
  p = {};

function f(e) {
  let {
    location: t,
    channelId: n,
    withCommands: r
  } = e;
  return "location:".concat(t, " channelId:").concat("0", " withCommands:").concat(r)
}
let b = Object.freeze([]);
class O extends(l = Chunk442837.ZP.Store) {
  getLastFetchTimeMs(e) {
    let {
      location: t,
      channelId: n,
      withCommands: r
    } = e;
    return p[f({
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
    return m[f({
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
      withCommands: l
    } = e;
    return null != (t = d[f({
      location: n,
      channelId: r,
      withCommands: l
    })]) ? t : b
  }
}
a(O, "displayName", true);
let g = new O(Chunk570140.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
    let {
      location: t,
      channelId: n,
      withCommands: r
    } = e;
    m = u(c({}, m), {
      [f({
        location: t,
        channelId: n,
        withCommands: r
      })]: 0
    })
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function(e) {
    let {
      recommendations: t,
      location: n,
      channelId: r,
      withCommands: l
    } = e, i = f({
      location: n,
      channelId: r,
      withCommands: l
    });
    d = u(c({}, d), {
      [i]: t
    }), m = u(c({}, m), {
      [i]: 1
    });
    let o = Date.now();
    p = u(c({}, p), {
      [i]: o
    })
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function(e) {
    let {
      location: t,
      channelId: n,
      withCommands: r
    } = e;
    m = u(c({}, m), {
      [f({
        location: t,
        channelId: n,
        withCommands: r
      })]: 2
    })
  }
})