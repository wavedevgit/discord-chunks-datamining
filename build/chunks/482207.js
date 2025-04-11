/** Chunk was on 71704 **/
n.d(t, {
  Z: () => f
});
var r, a, i, o = n(442837),
  l = n(570140);
let c = () => ({
    isFetching: !1,
    lastFetchedAt: null,
    error: null
  }),
  d = [],
  _ = c();
class s extends(i = o.ZP.Store) {
  get isFetching() {
    return _.isFetching
  }
  get fetchError() {
    return _.error
  }
  get shouldFetch() {
    var e;
    return Date.now() - (null != (e = _.lastFetchedAt) ? e : 0) > 3e5 && !_.isFetching
  }
  getAvatars() {
    return d
  }
}
a = "RecentAvatarsStore", (r = "displayName") in s ? Object.defineProperty(s, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = a;
let f = new s(l.Z, {
  RECENT_AVATARS_FETCH_START: function() {
    _.isFetching = !0, _.error = null
  },
  RECENT_AVATARS_FETCH_SUCCESS: function(e) {
    let {
      avatars: t
    } = e;
    d = t, _.isFetching = !1, _.lastFetchedAt = Date.now()
  },
  RECENT_AVATARS_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    _.isFetching = !1, _.error = t
  },
  RECENT_AVATARS_UPDATE: function() {
    _.lastFetchedAt = 0
  },
  RECENT_AVATAR_DELETE: function(e) {
    let {
      avatarId: t
    } = e;
    d = d.filter(e => e.id !== t)
  },
  LOGOUT: function() {
    d = [], _ = c()
  }
})