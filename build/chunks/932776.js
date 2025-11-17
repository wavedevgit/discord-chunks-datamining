/** Chunk was on 86736 **/
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
  let e = (0, Chunk442837.cj)([Chunk905753.Z], () => {
      var e;
      return Object.values(null != (e = Chunk905753.Z.getCommands()) ? module : {})
    }),
    [t, n] = Chunk473749.useState(""),
    c = Chunk473749.useMemo(() => module.filter(e => {
      var t;
      return (null == e.integration_types || e.integration_types.includes(r.Y.GUILD_INSTALL)) && (null == e.contexts || (null == (t = e.contexts) ? true : t.includes(a.D.GUILD)))
    }), [module]),
    u = Chunk473749.useMemo(() => [...c].sort((e, t) => {
      let n = a.yU.CHAT + 1,
        i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
      return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName)
    }), [c]),
    p = Chunk473749.useMemo(() => exports.startsWith("/") ? u.filter(e => e.type === a.yU.CHAT) : u, [exports, u]),
    m = Chunk473749.useMemo(() => exports.startsWith("/") ? exports.substring(1) : exports, [exports]);
  return {
    query: exports,
    results: Chunk473749.useMemo(() => (0, Chunk282923.B)(p, d, m), [p, m]),
    setQuery: require,
    unfilteredCount: module.length
  }
}

function d(e) {
  return {
    id: e.id,
    names: [e.displayName]
  }
}