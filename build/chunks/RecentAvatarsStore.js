/** Chunk was on 89289 **/
/** chunk id: 482207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var r, a, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = () => ({
    isFetching: false,
    lastFetchedAt: null,
    error: null
  }),
  c = [],
  u = o();
class d extends(l = Chunk442837.ZP.Store) {
  get isFetching() {
    return u.isFetching
  }
  get fetchError() {
    return u.error
  }
  get shouldFetch() {
    var e;
    return Date.now() - (null != (e = u.lastFetchedAt) ? module : 0) > 3e5 && !u.isFetching
  }
  getAvatars() {
    return c
  }
}
a = "RecentAvatarsStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: a,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = a;
let f = new d(Chunk570140.Z, {
  RECENT_AVATARS_FETCH_START: function() {
    u.isFetching = true, u.error = null
  },
  RECENT_AVATARS_FETCH_SUCCESS: function(e) {
    let {
      avatars: t
    } = e;
    c = t, u.isFetching = false, u.lastFetchedAt = Date.now()
  },
  RECENT_AVATARS_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    u.isFetching = false, u.error = t
  },
  RECENT_AVATARS_UPDATE: function() {
    u.lastFetchedAt = 0
  },
  RECENT_AVATAR_DELETE: function(e) {
    let {
      avatarId: t
    } = e;
    c = c.filter(e => e.id !== t)
  },
  LOGOUT: function() {
    c = [], u = o()
  }
})