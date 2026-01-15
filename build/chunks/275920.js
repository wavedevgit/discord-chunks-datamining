/** Chunk was on web.js **/
/** chunk id: 275920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  let {
    type: t,
    source: n,
    userId: a,
    guildId: o,
    channelId: s,
    channelType: l,
    applicationId: c,
    partyId: u,
    messageId: d,
    locationObject: f,
    analyticsLocations: p,
    referrerId: _,
    inviterUserId: h,
    remoteJoinPlatform: m
  } = e;
  r.default.track(i.rMx.APPLICATION_OPENED, {
    type: t,
    source: n,
    guild_id: o,
    channel_id: s,
    channel_type: l,
    application_id: c,
    party_id: null != u ? u : true,
    other_user_id: a,
    message_id: d,
    location: f,
    location_stack: p,
    referrer_id: _,
    invite_inviter_id: h,
    remote_join_platform: m
  })
}