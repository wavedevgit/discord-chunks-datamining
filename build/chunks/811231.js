/** Chunk was on 30485 **/
/** chunk id: 811231, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Y: () => o
});
var Chunk419117 = require("./419117.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk932055 = require("./932055.js"),
  Chunk985018 = require("./985018.jsx");
let a = [{
    useTitle: () => u.intl.string(u.t.hK51Yg),
    sound: "deafen"
  }, {
    useTitle: () => u.intl.string(u.t.XiejaJ),
    sound: "undeafen"
  }, {
    useTitle: () => u.intl.string(u.t.w4m945),
    sound: "mute"
  }, {
    useTitle: () => u.intl.string(u.t.YqAjXy),
    sound: "unmute"
  }, {
    useTitle: () => u.intl.string(u.t.JoTq8n),
    sound: "camera_on"
  }, {
    useTitle: () => u.intl.string(u.t["8P6tQ6"]),
    sound: "camera_off"
  }, {
    useTitle: () => u.intl.string(u.t["juL9/L"]),
    sound: "disconnect"
  }, {
    useTitle: () => u.intl.string(u.t.x98vQq),
    sound: "ptt_start"
  }, {
    useTitle: () => u.intl.string(u.t["1HjRqC"]),
    sound: "ptt_stop"
  }, {
    useTitle: () => u.intl.string(u.t["9JB1Ck"]),
    sound: "user_join"
  }, {
    useTitle: () => u.intl.string(u.t.KUBBNt),
    sound: "user_leave"
  }, {
    useTitle: () => u.intl.string(u.t.EZjqUT),
    sound: "user_moved"
  }, {
    useTitle: () => u.intl.string(u.t.LnNlQh),
    sound: "call_calling"
  }, {
    useTitle: () => u.intl.string(u.t.Nd8P5y),
    sound: "stream_started"
  }, {
    useTitle: () => u.intl.string(u.t["9bYj+G"]),
    sound: "stream_ended"
  }, {
    useTitle: () => u.intl.string(u.t.KccUI1),
    sound: "stream_user_joined"
  }, {
    useTitle: () => u.intl.string(u.t.dsjkiN),
    sound: "stream_user_left"
  }, {
    useTitle: () => u.intl.string(u.t.nFOcf9),
    sound: "activity_launch"
  }, {
    useTitle: () => u.intl.string(u.t["a6lw/u"]),
    sound: "activity_end"
  }, {
    useTitle: () => u.intl.string(u.t.KaFxrY),
    sound: "activity_user_join"
  }, {
    useTitle: () => u.intl.string(u.t.S14z9n),
    sound: "activity_user_left"
  }, {
    useTitle: () => u.intl.string(u.t.CP3DC3),
    sound: "reconnect"
  }],
  o = (0, Chunk419954.D1)(Chunk780964.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
    collapseAfter: 4,
    useCollapsibleTitle: (t, e) => t ? u.intl.formatToPlainString(u.t["0JYT98"], {
      count: e
    }) : u.intl.formatToPlainString(u.t.ji1uNt, {
      count: e
    }),
    useCollapsedSubtitle: () => (0, n.A)(s.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
      limit: 3
    }),
    initialize: function() {
      return () => {
        (0, r.vd)()
      }
    },
    buildLayout: () => a.map(t => (0, r.i)(t))
  })