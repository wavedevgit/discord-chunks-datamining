/** Chunk was on 94387 **/
n.d(t, {
  $6: () => b,
  YK: () => _,
  _o: () => d,
  bL: () => s,
  gl: () => r,
  rr: () => u
}), n(47120);
var o = n(695346),
  i = n(486472),
  a = n(430824);
n(626135);
var l = n(981631);
n(388032);
let c = 864e5 * l.eBq;

function _() {
  let e = o.h2.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != a.Z.getGuild(e))), new Set(e)
}

function r() {
  let e = o.zA.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != a.Z.getGuild(e))), new Set(e)
}

function d() {
  let e = o.SE.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != a.Z.getGuild(e))), new Set(e)
}

function u() {
  let e = o.iH.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != a.Z.getGuild(e))), new Set(e)
}

function s(e) {
  return (e & l.HGf) === l.HGf ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS
  }
}

function b(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && c > Date.now() - new Date(e.created_at).getTime()
}