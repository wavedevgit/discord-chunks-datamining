/** Chunk was on 93886 **/
n.d(t, {
  $6: () => p,
  YK: () => o,
  _o: () => d,
  bL: () => m,
  gl: () => c,
  rr: () => u
}), n(388685);
var a = n(695346),
  r = n(486472),
  l = n(430824);
n(626135);
var i = n(981631);
n(388032);
let s = 864e5 * i.eBq;

function o() {
  let e = a.h2.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), new Set(e)
}

function c() {
  let e = a.zA.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), new Set(e)
}

function d() {
  let e = a.SE.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), new Set(e)
}

function u() {
  let e = a.iH.getSetting();
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

function p(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && s > Date.now() - new Date(e.created_at).getTime()
}