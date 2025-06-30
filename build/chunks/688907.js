/** Chunk was on 93955 **/
n.d(t, {
  BH: () => c,
  MH: () => s,
  j4: () => d,
  nC: () => u
});
var a = n(442837),
  r = n(524437),
  i = n(761781),
  o = n(695346);

function c() {
  return l(o.YT.useSetting(), (0, a.e7)([i.Z], () => i.Z.currentUserApplicationIds.size > 0))
}

function s() {
  return l(o.YT.getSetting(), i.Z.currentUserApplicationIds.size > 0)
}

function l(e, t) {
  return e === r.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? t ? r.Tv.ONLY_GAMES_PLAYED : r.Tv.ACTIVITY_NOTIFICATIONS_ENABLED : e !== r.Tv.ONLY_GAMES_PLAYED || t ? e : r.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
}

function u() {
  return o.Qq.useSetting()
}

function d() {
  return o.Qq.getSetting()
}