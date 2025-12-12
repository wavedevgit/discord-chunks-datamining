/** Chunk was on web.js **/
/** chunk id: 26732, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $_: () => a,
  Eq: () => s,
  UE: () => o
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  a = function(e) {
    return e.MUTED = "muted", e.UNMUTED = "unmuted", e
  }({}),
  o = function(e) {
    return e.MINI_GAME_PROFILE_BELL_ICON = "mini_game_profile_bell_icon", e.GAME_CONTEXT_MENU = "game_mentions_context_menu", e
  }({});
let s = e => {
  let {
    gameName: t,
    applicationId: n,
    label: a,
    source: o
  } = e;
  return r.default.track(i.rMx.GAME_MENTIONS_NOTIFICATION_SETTING_UPDATED, {
    game_name: t,
    application_id: n,
    label: a,
    source: o
  })
}