/** Chunk was on web.js **/
/** chunk id: 604681, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk73153 = require("./73153.js");
let i = {
  toggleMembersSection() {
    r.h.dispatch({
      type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
    })
  },
  toggleUserProfileSidebarSection() {
    r.h.dispatch({
      type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION"
    })
  },
  toggleSummariesSection() {
    r.h.dispatch({
      type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
    })
  }
}