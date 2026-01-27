/** Chunk was on web.js **/
/** chunk id: 329575, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  op: () => l,
  uG: () => o,
  v$: () => c
}), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk562153 = require("./562153.js"),
  Chunk583846 = require("./583846.js"),
  Chunk985018 = require("./985018.jsx");
let o = (e, t) => a.intl.formatToPlainString(a.t.tAwI1k, {
    username: t.username,
    activity: e.extra.game_name
  }),
  s = e => {
    let t = (0, i.JM)(e);
    return (0, i.Rf)(e) ? t ? a.t.MHO1AV : a.t.i7AOzw : t ? a.t["lLPKY+"] : a.t["bES+y2"]
  },
  l = (e, t, n) => {
    let i = s(e),
      o = r.Ay.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n),
      l = e.extra.game_name;
    return a.intl.formatToMarkdownString(i, {
      gameName: l,
      userName: o
    }).replaceAll("*", "")
  },
  c = e => {
    let {
      entry: t,
      channel: n,
      users: o,
      countOthers: s
    } = e, l = (0, i.JM)(t) ? a.t.QaUWPd : a.t["7j/5mg"];
    return a.intl.formatToMarkdownString(l, {
      gameName: t.extra.game_name,
      user1: r.Ay.getName(null == n ? true : n.guild_id, null == n ? true : n.id, o[0]),
      user2: r.Ay.getName(null == n ? true : n.guild_id, null == n ? true : n.id, o[1]),
      countOthers: s
    }).replaceAll("*", "")
  }