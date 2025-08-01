/** Chunk was on 93886 **/
a.d(t, {
  $6: () => x,
  YK: () => o,
  _o: () => d,
  bL: () => m,
  gl: () => c,
  rr: () => u
}), a(388685);
var n = a(695346),
  r = a(486472),
  l = a(430824);
a(626135);
var i = a(981631);
a(388032);
let s = 864e5 * i.eBq;

function o() {
  let e = n.h2.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), new Set(e)
}

function c() {
  let e = n.zA.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), new Set(e)
}

function d() {
  let e = n.SE.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), new Set(e)
}

function u() {
  let e = n.iH.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), new Set(e)
}

function m(e) {
  return (e & i.HGf) === i.HGf ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (e & i.SOq.MUTUAL_FRIENDS) === i.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & i.SOq.MUTUAL_GUILDS) === i.SOq.MUTUAL_GUILDS
  }
}

function x(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && s > Date.now() - new Date(e.created_at).getTime()
}