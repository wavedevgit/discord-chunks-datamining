/** Chunk was on web.js **/
/** chunk id: 946255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  let {
    type: t,
    source: n,
    userId: a,
    guildId: s,
    channelId: o,
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
  r.default.track(i.HAw.APPLICATION_OPENED, {
    type: t,
    source: n,
    guild_id: s,
    channel_id: o,
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