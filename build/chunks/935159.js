/** Chunk was on 97492 **/
/** chunk id: 935159, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lx: () => i,
  Nt: () => a,
  iF: () => l,
  pE: () => s
});
var Chunk73153 = require("./73153.js");

function l(e) {
  let {
    eventId: t,
    stageId: n
  } = e;
  (null != t || null != n) && r.h.dispatch({
    type: "LIVE_CHANNEL_NOTICE_HIDE",
    eventId: t,
    stageId: n
  })
}

function i(e) {
  r.h.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE",
    eventId: e
  })
}

function s(e) {
  r.h.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN",
    guildEventId: e
  })
}

function a(e) {
  r.h.dispatch({
    type: "EVENT_BANNER_DISMISS",
    eventId: e
  })
}