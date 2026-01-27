/** Chunk was on web.js **/
/** chunk id: 956793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => _
});
var Chunk73153 = require("./73153.js"),
  Chunk323073 = require("./323073.js"),
  Chunk108713 = require("./108713.js"),
  Chunk643501 = require("./643501.js");
require("./554562.js");
var Chunk574172 = require("./574172.js"),
  Chunk976860 = require("./976860.js"),
  Chunk312341 = require("./312341.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk381222 = require("./381222.js"),
  Chunk652215 = require("./652215.js");
let _ = {
  selectChannel(e) {
    let {
      guildId: t,
      channelId: n,
      messageId: i,
      jumpType: a,
      preserveDrawerState: o,
      source: s,
      isInitialSetup: l
    } = e;
    r.h.dispatch({
      type: "CHANNEL_SELECT",
      guildId: t === p.ME ? null : t,
      channelId: n,
      messageId: i,
      jumpType: a,
      preserveDrawerState: o,
      source: s,
      isInitialSetup: l
    })
  },
  selectPrivateChannel(e) {
    (0, l.pX)(p.BVt.CHANNEL(p.ME, e))
  },
  selectVoiceChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
      a = u.A.getChannel(e),
      o = null == a ? true : a.getGuildId();
    (null == a ? true : a.isGuildVocalOrThread()) && (0, i.qR)(a) ? (0, l.pX)(p.BVt.CHANNEL(o, e)) : d.A.isSupported() && (null != e && d.A.getMediaEngine().interact(), (0, f.x)(e, o, t, n, r))
  },
  disconnect() {
    let e = o.default.getRemoteSessionId();
    null != e && a.Fc(e), (0, c.AA)() ? this.selectVoiceChannel(null) : (this.selectVoiceChannel(null), s.close(p.MLl.CHANNEL_CALL_POPOUT))
  }
}