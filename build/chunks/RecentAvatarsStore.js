/** Chunk was on 53653 **/
/** chunk id: 218727, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var n, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = () => ({
    isFetching: false,
    lastFetchedAt: null,
    error: null
  }),
  o = [],
  c = s();
class u extends(l = Chunk311907.Ay.Store) {
  get isFetching() {
    return c.isFetching
  }
  get fetchError() {
    return c.error
  }
  get shouldFetch() {
    var e;
    return Date.now() - (null != (e = c.lastFetchedAt) ? e : 0) > 3e5 && !c.isFetching
  }
  getAvatars() {
    return o
  }
}(n = "displayName") in u ? Object.defineProperty(u, n, {
  value: "RecentAvatarsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[n] = "RecentAvatarsStore";
let f = new u(Chunk73153.h, {
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