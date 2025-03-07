/** Chunk was on web.js **/
"use strict";
n.d(t, {
  A: () => _,
  q: () => d
}), n(978209);
var r = n(392711),
  i = n.n(r),
  o = n(131704),
  a = n(592125),
  s = n(580005),
  l = n(650774),
  c = n(70956),
  u = n(789662);

function d(e, t, n, r, i) {
  var o, s, c, d;
  let _ = a.Z.getMutableGuildChannelsForGuild(e.id),
    p = r.filter(e => e.channel_id in _),
    h = null !== (o = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== o ? o : {},
    m = l.Z.getMemberCount(e.id),
    g = f("year", r, p, e => {
      var t;
      return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
    }),
    E = f("one month", r, p, e => {
      var t;
      return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
    }),
    v = f("three month", r, p, e => {
      var t;
      return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
    }),
    b = [E, v, f("six month", r, p, e => {
      var t;
      return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
    }), g],
    y = 0,
    O = 0;
  p.forEach(e => {
    var t;
    y++, O += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
  });
  let I = "\n**Pain**:\n- Everyones: ".concat(u.XR[null !== (s = h.everyones) && void 0 !== s ? s : 0], "\n- Messages: ").concat(u.XR[null !== (c = h.messages) && void 0 !== c ? c : 0], "\n- Size: ").concat(m, "\n**Remote**:\n- Channels: ").concat(y, "\n- AllVisits: ").concat(b.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(b.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(b.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(b.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(O, "\n"),
    S = v.guildOpens >= .02 * v.totalOpensAcrossAllServers,
    T = (null !== (d = g.guildOpens) && void 0 !== d ? d : 0) > 0;
  return h.messages !== u.XR.High || i && (S || !T) ? [u.AR.KeepAsIs, S, "KeepAsIs" + I] : [u.AR.UseGreyDot, S, "UseGreyDot" + I]
}

function f(e, t, n, r) {
  let o = t.reduce((e, t) => e + r(t), 0),
    a = n.reduce((e, t) => e + r(t), 0),
    s = i().sortBy(n, r).reverse()[0],
    l = null == s ? 0 : r(s),
    c = (l / a * 100).toFixed(1);
  return {
    label: e,
    totalOpensAcrossAllServers: o,
    guildOpens: a,
    biggestChannel: l,
    biggestChannelFormatted: c
  }
}

function _(e, t) {
  var n, r;
  let i = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
    a = null !== (r = l.Z.getMemberCount(e.id)) && void 0 !== r ? r : 0,
    d = Date.now() - c.Z.Millis.DAYS_30,
    f = s.Z.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof o.Sf && t.guild_id === e.id),
    _ = f.filter(e => {
      var t, n;
      let r = null !== (n = null === (t = s.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
      return 0 !== r.length && r[r.length - 1] >= d
    }),
    p = _.length >= 5,
    h = f.reduce((e, t) => {
      var n, r;
      return e + (null !== (r = null === (n = s.Z.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== r ? r : 0)
    }, 0),
    m = "\n- **Local**:\n    - Guild Visits: ".concat(h, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(_.length, "\n");
  return i.messages === u.XR.High || a > 1e3 ? [u.AR.UseGreyDot, p, "SuggestGreyDot" + m] : [u.AR.KeepAsIs, p, "KeepAsIs" + m]
}