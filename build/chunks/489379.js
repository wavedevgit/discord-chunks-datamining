/** Chunk was on web.js **/
/** chunk id: 489379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk765379 = require("./765379.js"),
  Chunk714114 = require("./714114.js"),
  Chunk290863 = require("./290863.js"),
  Chunk977997 = require("./977997.js");

function l(e) {
  let {
    userId: t,
    guildId: n
  } = e, {
    voiceState: l,
    voiceChannel: c
  } = (0, a.A)({
    userId: t,
    guildId: n
  }), u = null == c ? true : c.id;
  return {
    voiceState: l,
    voiceChannel: c,
    voiceActivity: (0, r.bG)([o.A, s.A], () => {
      if (null == t || null == u) return;
      let e = o.A.findActivity(t, e => {
        if (!(0, i.A)(e)) returnfalse;
        let n = s.A.getVoiceStateForSession(t, e.session_id);
        return (null == n ? true : n.channelId) === u
      });
      return null != e ? e : true
    })
  }
}