/** Chunk was on 98829 **/
n.d(t, {
  Mt: () => h,
  li: () => _,
  s4: () => E,
  up: () => A,
  zv: () => f
}), n(388685), n(539854);
var i = n(73800),
  r = n(106351),
  l = n(442837);
n(592125);
var a = n(984933),
  u = n(914010);
n(709054);
var d = n(853856),
  o = n(362658),
  c = n(434065),
  s = n(981631);

function _(e) {
  let {
    favoritesEnabled: t,
    hasStaffPrivileges: n
  } = (0, o.z)("useCanFavoriteChannel"), i = (0, l.e7)([d.Z], () => d.Z.isFavorite(e.id)), r = e.isDM() || e.isThread();
  return t && !__OVERLAY__ && !i && (!r || n)
}

function E(e) {
  return (0, l.e7)([d.Z], () => d.Z.getFavorite(e))
}

function f() {
  return (0, l.e7)([a.ZP], () => a.ZP.getChannels(s.I_8))[r.d.GUILD_CATEGORY].map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function h() {
  return (0, l.e7)([u.Z], () => u.Z.getGuildId()) === s.I_8
}

function A() {
  let {
    isFavoritesPerk: e
  } = (0, o.z)("useFavoriteAdded"), t = (0, c.r)(), n = i.useCallback(() => {
    e && t.notifyFavoriteAdded()
  }, [t, e]), r = i.useCallback(() => {
    e && t.clearFavoriteAdded()
  }, [t, e]);
  return {
    favoriteAdded: t.favoriteAdded,
    notifyFavoriteAdded: n,
    clearFavoriteAdded: r
  }
}