/** Chunk was on 1272 **/
/** chunk id: 885381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk186901 = require("./186901.js");
let l = {
  [require("./981631.js").Etm.SET_SUPPRESS_NOTIFICATIONS]: {
    scope: Chunk186901.lH,
    handler(e) {
      let {
        socket: t,
        args: {
          suppress_notifications: n,
          target_user_id: i
        }
      } = e;
      r.Z.dispatch({
        type: "SET_RPC_NOTIFICATION_SETTINGS",
        socketId: t.id,
        suppressNotifications: n,
        targetUserId: i
      })
    }
  }
}