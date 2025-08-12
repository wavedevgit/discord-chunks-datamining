/** Chunk was on 20501 **/
/** chunk id: 774343, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var i, r, s, a, l, o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk896797 = require("./896797.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk55589 = require("./55589.js"),
  Chunk981631 = require("./981631.js");
let b = (null != (l = null == (a = window) || null == (s = a.location) ? true : s.pathname) ? l : "").startsWith(Chunk981631.Z5c.ACTIVITIES) ? Chunk981631.Z5c.ACTIVITIES : null;

function x(e) {
  let {
    link: t
  } = e;
  if (b === t) returnfalse;
  b = t
}
class _ extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk896797.Z, Chunk55589.Z, Chunk944486.Z, Chunk430824.Z, Chunk592125.Z)
  }
  getHomeLink() {
    return null != b ? b : Chunk896797.Z.fallbackRoute
  }
}
r = "AppViewStore", (i = "displayName") in _ ? Object.defineProperty(_, i, {
  value: r,
  enumerable: true,
  configurable: true,
  writable: true
}) : _[i] = r;
let j = new _(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function() {
    let e = Chunk55589.Z.getPrivateChannelIds(),
      t = Chunk944486.Z.getChannelId(Chunk981631.ME);
    (null != exports || null != module[0]) && (b = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, null != exports ? exports : module[0]))
  },
  APP_VIEW_SET_HOME_LINK: x,
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    x({
      link: t.pathname,
      type: "APP_VIEW_SET_HOME_LINK"
    })
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    if (null == b || !b.startsWith(Chunk981631.Z5c.APPLICATION_STORE)) returnfalse;
    b = Chunk981631.Z5c.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = f.Z5c.CHANNEL(f.ME, n);
      if (e !== b) return b = e, true
    }
    returnfalse
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != b && b === f.Z5c.CHANNEL(f.ME, t.id) && (b = null)
  }
})