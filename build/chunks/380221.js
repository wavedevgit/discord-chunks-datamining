/** Chunk was on 53714 **/
/** chunk id: 380221, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = new Map,
  o = new Set;
class l extends Chunk442837.ZP.Store {
  getUserIdentities(e) {
    var t;
    return null != (t = a.get(e)) ? t : null
  }
  isFetchingUser(e) {
    return o.has(e)
  }
}
let c = new l(Chunk570140.Z, {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: function(e) {
    o.add(e.userId)
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: function(e) {
    o.delete(e.userId), a.set(e.userId, e.identities)
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: function(e) {
    o.delete(e.userId)
  },
  USER_APPLICATION_IDENTITY_REMOVE: function(e) {
    let t = a.get(e.user_id);
    if (null == t) returnfalse;
    a.set(e.user_id, t.filter(t => t.application_id !== e.application_id))
  }
})