/** Chunk was on 6850 **/
/** chunk id: 734557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => o
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let a = new Map;

function o(e) {
  let [t, n] = r.useState(a.has(e) ? Array.from(a.get(e)) : []), [o, s] = r.useState(false), c = r.useMemo(() => t.map(e => e.code), [t]), d = r.useMemo(() => t.reduce((e, t) => (e[t.code] = t, e), {}), [t]), u = r.useCallback(async () => {
    s(true);
    let t = (await l.tn.get({
      url: i.ANM.GUILD_INSTANT_INVITES(e),
      rejectWithError: true
    })).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
    n(t), a.set(e, new Set(t)), s(false)
  }, [e]);
  return r.useEffect(() => {
    u()
  }, [e, u]), {
    invitesRaw: t,
    inviteCodes: c,
    invitesByCode: d,
    loading: o
  }
}