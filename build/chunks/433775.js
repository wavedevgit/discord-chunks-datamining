/** Chunk was on 58023 **/
/** chunk id: 433775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk951539 = require("./951539.js"),
  Chunk592125 = require("./592125.js"),
  Chunk356685 = require("./356685.js"),
  Chunk75666 = require("./75666.js"),
  Chunk981631 = require("./981631.js");
let u = {
  can_broadcast: false
};

function d(e, t, n) {
  let [d, m] = r.useState(u), [x, g] = r.useState(false), h = r.useRef(false), v = null == e ? true : e.id, p = null == e ? true : e.features.has(c.oNc.HAS_DIRECTORY_ENTRY);
  r.useEffect(() => {
    if (!p) return void m(u);
    h.current || null == v || (async () => {
      h.current = true;
      try {
        let e = await (0, s.X)(v, o.C2.GUILD_SCHEDULED_EVENT, t);
        m(e)
      } catch (e) {
        m(u)
      }
      h.current = false
    })()
  }, [v, p, t]), r.useEffect(() => {
    var e;
    if (!d.can_broadcast) return void g(false);
    g(null == (e = d.has_broadcast) || e)
  }, [d]);
  let f = (0, l.e7)([a.Z], () => (0, i.wg)(n, [a.Z]));
  return {
    broadcastInfo: d,
    broadcastToDirectoryChannels: f && x,
    setBroadcastToDirectoryChannels: g,
    canEveryoneRoleViewEvent: f
  }
}