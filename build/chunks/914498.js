/** Chunk was on web.js **/
/** chunk id: 914498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GF: () => l,
  KX: () => s,
  Un: () => o,
  Yu: () => c,
  j_: () => a,
  z$: () => u
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  o = function(e) {
    return e.ACTIVITY = "activity", e.APP_DISCOVERY = "app_discovery", e.OAUTH = "oauth", e.CUSTOM_ACTIVITY_LINK = "custom_activity_link", e.ACTIVITY_INVITE = "activity_invite", e.ACTIVITY_INSTANCE = "activity_instance", e.RICH_PRESENCE_INVITE = "rich_presence_invite", e.LEGACY_RICH_PRESENCE_INVITE = "legacy_rich_presence_invite", e.REQUEST_TO_STREAM = "request_to_stream", e.UNKNOWN = "unknown", e
  }({}),
  a = function(e) {
    return e.VIEW = "view", e.PLAY = "play", e.CLOUD_PLAY = "cloud_play", e.JOIN = "join", e.ADD_APP = "add_app", e.JOIN_SERVER = "join_server", e.INVITE = "invite", e.SYNC = "sync", e.CONTENT = "content", e.BANNER = "banner", e.STREAM = "stream", e
  }({});

function s(e, t, n, o, a) {
  r.default.track(i.rMx.APP_EMBED_CLICKED, {
    application_id: e,
    link_type: t,
    area: n,
    referrer_id: o,
    custom_id: a
  })
}

function l(e, t, n, o) {
  r.default.track(i.rMx.APP_EMBED_VIEWED, {
    application_id: e,
    link_type: t,
    referrer_id: n,
    custom_id: o
  })
}

function c(e, t) {
  r.default.track(i.rMx.APP_EMBED_LINK_COPIED, {
    application_id: e,
    link_type: t
  })
}

function u(e, t, n, o) {
  r.default.track(i.rMx.APP_EMBED_LINK_SENT, {
    application_id: e,
    link_type: t,
    referrer_id: n,
    custom_id: o
  })
}