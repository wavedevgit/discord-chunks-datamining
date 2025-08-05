/** Chunk was on 95345 **/
n.d(e, {
  $6: () => _,
  YK: () => o,
  _o: () => c,
  bL: () => g,
  gl: () => u,
  rr: () => d
}), n(388685);
var i = n(695346),
  l = n(486472),
  r = n(430824);
n(626135);
var a = n(981631);
n(388032);
let s = 864e5 * a.eBq;

function o() {
  let t = i.h2.getSetting();
  return 0 === l.Z.totalUnavailableGuilds && (t = t.filter(t => null != r.Z.getGuild(t))), new Set(t)
}

function u() {
  let t = i.zA.getSetting();
  return 0 === l.Z.totalUnavailableGuilds && (t = t.filter(t => null != r.Z.getGuild(t))), new Set(t)
}

function c() {
  let t = i.SE.getSetting();
  return 0 === l.Z.totalUnavailableGuilds && (t = t.filter(t => null != r.Z.getGuild(t))), new Set(t)
}

function d() {
  let t = i.iH.getSetting();
  return 0 === l.Z.totalUnavailableGuilds && (t = t.filter(t => null != r.Z.getGuild(t))), new Set(t)
}

function g(t) {
  return (t & a.HGf) === a.HGf ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (t & a.SOq.MUTUAL_FRIENDS) === a.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (t & a.SOq.MUTUAL_GUILDS) === a.SOq.MUTUAL_GUILDS
  }
}

function _(t, e) {
  return !!(!e.verified || e.isStaff()) || null != t && s > Date.now() - new Date(t.created_at).getTime()
}