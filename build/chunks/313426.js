/** Chunk was on 77635 **/
/** chunk id: 313426, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk772848 = require("./772848.js"),
  Chunk570140 = require("./570140.js"),
  Chunk643327 = require("./643327.js");
let u = {
  createGroup(e) {
    let r = (0, n.Z)();
    return s.Z.dispatch({
      type: "CREATE_FRIEND_GROUP",
      groupId: r,
      name: e
    }), r
  },
  updateGroup(e, r) {
    s.Z.dispatch({
      type: "UPDATE_FRIEND_GROUP",
      groupId: e,
      name: r
    })
  },
  deleteGroup(e) {
    s.Z.dispatch({
      type: "DELETE_FRIEND_GROUP",
      groupId: e
    })
  },
  reorderGroups(e) {
    s.Z.dispatch({
      type: "REORDER_FRIEND_GROUPS",
      groupIds: e
    })
  },
  addUsersToGroup(e, r) {
    let t = Array.isArray(r) ? r : [r];
    s.Z.dispatch({
      type: "ADD_USERS_TO_GROUP",
      groupId: e,
      userIds: t
    })
  },
  removeUsersFromGroup(e, r) {
    let t = Array.isArray(r) ? r : [r];
    s.Z.dispatch({
      type: "REMOVE_USERS_FROM_GROUP",
      groupId: e,
      userIds: t
    })
  },
  toggleUserInGroup(e, r) {
    let t = i.Z.getGroup(e);
    null != t && (t.userIds.includes(r) ? this.removeUsersFromGroup(e, r) : this.addUsersToGroup(e, r))
  }
}