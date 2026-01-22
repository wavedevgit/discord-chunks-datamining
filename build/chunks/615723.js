/** Chunk was on 21968 **/
/** chunk id: 615723, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => d
}), require("./896048.js"), require("./321073.js"), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk168186 = require("./168186.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk633334 = require("./633334.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let t = i.useMemo(() => {
      let t = l.Ay.getChannels(e),
        n = [...t[l.I6]];
      n.push(...t[l.vM].filter(e => e.channel.isGuildVocal()));
      let i = n.map(e => ({
        id: e.channel.id,
        name: e.channel.name,
        canManage: a.A.can(o.xBc.MANAGE_ROLES, e.channel)
      }));
      return i.unshift({
        id: (0, r.Ap)(e),
        name: c.intl.string(c.t["7YqSGx"]),
        canManage: true
      }), i
    }, [e]),
    [n, d] = i.useState(""),
    b = i.useMemo(() => {
      var e;
      let i = (e = n).startsWith("#") ? e.substr(1) : e;
      return (0, s.I)(t, u, i)
    }, [t, n]);
  return {
    query: n,
    results: b,
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