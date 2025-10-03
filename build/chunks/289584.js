/** Chunk was on 24753 **/
/** chunk id: 289584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    [x, g] = r.useState(false),
    [m, b] = r.useState(null),
    h = r.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? true : e.id), [null == e ? true : e.id]),
    f = (0, c.J)(e);
  return {
    loading: x,
    error: m,
    onSave: async r => {
      let {
        topic: c,
        privacyLevel: u,
        sendStartNotification: x
      } = r;
      if (null != e && "" !== c && null != u) {
        g(true), b(null), null != n && (l.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
        try {
          let n;
          null != h ? n = await o.Ef(e, c, u) : (n = await o.HO(e, c, u, null != x && x), f && s.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
        } catch (e) {
          b(new a.Hx(e)), g(false)
        }
      }
    }
  }
}