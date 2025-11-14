/** Chunk was on web.js **/
/** chunk id: 522651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => s,
  v: () => l
});
var Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  s = function(e) {
    return e.MIC = "Mic", e.CAMERA = "Camera", e.DEAFEN = "Deafen", e.STREAM = "Stream", e.ACTIVITY = "Activity", e.SOUNDBOARD = "Soundboard", e.GIFTING = "Gifting", e.EMOJI = "Emoji", e.DISCONNECT = "Disconnect", e.LEAVE_ACTIVITY = "Leave Activity", e.STOP_WATCHING = "Stop Watching", e.POPOUT = "Popout", e.STAY_ON_TOP = "Stay On Top", e.FULL_SCREEN = "Full Screen", e.JOIN_CALL = "Join Call", e.JOIN_VIDEO_CALL = "Join Video Call", e.MORE = "More", e.CHAT = "Chat", e.INVITE = "Invite", e.FOCUS = "Focus", e.GRID = "Grid", e.CLIP = "Clip", e.VOLUME = "Volume", e.REQUEST_TO_SPEAK = "Request To Speak", e.SPEAK_ON_STAGE = "Speak on Stage", e.MOVE_TO_AUDIENCE = "Move to Audience", e.JOIN_STAGE = "Join Stage", e.LEAVE_STAGE = "Leave Stage", e.STAGE_MUSIC = "Stage Music", e.OPEN_REQUEST_TO_SPEAK_SIDEBAR = "Open Request To Speak Sidebar", e.KRISP = "Krisp", e.CHANNEL_LINK = "Channel Link", e.CONNECTION_STATUS = "Connection Status", e.VOICE_USER = "Voice User", e.STREAM_SETTINGS = "Stream Settings", e
  }({});

function l(e, t, n) {
  var s;
  let l = i.Z.getChannelId(),
    c = i.Z.getGuildId(),
    u = null == (s = r.Z.getChannel(l)) ? true : s.type;
  a.default.track(o.rMx.CALL_BUTTON_CLICKED, {
    location: e,
    button_name: t,
    toggled_active: n,
    guild_id: c,
    channel_id: l,
    channel_type: u
  })
}