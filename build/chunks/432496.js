/** Chunk was on 62635 **/
r.d(t, {
  Z: () => a
});
var n = r(442837),
  i = r(570140),
  s = r(749210);
let l = {},
  u = 0;

function o(e) {
  var t, r;
  return null != (r = null == (t = l[e]) ? void 0 : t.fetchState) ? r : 0
}

function d() {
  l = {}
}
class c extends n.ZP.Store {
  isFetchingFriendsForGuild(e) {
    return 1 === o(e)
  }
  fetchFriendMembersIfNotFetched(e, t) {
    0 === o(e) && (l[e] = {
      fetchState: 1,
      foundMembers: 0,
      notFoundMembers: 0
    }, u = t.length, s.Z.requestMembersById(e, t, !1))
  }
}
let a = new c(i.Z, {
  CONNECTION_OPEN: d,
  LOGOUT: d,
  RELATIONSHIP_ADD: d,
  RELATIONSHIP_REMOVE: d,
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    var t, r;
    let n = e.chunks[0],
      {
        guildId: i
      } = n;
    1 === o(i) && (l[i].foundMembers += n.members.length, l[i].notFoundMembers += null != (r = null == (t = n.notFound) ? void 0 : t.length) ? r : 0, l[i].foundMembers + l[i].notFoundMembers >= u && (l[i].fetchState = 2))
  }
})