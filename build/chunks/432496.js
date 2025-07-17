/** Chunk was on 62635 **/
r.d(t, {
  Z: () => a
});
var n = r(442837),
  i = r(570140),
  u = r(749210);
let s = {},
  o = 0;

function l(e) {
  var t, r;
  return null != (r = null == (t = s[e]) ? void 0 : t.fetchState) ? r : 0
}

function c() {
  s = {}
}
class d extends n.ZP.Store {
  isFetchingFriendsForGuild(e) {
    return 1 === l(e)
  }
  fetchFriendMembersIfNotFetched(e, t) {
    0 === l(e) && (s[e] = {
      fetchState: 1,
      foundMembers: 0,
      notFoundMembers: 0
    }, o = t.length, u.Z.requestMembersById(e, t, !1))
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
    1 === l(i) && (s[i].foundMembers += n.members.length, s[i].notFoundMembers += null != (r = null == (t = n.notFound) ? void 0 : t.length) ? r : 0, s[i].foundMembers + s[i].notFoundMembers >= o && (s[i].fetchState = 2))
  }
})