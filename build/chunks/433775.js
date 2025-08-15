/** Chunk was on 61 **/
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
  let [d, x] = r.useState(u), [m, g] = r.useState(false), v = r.useRef(false), h = null == e ? true : e.id, f = null == e ? true : e.features.has(c.oNc.HAS_DIRECTORY_ENTRY);
  r.useEffect(() => {
    if (!f) return void x(u);
    v.current || null == h || (async () => {
      v.current = true;
      try {
        let e = await (0, s.X)(h, o.C2.GUILD_SCHEDULED_EVENT, t);
        x(e)
      } catch (e) {
        x(u)
      }
      v.current = false
    })()
  }, [h, f, t]), r.useEffect(() => {
    var e;
    if (!d.can_broadcast) return void g(false);
    g(null == (e = d.has_broadcast) || e)
  }, [d]);
  let p = (0, l.e7)([a.Z], () => (0, i.wg)(n, [a.Z]));
  return {
    broadcastInfo: d,
    broadcastToDirectoryChannels: p && m,
    setBroadcastToDirectoryChannels: g,
    canEveryoneRoleViewEvent: p
  }
}