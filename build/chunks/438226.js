/** Chunk was on 14093 **/
n.d(t, {
  HV: () => s,
  IS: () => i,
  VY: () => c
}), n(627494), n(757143), n(301563), n(201133);
var r = n(5192),
  l = n(561308),
  a = n(388032);
let i = (e, t) => a.NW.formatToPlainString(a.t.tAwI1t, {
    username: t.username,
    activity: e.extra.game_name
  }),
  o = e => {
    let t = (0, l.kr)(e);
    return (0, l.Ol)(e) ? t ? a.t.MHO1AQ : a.t.i7AOz8 : t ? a.t.lLPKY2 : a.t["bES+y8"]
  },
  s = (e, t, n) => {
    let l = o(e),
      i = r.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
      s = e.extra.game_name;
    return a.NW.formatToMarkdownString(l, {
      gameName: s,
      userName: i
    }).replaceAll("*", "")
  },
  c = e => {
    let {
      entry: t,
      channel: n,
      users: i,
      countOthers: o
    } = e, s = (0, l.kr)(t) ? a.t.QaUWPT : a.t["7j/5mp"];
    return a.NW.formatToMarkdownString(s, {
      gameName: t.extra.game_name,
      user1: r.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[0]),
      user2: r.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[1]),
      countOthers: o
    }).replaceAll("*", "")
  }