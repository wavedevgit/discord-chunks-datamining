/** Chunk was on 83037 **/
/** chunk id: 756679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Jv: () => s,
  v9: () => a,
  xY: () => c
}), require("./388685.js");
var Chunk818083 = require("./818083.js"),
  Chunk141537 = require("./141537.js"),
  Chunk981631 = require("./981631.js");
let o = (0, Chunk818083.B)({
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
  a = e => (0, i.sD)(o, e),
  s = e => (0, i.Z6)(o, e);

function c(e) {
  if (null == e) returnfalse;
  let t = e.features;
  return Array.isArray(t) ? !t.includes(l.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) : !(t instanceof Set) || !t.has(l.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
}