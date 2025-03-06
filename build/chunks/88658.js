/** Chunk was on 97434 **/
n.d(t, {
  $6: () => p,
  YK: () => l,
  _o: () => _,
  bL: () => s,
  gl: () => d,
  rr: () => u
}), n(47120);
var a = n(695346),
  i = n(486472),
  o = n(430824);
n(626135);
var r = n(981631);
n(388032);
let c = 864e5 * r.eBq;

function l() {
  let e = a.h2.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != o.Z.getGuild(e))), new Set(e)
}

function d() {
  let e = a.zA.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != o.Z.getGuild(e))), new Set(e)
}

function _() {
  let e = a.SE.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != o.Z.getGuild(e))), new Set(e)
}

function u() {
  let e = a.iH.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != o.Z.getGuild(e))), new Set(e)
}

function s(e) {
  return (e & r.HGf) === r.HGf ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (e & r.SOq.MUTUAL_FRIENDS) === r.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & r.SOq.MUTUAL_GUILDS) === r.SOq.MUTUAL_GUILDS
  }
}

function p(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && c > Date.now() - new Date(e.created_at).getTime()
}