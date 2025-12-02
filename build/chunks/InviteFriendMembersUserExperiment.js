/** Chunk was on 64271 **/
/** chunk id: 756679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Jv: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk141537 = require("./141537.js");
let l = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-11_invite_friend_members",
    label: "Show Friends in Server on Invite Modal",
    defaultConfig: {
      showFriendsInServer: false,
      showInviter: false
    },
    treatments: [{
      id: 1,
      label: "Show Friends in Server",
      config: {
        showFriendsInServer: true,
        showInviter: false
      }
    }, {
      id: 2,
      label: "Show Friends in Server and Inviter",
      config: {
        showFriendsInServer: true,
        showInviter: true
      }
    }]
  }),
  o = e => (0, i.Z6)(l, e)