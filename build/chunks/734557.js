/** Chunk was on 6850 **/
/** chunk id: 734557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => a
}), require("./388685.js"), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let i = new Map;

function a(e) {
  let [t, n] = r.useState(i.has(e) ? Array.from(i.get(e)) : []), [a, s] = r.useState(false), c = r.useMemo(() => t.map(e => e.code), [t]), u = r.useMemo(() => t.reduce((e, t) => (e[t.code] = t, e), {}), [t]), d = r.useCallback(async () => {
    s(true);
    let t = (await l.tn.get({
      url: o.ANM.GUILD_INSTANT_INVITES(e),
      rejectWithError: true
    })).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
    n(t), i.set(e, new Set(t)), s(false)
  }, [e]);
  return r.useEffect(() => {
    d()
  }, [e, d]), {
    invitesRaw: t,
    inviteCodes: c,
    invitesByCode: u,
    loading: a
  }
}