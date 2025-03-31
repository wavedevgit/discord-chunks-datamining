/** Chunk was on 54061 **/
n.d(t, {
  Z: () => f
});
var o, i, r, a = n(442837),
  l = n(570140);
let d = () => ({
    isFetching: !1,
    lastFetchedAt: null,
    error: null
  }),
  _ = [],
  c = d();
class s extends(r = a.ZP.Store) {
  get isFetching() {
    return c.isFetching
  }
  get fetchError() {
    return c.error
  }
  get shouldFetch() {
    var e;
    return Date.now() - (null !== (e = c.lastFetchedAt) && void 0 !== e ? e : 0) > 3e5 && !c.isFetching
  }
  getAvatars() {
    return _
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
    c.isFetching = !0, c.error = null
  },
  RECENT_AVATARS_FETCH_SUCCESS: function(e) {
    let {
      avatars: t
    } = e;
    _ = t, c.isFetching = !1, c.lastFetchedAt = Date.now()
  },
  RECENT_AVATARS_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    c.isFetching = !1, c.error = t
  },
  RECENT_AVATARS_UPDATE: function() {
    c.lastFetchedAt = 0
  },
  RECENT_AVATAR_DELETE: function(e) {
    let {
      avatarId: t
    } = e;
    _ = _.filter(e => e.id !== t)
  },
  LOGOUT: function() {
    _ = [], c = d()
  }
})