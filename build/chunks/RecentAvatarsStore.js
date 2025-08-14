/** Chunk was on 89289 **/
/** chunk id: 482207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = () => ({
    isFetching: false,
    lastFetchedAt: null,
    error: null
  }),
  o = [],
  c = s();
class u extends(a = Chunk442837.ZP.Store) {
  get isFetching() {
    return c.isFetching
  }
  get fetchError() {
    return c.error
  }
  get shouldFetch() {
    var e;
    return Date.now() - (null != (e = c.lastFetchedAt) ? module : 0) > 3e5 && !c.isFetching
  }
  getAvatars() {
    return o
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "RecentAvatarsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "RecentAvatarsStore";
let d = new u(Chunk570140.Z, {
  RECENT_AVATARS_FETCH_START: function() {
    c.isFetching = true, c.error = null
  },
  RECENT_AVATARS_FETCH_SUCCESS: function(e) {
    let {
      avatars: t
    } = e;
    o = t, c.isFetching = false, c.lastFetchedAt = Date.now()
  },
  RECENT_AVATARS_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    c.isFetching = false, c.error = t
  },
  RECENT_AVATARS_UPDATE: function() {
    c.lastFetchedAt = 0
  },
  RECENT_AVATAR_DELETE: function(e) {
    let {
      avatarId: t
    } = e;
    o = o.filter(e => e.id !== t)
  },
  LOGOUT: function() {
    o = [], c = s()
  }
})