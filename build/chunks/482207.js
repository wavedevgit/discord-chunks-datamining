/** Chunk was on 55849 **/
n.d(t, {
  Z: () => f
});
var r, l, a, i = n(442837),
  o = n(570140);
let s = {
    isFetching: !1,
    lastFetchedAt: null,
    error: null
  },
  c = [],
  u = s;
class d extends(a = i.ZP.Store) {
  get isFetching() {
    return u.isFetching
  }
  get fetchError() {
    return u.error
  }
  get shouldFetch() {
    var e;
    return Date.now() - (null !== (e = u.lastFetchedAt) && void 0 !== e ? e : 0) > 3e5 && !u.isFetching
  }
  getAvatars() {
    return c
  }
}
l = "RecentAvatarsStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[r] = l;
let f = new d(o.Z, {
  RECENT_AVATARS_FETCH_START: function() {
    u.isFetching = !0, u.error = null
  },
  RECENT_AVATARS_FETCH_SUCCESS: function(e) {
    let {
      avatars: t
    } = e;
    c = t, u.isFetching = !1, u.lastFetchedAt = Date.now()
  },
  RECENT_AVATARS_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    u.isFetching = !1, u.error = t
  },
  LOGOUT: function() {
    c = [], u = s
  }
})