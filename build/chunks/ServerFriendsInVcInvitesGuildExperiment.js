/** Chunk was on 74318 **/
/** chunk id: 559310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  am: () => r,
  s6: () => a
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

function a(e) {
  let {
    autoTrackExposure: t,
    location: n,
    guildId: a
  } = e, {
    enabled: r
  } = l.W.getCurrentConfig({
    guildId: a,
    location: n
  });
  return i.getCurrentConfig({
    guildId: a,
    location: n
  }, {
    autoTrackExposure: t,
    disable: !r
  })
}

function r(e) {
  let {
    autoTrackExposure: t,
    location: n,
    guildId: a
  } = e, {
    enabled: r
  } = l.W.useExperiment({
    guildId: a,
    location: n
  });
  return i.useExperiment({
    guildId: a,
    location: n
  }, {
    autoTrackExposure: t,
    disable: !r
  })
}