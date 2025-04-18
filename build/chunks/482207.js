/** Chunk was on 68632 **/
n.d(t, {
  Z: () => _
});
var r, i, a, o = n(442837),
  c = n(570140);
let l = () => ({
    isFetching: !1,
    lastFetchedAt: null,
    error: null
  }),
  s = [],
  d = l();
class u extends(a = o.ZP.Store) {
  get isFetching() {
    return d.isFetching
  }
  get fetchError() {
    return d.error
  }
  get shouldFetch() {
    var e;
    return Date.now() - (null != (e = d.lastFetchedAt) ? e : 0) > 3e5 && !d.isFetching
  }
  getAvatars() {
    return s
  }
}
i = "RecentAvatarsStore", (r = "displayName") in u ? Object.defineProperty(u, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[r] = i;
let _ = new u(c.Z, {
  RECENT_AVATARS_FETCH_START: function() {
    d.isFetching = !0, d.error = null
  },
  RECENT_AVATARS_FETCH_SUCCESS: function(e) {
    let {
      avatars: t
    } = e;
    s = t, d.isFetching = !1, d.lastFetchedAt = Date.now()
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
    s = s.filter(e => e.id !== t)
  },
  LOGOUT: function() {
    s = [], d = l()
  }
})