/** Chunk was on 62635 **/
/** chunk id: 432496, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk749210 = require("./749210.js");
let s = {},
  o = 0;

function l(e) {
  var t, r;
  return null != (r = null == (t = s[e]) ? true : t.fetchState) ? r : 0
}

function c() {
  s = {}
}
class d extends Chunk442837.ZP.Store {
  isFetchingFriendsForGuild(e) {
    return 1 === l(e)
  }
  fetchFriendMembersIfNotFetched(e, t) {
    0 === l(e) && (s[e] = {
      fetchState: 1,
      foundMembers: 0,
      notFoundMembers: 0
    }, o = t.length, u.Z.requestMembersById(e, t, false))
  }
}
let a = new d(Chunk570140.Z, {
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
    1 === l(i) && (s[i].foundMembers += n.members.length, s[i].notFoundMembers += null != (r = null == (t = n.notFound) ? true : t.length) ? r : 0, s[i].foundMembers + s[i].notFoundMembers >= o && (s[i].fetchState = 2))
  }
})