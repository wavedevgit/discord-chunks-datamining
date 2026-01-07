/** Chunk was on 9414 **/
/** chunk id: 932776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => c
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk373793 = require("./373793.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk282923 = require("./282923.js"),
  Chunk905753 = require("./905753.js");

function c() {
  let e = (0, l.cj)([s.Z], () => {
      var e;
      return Object.values(null != (e = s.Z.getCommands()) ? e : {})
    }),
    [t, n] = i.useState(""),
    c = i.useMemo(() => e.filter(e => {
      var t;
      return (null == e.integration_types || e.integration_types.includes(r.Y.GUILD_INSTALL)) && (null == e.contexts || (null == (t = e.contexts) ? true : t.includes(a.D.GUILD)))
    }), [e]),
    u = i.useMemo(() => [...c].sort((e, t) => {
      let n = a.yU.CHAT + 1,
        i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
      return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName)
    }), [c]),
    m = i.useMemo(() => t.startsWith("/") ? u.filter(e => e.type === a.yU.CHAT) : u, [t, u]),
    b = i.useMemo(() => t.startsWith("/") ? t.substring(1) : t, [t]);
  return {
    query: t,
    results: i.useMemo(() => (0, o.B)(m, d, b), [m, b]),
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