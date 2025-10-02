/** Chunk was on 7654 **/
/** chunk id: 559310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  am: () => r,
  s6: () => s
});
var Chunk973285 = require("./973285.js");
let i = (0, require("./818083.js").B)({
  id: "2025-10_server_friends_in_vc_invites",
  label: "Server Friends in VC Invites",
  kind: "guild",
  defaultConfig: {
    isFriendsInVCInvitesEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Friends in VC Invites",
    config: {
      isFriendsInVCInvitesEnabled: true
    }
  }]
});

function s(e) {
  let {
    autoTrackExposure: t,
    location: n,
    guildId: s
  } = e, {
    enabled: r
  } = l.W.getCurrentConfig({
    guildId: s,
    location: n
  });
  return i.getCurrentConfig({
    guildId: s,
    location: n
  }, {
    autoTrackExposure: t,
    disable: r
  })
}

function r(e) {
  let {
    autoTrackExposure: t,
    location: n,
    guildId: s
  } = e, {
    enabled: r
  } = l.W.useExperiment({
    guildId: s,
    location: n
  });
  return i.useExperiment({
    guildId: s,
    location: n
  }, {
    autoTrackExposure: t,
    disable: r
  })
}