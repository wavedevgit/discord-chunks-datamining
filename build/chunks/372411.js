/** Chunk was on 4670 **/
/** chunk id: 372411, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  E: () => _
});
var Chunk311907 = require("./311907.js"),
  Chunk264686 = require("./264686.js"),
  Chunk970931 = require("./970931.js"),
  Chunk419954 = require("./419954.js"),
  Chunk803224 = require("./803224.js"),
  Chunk780964 = require("./780964.js"),
  Chunk932055 = require("./932055.js"),
  Chunk985018 = require("./985018.jsx");
let T = {
    useTitle: () => d.intl.string(d.t.jD1qzM),
    sound: "message1",
    useDisabled: Chunk970931.kB,
    useDisabledMessage: () => (0, s.kB)() ? d.intl.string(d.t.cIRG0s) : true
  },
  c = {
    useTitle: () => d.intl.string(d.t.XBrJT6),
    sound: "call_ringing"
  },
  A = (0, Chunk419954.zD)(Chunk780964.X.SELECTED_CHANNEL_NOTIFICATIONS, {
    useTitle: () => d.intl.string(d.t.TzjwV9),
    useSubtitle: () => d.intl.format(d.t.OOiGCM, {
      onClick: () => (0, o.Jz)("message3")
    }),
    useValue: () => (0, n.bG)([a.A], () => a.A.getNotifyMessagesInSelectedChannel() && !a.A.getDisableAllSounds()),
    setValue: e => l.default.setNotifyMessagesInSelectedChannel(e),
    useDisabled: () => (0, n.bG)([a.A], () => a.A.getDisableAllSounds())
  }),
  S = (0, Chunk419954.zD)(Chunk780964.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
    useTitle: () => d.intl.string(d.t["2ZhCOd"]),
    useSubtitle: () => d.intl.string(d.t.EAKdPr),
    useValue: () => (0, n.bG)([a.A], () => a.A.getDisableAllSounds()),
    setValue: e => l.default.toggleDisableAllSounds(e)
  }),
  _ = (0, Chunk419954.D1)(Chunk780964.X.NOTIFICATION_SOUNDS_LIST, {
    initialize: function() {
      return () => {
        (0, o.vd)()
      }
    },
    buildLayout: () => [(0, o.i)(T), A, (0, o.i)(c), S]
  })