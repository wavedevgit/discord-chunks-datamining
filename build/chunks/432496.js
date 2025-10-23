/** Chunk was on 1272 **/
/** chunk id: 432496, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk749210 = require("./749210.js");
let a = {},
  s = 0;

function o(e) {
  var t, n;
  return null != (n = null == (t = a[e]) ? true : t.fetchState) ? n : 0
}

function c() {
  a = {}
}
class u extends Chunk442837.ZP.Store {
  isFetchingFriendsForGuild(e) {
    return 1 === o(e)
  }
  fetchFriendMembersIfNotFetched(e, t) {
    0 === o(e) && (a[e] = {
      fetchState: 1,
      foundMembers: 0,
      notFoundMembers: 0
    }, s = t.length, l.Z.requestMembersById(e, t, false))
  }
}
let d = new u(Chunk570140.Z, {
  CONNECTION_OPEN: c,
  LOGOUT: c,
  RELATIONSHIP_ADD: c,
  RELATIONSHIP_REMOVE: c,
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    var t, n;
    let r = e.chunks[0],
      {
        guildId: i
      } = r;
    1 === o(i) && (a[i].foundMembers += r.members.length, a[i].notFoundMembers += null != (n = null == (t = r.notFound) ? true : t.length) ? n : 0, a[i].foundMembers + a[i].notFoundMembers >= s && (a[i].fetchState = 2))
  }
})