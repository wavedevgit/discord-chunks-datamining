/** Chunk was on 64935 **/
/** chunk id: 752755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  e: () => o
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var o = ((r = {})[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FAILED = 3] = "FAILED", r);
let c = {},
  u = {};
class d extends(i = Chunk311907.Ay.Store) {
  getMediaPostEmbed(e) {
    if (null != e) return c[e]
  }
  getEmbedFetchState(e) {
    var t;
    return null != (t = u[e]) ? t : 0
  }
  getMediaPostEmbeds() {
    return c
  }
}
s(d, "displayName", "MediaPostEmbedStore");
let p = new d(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    c = {}, u = {}
  },
  MEDIA_POST_EMBED_FETCH: function(e) {
    let {
      threadId: t
    } = e;
    u[t] = 1
  },
  MEDIA_POST_EMBED_FETCH_SUCCESS: function(e) {
    var t, n;
    let {
      threadId: r,
      mediaPostEmbed: i
    } = e;
    t = function(e) {
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
    }({}, c), n = n = {
      [r]: i
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), c = t, u[r] = 2
  },
  MEDIA_POST_EMBED_FETCH_FAILURE: function(e) {
    let {
      threadId: t
    } = e;
    u[t] = 3
  },
  LOGOUT: function(e) {
    e.isSwitchingAccount || (c = {}, u = {})
  }
})