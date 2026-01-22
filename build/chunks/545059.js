/** Chunk was on 46636 **/
/** chunk id: 545059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk835245 = require("./835245.js"),
  Chunk73153 = require("./73153.js"),
  Chunk870391 = require("./870391.js");
let s = {
  createGroup(e) {
    let t = (0, r.A)();
    return i.h.dispatch({
      type: "CREATE_FRIEND_GROUP",
      groupId: t,
      name: e
    }), t
  },
  updateGroup(e, t) {
    i.h.dispatch({
      type: "UPDATE_FRIEND_GROUP",
      groupId: e,
      name: t
    })
  },
  deleteGroup(e) {
    i.h.dispatch({
      type: "DELETE_FRIEND_GROUP",
      groupId: e
    })
  },
  reorderGroups(e) {
    i.h.dispatch({
      type: "REORDER_FRIEND_GROUPS",
      groupIds: e
    })
  },
  addUsersToGroup(e, t) {
    let n = Array.isArray(t) ? t : [t];
    i.h.dispatch({
      type: "ADD_USERS_TO_GROUP",
      groupId: e,
      userIds: n
    })
  },
  removeUsersFromGroup(e, t) {
    let n = Array.isArray(t) ? t : [t];
    i.h.dispatch({
      type: "REMOVE_USERS_FROM_GROUP",
      groupId: e,
      userIds: n
    })
  },
  toggleUserInGroup(e, t) {
    let n = l.A.getGroup(e);
    null != n && (n.userIds.includes(t) ? this.removeUsersFromGroup(e, t) : this.addUsersToGroup(e, t))
  }
}