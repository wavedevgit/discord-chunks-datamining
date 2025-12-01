/** Chunk was on web.js **/
/** chunk id: 287734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => _
});
var Chunk570140 = require("./570140.js"),
  Chunk622822 = require("./622822.js"),
  Chunk254238 = require("./254238.js"),
  Chunk258609 = require("./258609.js");
require("./473241.js");
var Chunk788983 = require("./788983.js"),
  Chunk703656 = require("./703656.js"),
  Chunk700615 = require("./700615.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk604151 = require("./604151.js"),
  Chunk981631 = require("./981631.js");
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
    r.Z.dispatch({
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
    (0, l.uL)(p.Z5c.CHANNEL(p.ME, e))
  },
  selectVoiceChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
      a = u.Z.getChannel(e),
      o = null == a ? true : a.getGuildId();
    if ((null == a ? true : a.isGuildVocal()) && (0, i.Y3)(a)) return void(0, l.uL)(p.Z5c.CHANNEL(o, e));
    d.Z.isSupported() && (null != e && d.Z.getMediaEngine().interact(), (0, f.h)(e, o, t, n, r))
  },
  disconnect() {
    let e = Chunk258609.default.getRemoteSessionId();
    null != module && Chunk254238._(module), (0, Chunk700615.ur)() ? this.selectVoiceChannel(null) : (this.selectVoiceChannel(null), Chunk788983.close(Chunk981631.KJ3.CHANNEL_CALL_POPOUT))
  }
}