/** Chunk was on 78376 **/
/** chunk id: 910492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => p,
  q: () => _
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk265422 = require("./265422.js"),
  Chunk851109 = require("./851109.js"),
  Chunk734057 = require("./734057.js"),
  Chunk186111 = require("./186111.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let _ = {
    binds: ["mod+i"],
    comboKeysBindGlobal: true,
    action: () => !(o.A.getLayers().length > 0) && ((() => {
      let {
        notificationCenterVariant: e
      } = (0, s.GE)({
        location: "TOGGLE_INBOX"
      });
      if ("sidebar" !== e) return;
      let t = c.A.getChannelId(),
        n = a.A.getChannel(t);
      return window.location.pathname.startsWith(u.BVt.CHANNEL(u.gNP)) && null != n ? (0, l.i)(n.guild_id, t) : (0, l.a)(u.BVt.CHANNEL(u.gNP, null != t ? t : true))
    })(), d._.dispatch(u.jej.TOGGLE_INBOX), false)
  },
  p = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: true,
    action: i().debounce(() => {
      if (d._.hasSubscribers(u.jej.MARK_TOP_INBOX_CHANNEL_READ)) return d._.dispatch(u.jej.MARK_TOP_INBOX_CHANNEL_READ), false
    }, 100, {
      leading: true
    })
  }