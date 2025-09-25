/** Chunk was on 53714 **/
/** chunk id: 380221, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = new Map,
  a = new Set;
class l extends Chunk442837.ZP.Store {
  getUserIdentities(e) {
    var t;
    return null != (t = o.get(e)) ? t : null
  }
  isFetchingUser(e) {
    return a.has(e)
  }
}
let c = new l(Chunk570140.Z, {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: function(e) {
    a.add(e.userId)
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: function(e) {
    a.delete(e.userId), o.set(e.userId, e.identities)
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: function(e) {
    a.delete(e.userId)
  }
})