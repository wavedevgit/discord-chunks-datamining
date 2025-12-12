/** Chunk was on 9414 **/
/** chunk id: 937427, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => d
}), require("./388685.js"), require("./539854.js"), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk581364 = require("./581364.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk282923 = require("./282923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = i.useMemo(() => {
      let t = l.ZP.getChannels(e),
        n = [...t[l.sH]];
      n.push(...t[l.Zb].filter(e => e.channel.isGuildVocal()));
      let i = n.map(e => ({
        id: e.channel.id,
        name: e.channel.name,
        canManage: a.Z.can(s.Plq.MANAGE_ROLES, e.channel)
      }));
      return i.unshift({
        id: (0, r.bD)(e),
        name: c.intl.string(c.t["7YqSGx"]),
        canManage: true
      }), i
    }, [e]),
    [n, d] = i.useState(""),
    m = i.useMemo(() => {
      var e;
      let i = (e = n).startsWith("#") ? e.substr(1) : e;
      return (0, o.B)(t, u, i)
    }, [t, n]);
  return {
    query: n,
    results: m,
    setQuery: d,
    unfilteredCount: t.length
  }
}

function u(e) {
  return {
    id: e.id,
    names: [e.name]
  }
}