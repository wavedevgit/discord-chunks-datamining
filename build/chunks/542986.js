/** Chunk was on 21738 **/
/** chunk id: 542986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk686956 = require("./686956.js");
let a = {},
  s = 0;

function o(e) {
  var t, n;
  return null != (t = null == (n = a[e]) ? true : n.fetchState) ? t : 0
}

function c() {
  a = {}
}
class u extends Chunk311907.Ay.Store {
  isFetchingFriendsForGuild(e) {
    return 1 === o(e)
  }
  fetchFriendMembersIfNotFetched(e, t) {
    0 === o(e) && (a[e] = {
      fetchState: 1,
      foundMembers: 0,
      notFoundMembers: 0
    }, s = t.length, l.A.requestMembersById(e, t, false))
  }
}
let d = new u(Chunk73153.h, {
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
    1 === o(i) && (a[i].foundMembers += r.members.length, a[i].notFoundMembers += null != (t = null == (n = r.notFound) ? true : n.length) ? t : 0, a[i].foundMembers + a[i].notFoundMembers >= s && (a[i].fetchState = 2))
  }
})