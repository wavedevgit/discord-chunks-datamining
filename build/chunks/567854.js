/** Chunk was on 86317 **/
/** chunk id: 567854, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk686956 = require("./686956.js"),
  Chunk956793 = require("./956793.js"),
  Chunk198982 = require("./198982.js"),
  Chunk421838 = require("./421838.js"),
  Chunk272379 = require("./272379.js"),
  Chunk849736 = require("./849736.js"),
  Chunk446600 = require("./446600.js"),
  Chunk897513 = require("./897513.js");

function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    [g, h] = l.useState(false),
    [f, x] = l.useState(null),
    m = l.useMemo(() => u.A.getStageInstanceByChannel(null == e ? true : e.id), [null == e ? true : e.id]),
    j = (0, c.Z)(e);
  return {
    loading: g,
    error: f,
    onSave: async l => {
      let {
        topic: c,
        privacyLevel: u,
        sendStartNotification: g
      } = l;
      if (null != e && "" !== c && null != u) {
        h(true), x(null), null != n && (r.A.selectGuild(n), i.default.selectVoiceChannel(e.id));
        try {
          let n;
          null != m ? n = await o.b3(e, c, u) : (n = await o.Nx(e, c, u, null != g && g), j && s.sF(d._.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
        } catch (e) {
          x(new a.LG(e)), h(false)
        }
      }
    }
  }
}