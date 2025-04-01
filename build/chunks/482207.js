/** Chunk was on 54061 **/
n.d(t, {
  Z: () => f
});
var o, i, r, a = n(442837),
  l = n(570140);
let _ = () => ({
    isFetching: !1,
    lastFetchedAt: null,
    error: null
  }),
  c = [],
  d = _();
class s extends(r = a.ZP.Store) {
  get isFetching() {
    return d.isFetching
  }
  get fetchError() {
    return d.error
  }
  get shouldFetch() {
    var e;
    return Date.now() - (null !== (e = d.lastFetchedAt) && void 0 !== e ? e : 0) > 3e5 && !d.isFetching
  }
  getAvatars() {
    return c
  }
}
i = "RecentAvatarsStore", (o = "displayName") in s ? Object.defineProperty(s, o, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = i;
let f = new s(l.Z, {
  RECENT_AVATARS_FETCH_START: function() {
    d.isFetching = !0, d.error = null
  },
  RECENT_AVATARS_FETCH_SUCCESS: function(e) {
    let {
      avatars: t
    } = e;
    c = t, d.isFetching = !1, d.lastFetchedAt = Date.now()
  },
  RECENT_AVATARS_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    d.isFetching = !1, d.error = t
  },
  RECENT_AVATARS_UPDATE: function() {
    d.lastFetchedAt = 0
  },
  RECENT_AVATAR_DELETE: function(e) {
    let {
      avatarId: t
    } = e;
    c = c.filter(e => e.id !== t)
  },
  LOGOUT: function() {
    c = [], d = _()
  }
})