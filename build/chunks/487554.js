/** Chunk was on 76030 **/
n.d(t, {
  M: () => s,
  Z: () => p
});
var r, i, a = n(442837),
  o = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var s = ((r = {})[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FAILED = 3] = "FAILED", r);
let c = {},
  d = {};
class u extends(i = a.ZP.Store) {
  getMediaPostEmbed(e) {
    if (null != e) return c[e]
  }
  getEmbedFetchState(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : 0
  }
  getMediaPostEmbeds() {
    return c
  }
}
l(u, "displayName", "MediaPostEmbedStore");
let p = new u(o.Z, {
  CONNECTION_OPEN: function() {
    c = {}, d = {}
  },
  MEDIA_POST_EMBED_FETCH: function(e) {
    let {
      threadId: t
    } = e;
    d[t] = 1
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
          l(e, t, n[t])
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
    }), c = t, d[r] = 2
  },
  MEDIA_POST_EMBED_FETCH_FAILURE: function(e) {
    let {
      threadId: t
    } = e;
    d[t] = 3
  },
  LOGOUT: function(e) {
    e.isSwitchingAccount || (c = {}, d = {})
  }
})