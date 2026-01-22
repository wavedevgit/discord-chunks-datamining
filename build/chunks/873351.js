/** Chunk was on 21738 **/
/** chunk id: 873351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk73153 = require("./73153.js"),
  Chunk613057 = require("./613057.js");
let l = {
  [require("./652215.js").e$_.SET_SUPPRESS_NOTIFICATIONS]: {
    scope: Chunk613057.hj,
    handler(e) {
      let {
        socket: t,
        args: {
          suppress_notifications: n,
          target_user_id: i
        }
      } = e;
      r.h.dispatch({
        type: "SET_RPC_NOTIFICATION_SETTINGS",
        socketId: t.id,
        suppressNotifications: n,
        targetUserId: i
      })
    }
  }
}