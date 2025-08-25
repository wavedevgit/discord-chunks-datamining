/** Chunk was on web.js **/
/** chunk id: 29899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk841784 = require("./841784.js"),
  Chunk956221 = require("./956221.js"),
  Chunk158776 = require("./158776.js"),
  Chunk979651 = require("./979651.js");

function l(e) {
  let {
    userId: t,
    guildId: n
  } = e, {
    voiceState: l,
    voiceChannel: c
  } = (0, o.Z)({
    userId: t,
    guildId: n
  }), u = null == c ? true : c.id;
  return {
    voiceState: l,
    voiceChannel: c,
    voiceActivity: (0, r.e7)([a.Z, s.Z], () => {
      if (null == t || null == u) return;
      let e = a.Z.findActivity(t, e => {
        if (!(0, i.Z)(e)) returnfalse;
        let n = s.Z.getVoiceStateForSession(t, e.session_id);
        return (null == n ? true : n.channelId) === u
      });
      return null != e ? e : true
    })
  }
}