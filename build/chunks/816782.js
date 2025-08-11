/** Chunk was on 25548 **/
/** chunk id: 816782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk570140 = require("./570140.js");
let r = {
  toggleMembersSection() {
    Chunk570140.Z.dispatch({
      type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
    })
  },
  toggleUserProfileSidebarSection() {
    Chunk570140.Z.dispatch({
      type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION"
    })
  },
  toggleSummariesSection() {
    Chunk570140.Z.dispatch({
      type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
    })
  }
}