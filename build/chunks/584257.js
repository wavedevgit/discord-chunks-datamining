/** Chunk was on 21738 **/
/** chunk id: 584257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk961350 = require("./961350.js"),
  Chunk414736 = require("./414736.jsx"),
  Chunk874486 = require("./874486.js"),
  Chunk927018 = require("./927018.js"),
  Chunk3137 = require("./3137.js"),
  Chunk559908 = require("./559908.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Set;
class h extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("MESSAGE_CREATE", this.handleMessageCreate), r.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  _terminate() {
    r.h.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), r.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  constructor(...e) {
    super(...e), d(this, "handleSettingsUpdate", e => {
      let {
        settings: t
      } = e;
      t.enabled ? (0, a._)(o.sn.ENABLE_POGGERMODE) : false === t.enabled && (0, a._)(o.sn.DISABLE_POGGERMODE), Object.keys(t).some(e => e.startsWith("confetti")) && (0, a._)(o.sn.CUSTOMIZE_CONFETTI)
    }), d(this, "handleMessageCreate", e => {
      var t;
      let {
        channelId: n,
        message: {
          author: r,
          nonce: i,
          mentions: d
        }
      } = e;
      if (!c.A.isEnabled()) returnfalse;
      let h = l.default.getId();
      if ((null == d ? true : d.find(e => e.id === h)) != null ? (0, a._)(o.sn.PING_ME) : (null != (t = null == d ? true : d.length) ? t : 0) > 0 && (null == r ? true : r.id) === h && (0, a._)(o.sn.PING_SOMEONE), !(0, u.gN)(null == r ? true : r.id, h, i, p)) returnfalse;
      let g = u.Ay.getMostRecentMessageCombo(n),
        {
          combo: m
        } = null != g ? g : {};
      if (null == m) returnfalse;
      Object.values(o.sn).forEach(e => {
        if (null != s.A.getUnlocked(e)) return;
        let t = (0, o.vM)(e),
          n = null == t ? true : t.checkUnlock;
        null == n || false !== n(m) && (0, a._)(e)
      })
    })
  }
}
let g = new h