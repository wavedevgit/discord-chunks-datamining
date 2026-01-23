/** Chunk was on 21968 **/
/** chunk id: 253929, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => c
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk485845 = require("./485845.js"),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk633334 = require("./633334.js"),
  Chunk803378 = require("./803378.js");

function c() {
  let e = (0, l.cf)([o.A], () => {
      var e;
      return Object.values(null != (e = o.A.getCommands()) ? e : {})
    }),
    [t, n] = i.useState(""),
    c = i.useMemo(() => e.filter(e => {
      var t;
      return (null == e.integration_types || e.integration_types.includes(r.b.GUILD_INSTALL)) && (null == e.contexts || (null == (t = e.contexts) ? true : t.includes(a.OL.GUILD)))
    }), [e]),
    u = i.useMemo(() => [...c].sort((e, t) => {
      let n = a.kc.CHAT + 1,
        i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
      return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName)
    }), [c]),
    p = i.useMemo(() => t.startsWith("/") ? u.filter(e => e.type === a.kc.CHAT) : u, [t, u]),
    m = i.useMemo(() => t.startsWith("/") ? t.substring(1) : t, [t]);
  return {
    query: t,
    results: i.useMemo(() => (0, s.I)(p, d, m), [p, m]),
    setQuery: n,
    unfilteredCount: e.length
  }
}

function d(e) {
  return {
    id: e.id,
    names: [e.displayName]
  }
}