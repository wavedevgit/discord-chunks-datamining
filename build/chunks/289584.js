/** Chunk was on 24753 **/
/** chunk id: 289584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk749210 = require("./749210.js"),
  Chunk287734 = require("./287734.js"),
  Chunk881052 = require("./881052.js"),
  Chunk142497 = require("./142497.js"),
  Chunk570188 = require("./570188.js"),
  Chunk471253 = require("./471253.js"),
  Chunk427679 = require("./427679.js"),
  Chunk190378 = require("./190378.js");

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    [f, m] = l.useState(false),
    [x, g] = l.useState(null),
    b = l.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? true : e.id), [null == e ? true : e.id]),
    j = (0, c.J)(e);
  return {
    loading: f,
    error: x,
    onSave: async l => {
      let {
        topic: c,
        privacyLevel: u,
        sendStartNotification: f
      } = l;
      if (null != e && "" !== c && null != u) {
        m(true), g(null), null != n && (r.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
        try {
          let n;
          null != b ? n = await o.Ef(e, c, u) : (n = await o.HO(e, c, u, null != f && f), j && s.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
        } catch (e) {
          g(new a.Hx(e)), m(false)
        }
      }
    }
  }
}