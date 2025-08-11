/** Chunk was on web.js **/
/** chunk id: 73752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2021-04_longer_group_dm_invites",
  label: "Longer Group DM Invites",
  defaultConfig: {
    inviteMaxAgeSeconds: 86400
  },
  treatments: [{
    id: 1,
    label: "Makes group DM invites expire after 1 week.",
    config: {
      inviteMaxAgeSeconds: 604800
    }
  }]
})