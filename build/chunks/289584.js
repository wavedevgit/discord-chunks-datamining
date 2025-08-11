/** Chunk was on 24231 **/
/** chunk id: 289584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk749210 = require("./749210.js"),
  Chunk287734 = require("./287734.js"),
  Chunk881052 = require("./881052.js"),
  Chunk142497 = require("./142497.js"),
  Chunk570188 = require("./570188.js"),
  Chunk471253 = require("./471253.js"),
  Chunk427679 = require("./427679.js"),
  Chunk190378 = require("./190378.js");

function x(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    [x, m] = r.useState(false),
    [h, g] = r.useState(null),
    b = r.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? true : e.id), [null == e ? true : e.id]),
    p = (0, s.J)(e);
  return {
    loading: x,
    error: h,
    onSave: async r => {
      let {
        topic: s,
        privacyLevel: d,
        sendStartNotification: x
      } = r;
      if (null != e && "" !== s && null != d) {
        m(true), g(null), null != n && (i.Z.selectGuild(n), l.default.selectVoiceChannel(e.id));
        try {
          let n;
          null != b ? n = await c.Ef(e, s, d) : (n = await c.HO(e, s, d, null != x && x), p && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
        } catch (e) {
          g(new a.Hx(e)), m(false)
        }
      }
    }
  }
}