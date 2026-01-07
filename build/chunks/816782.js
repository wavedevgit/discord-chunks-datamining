/** Chunk was on web.js **/
/** chunk id: 816782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");
let i = {
  toggleMembersSection() {
    r.Z.dispatch({
      type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
    })
  },
  toggleUserProfileSidebarSection() {
    r.Z.dispatch({
      type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION"
    })
  },
  toggleSummariesSection() {
    r.Z.dispatch({
      type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
    })
  }
}