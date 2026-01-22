/** Chunk was on 28979 **/
/** chunk id: 368607, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  u: () => _
}), require("./627968.js"), require("./64700.js");
var Chunk311907 = require("./311907.js");
require("./397927.js");
var Chunk264686 = require("./264686.js"),
  Chunk970931 = require("./970931.js"),
  Chunk419954 = require("./419954.js"),
  Chunk803224 = require("./803224.js"),
  Chunk780964 = require("./780964.js"),
  Chunk932055 = require("./932055.js"),
  Chunk985018 = require("./985018.jsx");
require("./467183.js");
let A = {
    useTitle: () => T.intl.string(T.t.jD1qzM),
    sound: "message1",
    useDisabled: Chunk970931.kB,
    useDisabledMessage: () => (0, s.kB)() ? T.intl.string(T.t.cIRG0s) : true
  },
  S = {
    useTitle: () => T.intl.string(T.t.XBrJT6),
    sound: "call_ringing"
  },
  E = (0, Chunk419954.zD)(Chunk780964.X.SELECTED_CHANNEL_NOTIFICATIONS, {
    useTitle: () => T.intl.string(T.t.TzjwV9),
    useValue: () => (0, n.bG)([u.A], () => u.A.getNotifyMessagesInSelectedChannel() && !u.A.getDisableAllSounds()),
    setValue: t => l.default.setNotifyMessagesInSelectedChannel(t),
    useDisabled: () => (0, n.bG)([u.A], () => u.A.getDisableAllSounds())
  }),
  d = (0, Chunk419954.zD)(Chunk780964.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
    useTitle: () => T.intl.string(T.t["2ZhCOd"]),
    useSubtitle: () => T.intl.string(T.t.EAKdPr),
    useValue: () => (0, n.bG)([u.A], () => u.A.getDisableAllSounds()),
    setValue: t => l.default.toggleDisableAllSounds(t)
  }),
  _ = (0, Chunk419954.FW)(Chunk780964.X.NOTIFICATION_SOUNDS_FIELD_SET, {
    useTitle: () => T.intl.string(T.t.ONU22R),
    variant: "separators",
    initialize: function() {
      return () => {
        (0, o.vd)()
      }
    },
    buildLayout: () => [(0, o.i)(A), E, (0, o.i)(S), d]
  })