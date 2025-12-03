/** Chunk was on 24753 **/
/** chunk id: 289584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    [g, m] = r.useState(false),
    [b, x] = r.useState(null),
    f = r.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? true : e.id), [null == e ? true : e.id]),
    h = (0, c.J)(e);
  return {
    loading: g,
    error: b,
    onSave: async r => {
      let {
        topic: c,
        privacyLevel: u,
        sendStartNotification: g
      } = r;
      if (null != e && "" !== c && null != u) {
        m(true), x(null), null != n && (l.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
        try {
          let n;
          null != f ? n = await o.Ef(e, c, u) : (n = await o.HO(e, c, u, null != g && g), h && s.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
        } catch (e) {
          x(new a.Hx(e)), m(false)
        }
      }
    }
  }
}