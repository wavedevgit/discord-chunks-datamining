/** Chunk was on 62635 **/
r.d(t, {
  Z: () => a
});
var n = r(442837),
  s = r(570140),
  i = r(749210);
let l = {},
  u = 0;

function o(e) {
  var t, r;
  return null != (r = null == (t = l[e]) ? void 0 : t.fetchState) ? r : 0
}

function c() {
  l = {}
}
class d extends n.ZP.Store {
  isFetchingFriendsForGuild(e) {
    return 1 === o(e)
  }
  fetchFriendMembersIfNotFetched(e, t) {
    0 === o(e) && (l[e] = {
      fetchState: 1,
      foundMembers: 0,
      notFoundMembers: 0
    }, u = t.length, i.Z.requestMembersById(e, t, !1))
  }
}
let a = new d(s.Z, {
  CONNECTION_OPEN: c,
  LOGOUT: c,
  RELATIONSHIP_ADD: c,
  RELATIONSHIP_REMOVE: c,
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    var t, r;
    let n = e.chunks[0],
      {
        guildId: s
      } = n;
    1 === o(s) && (l[s].foundMembers += n.members.length, l[s].notFoundMembers += null != (r = null == (t = n.notFound) ? void 0 : t.length) ? r : 0, l[s].foundMembers + l[s].notFoundMembers >= u && (l[s].fetchState = 2))
  }
})