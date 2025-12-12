/** Chunk was on web.js **/
/** chunk id: 914498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GF: () => s,
  KX: () => a,
  j_: () => o,
  z$: () => l
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  o = function(e) {
    return e.VIEW = "view", e.PLAY = "play", e.CLOUD_PLAY = "cloud_play", e.JOIN = "join", e.ADD_APP = "add_app", e.JOIN_SERVER = "join_server", e.INVITE = "invite", e.SYNC = "sync", e.CONTENT = "content", e.BANNER = "banner", e.STREAM = "stream", e.CONNECT_ACCOUNT = "connect_account", e
  }({});

function a(e) {
  let {
    applicationId: t,
    linkType: n,
    area: o,
    referrerId: a,
    customId: s,
    isDeadEnd: l
  } = e;
  r.default.track(i.rMx.APP_EMBED_CLICKED, {
    application_id: t,
    link_type: n,
    area: o,
    referrer_id: a,
    custom_id: s,
    is_dead_end: l
  })
}

function s(e) {
  let {
    appId: t,
    linkType: n,
    referrerId: o,
    customId: a,
    guildId: s,
    channelId: l,
    messageId: c
  } = e;
  r.default.track(i.rMx.APP_EMBED_VIEWED, {
    application_id: t,
    link_type: n,
    referrer_id: o,
    custom_id: a,
    guild_id: s,
    channel_id: l,
    message_id: c
  })
}

function l(e, t, n, o) {
  r.default.track(i.rMx.APP_EMBED_LINK_SENT, {
    application_id: e,
    link_type: t,
    referrer_id: n,
    custom_id: o
  })
}