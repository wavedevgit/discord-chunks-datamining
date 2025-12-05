/** Chunk was on 34740 **/
/** chunk id: 504160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L_: () => l,
  Xy: () => o,
  _6: () => a,
  ji: () => r
});
var Chunk570140 = require("./570140.js");

function r(e) {
  let {
    eventId: t,
    stageId: n
  } = e;
  (null != t || null != n) && i.Z.dispatch({
    type: "LIVE_CHANNEL_NOTICE_HIDE",
    eventId: t,
    stageId: n
  })
}

function l(e) {
  i.Z.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE",
    eventId: e
  })
}

function a(e) {
  i.Z.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN",
    guildEventId: e
  })
}

function o(e) {
  i.Z.dispatch({
    type: "EVENT_BANNER_DISMISS",
    eventId: e
  })
}