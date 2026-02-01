/** Chunk was on 9207 **/
/** chunk id: 619921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var r, i, l, s, a, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk650048 = require("./650048.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk645959 = require("./645959.js"),
  Chunk652215 = require("./652215.js");
let A = (null != (i = null == (s = window) || null == (l = s.location) ? true : l.pathname) ? i : "").startsWith(Chunk652215.BVt.ACTIVITIES) ? Chunk652215.BVt.ACTIVITIES : null;

function f(e) {
  let {
    link: t
  } = e;
  if (A === t) returnfalse;
  A = t
}
class b extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, m.A, p.A, _.A, d.A)
  }
  getHomeLink() {
    return null != A ? A : u.A.fallbackRoute
  }
}(r = "displayName") in b ? Object.defineProperty(b, r, {
  value: "AppViewStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[r] = "AppViewStore";
let h = new b(Chunk73153.h, {
  OVERLAY_INITIALIZE: function() {
    let e = m.A.getPrivateChannelIds(),
      t = p.A.getChannelId(g.ME);
    (null != t || null != e[0]) && (A = g.BVt.CHANNEL(g.ME, null != t ? t : e[0]))
  },
  APP_VIEW_SET_HOME_LINK: f,
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    f({
      link: t.pathname,
      type: "APP_VIEW_SET_HOME_LINK"
    })
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    if (null == A || !A.startsWith(g.BVt.APPLICATION_STORE)) returnfalse;
    A = g.BVt.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = g.BVt.CHANNEL(g.ME, n);
      if (e !== A) return A = e, true
    }
    returnfalse
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != A && A === g.BVt.CHANNEL(g.ME, t.id) && (A = null)
  }
})