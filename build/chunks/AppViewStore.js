/** Chunk was on 7384 **/
/** chunk id: 774343, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var i, r, s, a, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk896797 = require("./896797.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk55589 = require("./55589.js"),
  Chunk981631 = require("./981631.js");
let f = (null != (a = null == (s = window) || null == (r = s.location) ? true : r.pathname) ? a : "").startsWith(Chunk981631.Z5c.ACTIVITIES) ? Chunk981631.Z5c.ACTIVITIES : null;

function b(e) {
  let {
    link: t
  } = e;
  if (f === t) returnfalse;
  f = t
}
class x extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk896797.Z, Chunk55589.Z, Chunk944486.Z, Chunk430824.Z, Chunk592125.Z)
  }
  getHomeLink() {
    return null != f ? f : Chunk896797.Z.fallbackRoute
  }
}(i = "displayName") in x ? Object.defineProperty(x, i, {
  value: "AppViewStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : x[i] = "AppViewStore";
let _ = new x(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function() {
    let e = Chunk55589.Z.getPrivateChannelIds(),
      t = Chunk944486.Z.getChannelId(Chunk981631.ME);
    (null != exports || null != module[0]) && (f = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, null != exports ? exports : module[0]))
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
    if (null == f || !f.startsWith(Chunk981631.Z5c.APPLICATION_STORE)) returnfalse;
    f = Chunk981631.Z5c.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = h.Z5c.CHANNEL(h.ME, n);
      if (e !== f) return f = e, true
    }
    returnfalse
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != f && f === h.Z5c.CHANNEL(h.ME, t.id) && (f = null)
  }
})