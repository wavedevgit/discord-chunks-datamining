/** Chunk was on web.js **/
/** chunk id: 438226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HV: () => l,
  IS: () => a,
  VY: () => c
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk5192 = require("./5192.js"),
  Chunk561308 = require("./561308.js"),
  Chunk388032 = require("./388032.jsx");
let a = (e, t) => o.intl.formatToPlainString(o.t.tAwI1k, {
    username: t.username,
    activity: e.extra.game_name
  }),
  s = e => {
    let t = (0, i.kr)(e);
    return (0, i.Ol)(e) ? t ? o.t.MHO1AV : o.t.i7AOzw : t ? o.t["lLPKY+"] : o.t["bES+y2"]
  },
  l = (e, t, n) => {
    let i = s(e),
      a = r.ZP.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n),
      l = e.extra.game_name;
    return o.intl.formatToMarkdownString(i, {
      gameName: l,
      userName: a
    }).replaceAll("*", "")
  },
  c = e => {
    let {
      entry: t,
      channel: n,
      users: a,
      countOthers: s
    } = e, l = (0, i.kr)(t) ? o.t.QaUWPd : o.t["7j/5mg"];
    return o.intl.formatToMarkdownString(l, {
      gameName: t.extra.game_name,
      user1: r.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, a[0]),
      user2: r.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, a[1]),
      countOthers: s
    }).replaceAll("*", "")
  }