/** Chunk was on 73736 **/
/** chunk id: 289584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk749210 = require("./749210.js"),
  Chunk287734 = require("./287734.js"),
  Chunk881052 = require("./881052.js"),
  Chunk142497 = require("./142497.js"),
  Chunk570188 = require("./570188.js"),
  Chunk471253 = require("./471253.js"),
  Chunk427679 = require("./427679.js"),
  Chunk190378 = require("./190378.js");

function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    [h, g] = r.useState(false),
    [_, m] = r.useState(null),
    b = r.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? true : e.id), [null == e ? true : e.id]),
    f = (0, s.J)(e);
  return {
    loading: h,
    error: _,
    onSave: async r => {
      let {
        topic: s,
        privacyLevel: d,
        sendStartNotification: h
      } = r;
      if (null != e && "" !== s && null != d) {
        g(true), m(null), null != n && (i.Z.selectGuild(n), l.default.selectVoiceChannel(e.id));
        try {
          let n;
          null != b ? n = await c.Ef(e, s, d) : (n = await c.HO(e, s, d, null != h && h), f && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
        } catch (e) {
          m(new a.Hx(e)), g(false)
        }
      }
    }
  }
}