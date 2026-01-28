/** Chunk was on 5606 **/
/** chunk id: 619921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var r, i, l, s, a, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk650048 = require("./650048.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk645959 = require("./645959.js"),
  Chunk652215 = require("./652215.js");
let f = (null != (i = null == (s = window) || null == (l = s.location) ? true : l.pathname) ? i : "").startsWith(Chunk652215.BVt.ACTIVITIES) ? Chunk652215.BVt.ACTIVITIES : null;

function b(e) {
  let {
    link: t
  } = e;
  if (f === t) returnfalse;
  f = t
}
class h extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, m.A, _.A, p.A, d.A)
  }
  getHomeLink() {
    return null != f ? f : u.A.fallbackRoute
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "AppViewStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "AppViewStore";
let A = new h(Chunk73153.h, {
  OVERLAY_INITIALIZE: function() {
    let e = m.A.getPrivateChannelIds(),
      t = _.A.getChannelId(g.ME);
    (null != t || null != e[0]) && (f = g.BVt.CHANNEL(g.ME, null != t ? t : e[0]))
  },
  APP_VIEW_SET_HOME_LINK: b,
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    b({
      link: t.pathname,
      type: "APP_VIEW_SET_HOME_LINK"
    })
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    if (null == f || !f.startsWith(g.BVt.APPLICATION_STORE)) returnfalse;
    f = g.BVt.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = g.BVt.CHANNEL(g.ME, n);
      if (e !== f) return f = e, true
    }
    returnfalse
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != f && f === g.BVt.CHANNEL(g.ME, t.id) && (f = null)
  }
})