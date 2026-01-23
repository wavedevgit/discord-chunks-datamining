/** Chunk was on 35894 **/
/** chunk id: 836968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => a
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let o = new Map;

function a(e) {
  let [t, n] = r.useState(o.has(e) ? Array.from(o.get(e)) : []), [a, s] = r.useState(false), c = r.useMemo(() => t.map(e => e.code), [t]), u = r.useMemo(() => t.reduce((e, t) => (e[t.code] = t, e), {}), [t]), d = r.useCallback(async () => {
    s(true);
    let t = (await l.Bo.get({
      url: i.Rsh.GUILD_INSTANT_INVITES(e),
      rejectWithError: true
    })).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
    n(t), o.set(e, new Set(t)), s(false)
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