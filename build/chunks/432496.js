/** Chunk was on 62635 **/
r.d(t, {
  Z: () => a
});
var n = r(442837),
  i = r(570140),
  s = r(749210);
let l = {},
  o = 0;

function u(e) {
  var t, r;
  return null != (r = null == (t = l[e]) ? void 0 : t.fetchState) ? r : 0
}

function c() {
  l = {}
}
class d extends n.ZP.Store {
  isFetchingFriendsForGuild(e) {
    return 1 === u(e)
  }
  fetchFriendMembersIfNotFetched(e, t) {
    0 === u(e) && (l[e] = {
      fetchState: 1,
      foundMembers: 0,
      notFoundMembers: 0
    }, o = t.length, s.Z.requestMembersById(e, t, !1))
  }
}
let a = new d(i.Z, {
  CONNECTION_OPEN: c,
  LOGOUT: c,
  RELATIONSHIP_ADD: c,
  RELATIONSHIP_REMOVE: c,
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    var t, r;
    let n = e.chunks[0],
      {
        guildId: i
      } = n;
    1 === u(i) && (l[i].foundMembers += n.members.length, l[i].notFoundMembers += null != (r = null == (t = n.notFound) ? void 0 : t.length) ? r : 0, l[i].foundMembers + l[i].notFoundMembers >= o && (l[i].fetchState = 2))
  }
})