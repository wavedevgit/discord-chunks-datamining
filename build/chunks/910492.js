/** Chunk was on web.js **/
/** chunk id: 910492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => _,
  q: () => p
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
let f = () => {
    let {
      notificationCenterVariant: e
    } = (0, s.GE)({
      location: "TOGGLE_INBOX"
    });
    if ("sidebar" !== e) return;
    let t = c.A.getChannelId(),
      n = o.A.getChannel(t);
    return window.location.pathname.startsWith(d.BVt.CHANNEL(d.gNP)) && null != n ? (0, a.i)(n.guild_id, t) : (0, a.a)(d.BVt.CHANNEL(d.gNP, null != t ? t : true))
  },
  p = {
    binds: ["mod+i"],
    comboKeysBindGlobal: true,
    action: () => !(l.A.getLayers().length > 0) && (f(), u._.dispatch(d.jej.TOGGLE_INBOX), false)
  },
  _ = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: true,
    action: i().debounce(() => {
      if (u._.hasSubscribers(d.jej.MARK_TOP_INBOX_CHANNEL_READ)) return u._.dispatch(d.jej.MARK_TOP_INBOX_CHANNEL_READ), false
    }, 100, {
      leading: true
    })
  }