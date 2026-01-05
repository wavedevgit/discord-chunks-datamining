/** Chunk was on 1272 **/
/** chunk id: 960275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk314897 = require("./314897.js"),
  Chunk57562 = require("./57562.jsx"),
  Chunk882029 = require("./882029.js"),
  Chunk955204 = require("./955204.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Set;
class f extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("MESSAGE_CREATE", this.handleMessageCreate), Chunk570140.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), Chunk570140.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  constructor(...e) {
    super(...e), d(this, "handleSettingsUpdate", e => {
      let {
        settings: t
      } = e;
      t.enabled ? (0, a.T)(s.hn.ENABLE_POGGERMODE) : false === t.enabled && (0, a.T)(s.hn.DISABLE_POGGERMODE), Object.keys(t).some(e => e.startsWith("confetti")) && (0, a.T)(s.hn.CUSTOMIZE_CONFETTI)
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
      if (!c.Z.isEnabled()) returnfalse;
      let f = l.default.getId();
      if ((null == d ? true : d.find(e => e.id === f)) != null ? (0, a.T)(s.hn.PING_ME) : (null != (t = null == d ? true : d.length) ? t : 0) > 0 && (null == r ? true : r.id) === f && (0, a.T)(s.hn.PING_SOMEONE), !(0, u.wU)(null == r ? true : r.id, f, i, p)) returnfalse;
      let g = u.ZP.getMostRecentMessageCombo(n),
        {
          combo: h
        } = null != g ? g : {};
      if (null == h) returnfalse;
      Object.values(s.hn).forEach(e => {
        if (null != o.Z.getUnlocked(e)) return;
        let t = (0, s.oX)(e),
          n = null == t ? true : t.checkUnlock;
        null != n && false !== n(h) && (0, a.T)(e)
      })
    })
  }
}
let g = new f