/** Chunk was on 29709 **/
/** chunk id: 313426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk772848 = require("./772848.js"),
  Chunk570140 = require("./570140.js"),
  Chunk643327 = require("./643327.js");
let s = {
  createGroup(e) {
    let t = (0, r.Z)();
    return i.Z.dispatch({
      type: "CREATE_FRIEND_GROUP",
      groupId: t,
      name: e
    }), t
  },
  updateGroup(e, t) {
    i.Z.dispatch({
      type: "UPDATE_FRIEND_GROUP",
      groupId: e,
      name: t
    })
  },
  deleteGroup(e) {
    i.Z.dispatch({
      type: "DELETE_FRIEND_GROUP",
      groupId: e
    })
  },
  reorderGroups(e) {
    i.Z.dispatch({
      type: "REORDER_FRIEND_GROUPS",
      groupIds: e
    })
  },
  addUsersToGroup(e, t) {
    let n = Array.isArray(t) ? t : [t];
    i.Z.dispatch({
      type: "ADD_USERS_TO_GROUP",
      groupId: e,
      userIds: n
    })
  },
  removeUsersFromGroup(e, t) {
    let n = Array.isArray(t) ? t : [t];
    i.Z.dispatch({
      type: "REMOVE_USERS_FROM_GROUP",
      groupId: e,
      userIds: n
    })
  },
  toggleUserInGroup(e, t) {
    let n = l.Z.getGroup(e);
    null != n && (n.userIds.includes(t) ? this.removeUsersFromGroup(e, t) : this.addUsersToGroup(e, t))
  }
}