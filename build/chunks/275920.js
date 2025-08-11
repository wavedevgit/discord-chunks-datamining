/** Chunk was on web.js **/
/** chunk id: 275920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let {
    type: t,
    source: n,
    userId: o,
    guildId: a,
    channelId: s,
    channelType: l,
    applicationId: c,
    partyId: u,
    messageId: d,
    locationObject: f,
    analyticsLocations: _,
    referrerId: p,
    inviterUserId: h
  } = e;
  r.default.track(i.rMx.APPLICATION_OPENED, {
    type: t,
    source: n,
    guild_id: a,
    channel_id: s,
    channel_type: l,
    application_id: c,
    party_id: null != u ? u : true,
    other_user_id: o,
    message_id: d,
    location: f,
    location_stack: _,
    referrer_id: p,
    invite_inviter_id: h
  })
}