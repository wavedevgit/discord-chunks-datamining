/** Chunk was on 4670 **/
/** chunk id: 811231, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Y: () => o
});
var Chunk419117 = require("./419117.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk932055 = require("./932055.js"),
  Chunk985018 = require("./985018.jsx");
let u = [{
    useTitle: () => a.intl.string(a.t.hK51Yg),
    sound: "deafen"
  }, {
    useTitle: () => a.intl.string(a.t.XiejaJ),
    sound: "undeafen"
  }, {
    useTitle: () => a.intl.string(a.t.w4m945),
    sound: "mute"
  }, {
    useTitle: () => a.intl.string(a.t.YqAjXy),
    sound: "unmute"
  }, {
    useTitle: () => a.intl.string(a.t.JoTq8n),
    sound: "camera_on"
  }, {
    useTitle: () => a.intl.string(a.t["8P6tQ6"]),
    sound: "camera_off"
  }, {
    useTitle: () => a.intl.string(a.t["juL9/L"]),
    sound: "disconnect"
  }, {
    useTitle: () => a.intl.string(a.t.x98vQq),
    sound: "ptt_start"
  }, {
    useTitle: () => a.intl.string(a.t["1HjRqC"]),
    sound: "ptt_stop"
  }, {
    useTitle: () => a.intl.string(a.t["9JB1Ck"]),
    sound: "user_join"
  }, {
    useTitle: () => a.intl.string(a.t.KUBBNt),
    sound: "user_leave"
  }, {
    useTitle: () => a.intl.string(a.t.EZjqUT),
    sound: "user_moved"
  }, {
    useTitle: () => a.intl.string(a.t.LnNlQh),
    sound: "call_calling"
  }, {
    useTitle: () => a.intl.string(a.t.Nd8P5y),
    sound: "stream_started"
  }, {
    useTitle: () => a.intl.string(a.t["9bYj+G"]),
    sound: "stream_ended"
  }, {
    useTitle: () => a.intl.string(a.t.KccUI1),
    sound: "stream_user_joined"
  }, {
    useTitle: () => a.intl.string(a.t.dsjkiN),
    sound: "stream_user_left"
  }, {
    useTitle: () => a.intl.string(a.t.nFOcf9),
    sound: "activity_launch"
  }, {
    useTitle: () => a.intl.string(a.t["a6lw/u"]),
    sound: "activity_end"
  }, {
    useTitle: () => a.intl.string(a.t.KaFxrY),
    sound: "activity_user_join"
  }, {
    useTitle: () => a.intl.string(a.t.S14z9n),
    sound: "activity_user_left"
  }, {
    useTitle: () => a.intl.string(a.t.CP3DC3),
    sound: "reconnect"
  }],
  o = (0, Chunk419954.D1)(Chunk780964.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
    collapseAfter: 4,
    useCollapsibleTitle: (e, t) => e ? a.intl.formatToPlainString(a.t["0JYT98"], {
      count: t
    }) : a.intl.formatToPlainString(a.t.ji1uNt, {
      count: t
    }),
    useCollapsedSubtitle: () => (0, n.A)(s.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
      limit: 3
    }),
    initialize: function() {
      return () => {
        (0, r.vd)()
      }
    },
    buildLayout: () => u.map(e => (0, r.i)(e))
  })