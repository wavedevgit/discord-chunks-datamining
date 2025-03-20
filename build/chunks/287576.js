/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => A
});
var r = n(192379),
  i = n(725803),
  s = n(766434),
  a = n(310291),
  l = n(674563),
  o = n(198139);

function A(e) {
  var t;
  let {
    application: n,
    loading: A
  } = (0, i.Z)(e, l.wW.GUILD_ROLE_SUBSCRIPTIONS), {
    payoutsByPeriod: c,
    loading: d
  } = (0, a.Z)(null == n ? void 0 : n.id, {
    groupType: o.uw.GUILD_PRODUCT,
    teamId: null == n ? void 0 : null === (t = n.team) || void 0 === t ? void 0 : t.id
  }), {
    currentPeriod: u,
    previousPeriods: g,
    metrics: f
  } = r.useMemo(() => {
    let {
      currentPeriod: e,
      previousPeriods: t
    } = (0, s.Br)(c), n = (0, s.Uj)(e, t[0]);
    return {
      currentPeriod: e,
      previousPeriods: t,
      metrics: n
    }
  }, [c]);
  return {
    loading: A || d,
    payoutsByPeriod: c,
    currentPeriod: u,
    previousPeriods: g,
    metrics: f,
    application: n
  }
}