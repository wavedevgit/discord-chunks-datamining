/** Chunk was on 77069 **/
/** chunk id: 320851, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  J: () => c
});
var Chunk323472 = require("./323472.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk299426 = require("./299426.jsx"),
  Chunk407458 = require("./407458.js"),
  Chunk388032 = require("./388032.jsx");
let o = [{
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.hK51Yg),
    sound: "deafen"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.XiejaJ),
    sound: "undeafen"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.w4m945),
    sound: "mute"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.YqAjXy),
    sound: "unmute"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.JoTq8n),
    sound: "camera_on"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["8P6tQ6"]),
    sound: "camera_off"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["juL9/L"]),
    sound: "disconnect"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.x98vQq),
    sound: "ptt_start"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["1HjRqC"]),
    sound: "ptt_stop"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["9JB1Ck"]),
    sound: "user_join"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.KUBBNt),
    sound: "user_leave"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.EZjqUT),
    sound: "user_moved"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.LnNlQh),
    sound: "call_calling"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.Nd8P5y),
    sound: "stream_started"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["9bYj+G"]),
    sound: "stream_ended"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.KccUI1),
    sound: "stream_user_joined"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.dsjkiN),
    sound: "stream_user_left"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.nFOcf9),
    sound: "activity_launch"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["a6lw/u"]),
    sound: "activity_end"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.KaFxrY),
    sound: "activity_user_join"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.S14z9n),
    sound: "activity_user_left"
  }, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.CP3DC3),
    sound: "reconnect"
  }],
  c = (0, Chunk509613.$l)(Chunk313789.n.VOICE_AND_VIDEO_SOUNDS_LIST, {
    collapseAfter: 4,
    useCollapsibleTitle: (t, e) => t ? a.intl.formatToPlainString(a.t["0JYT98"], {
      count: e
    }) : a.intl.formatToPlainString(a.t.ji1uNt, {
      count: e
    }),
    useCollapsedSubtitle: () => (0, Chunk323472.u)(Chunk313789.n.VOICE_AND_VIDEO_SOUNDS_LIST, {
      limit: 3
    }),
    ContextProvider: Chunk299426.u,
    buildLayout: () => o.map(t => (0, u.j)(t))
  })