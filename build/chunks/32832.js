/** Chunk was on 77069 **/
/** chunk id: 32832, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  u: () => E
}), require("./54381.js"), require("./473749.js");
var Chunk442837 = require("./442837.js");
require("./481060.js");
var Chunk292556 = require("./292556.js"),
  Chunk734934 = require("./734934.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk407458 = require("./407458.js"),
  Chunk388032 = require("./388032.jsx");
require("./732213.js");
let d = {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.jD1qzM),
    sound: "message1",
    useDisabled: Chunk734934.p,
    useDisabledMessage: () => (0, Chunk734934.p)() ? Chunk388032.intl.string(Chunk388032.t.cIRG0s) : true
  },
  g = {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.XBrJT6),
    sound: "call_ringing"
  },
  S = (0, Chunk509613.qs)(Chunk313789.n.SELECTED_CHANNEL_NOTIFICATIONS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.TzjwV9),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getNotifyMessagesInSelectedChannel() && !Chunk292959.Z.getDisableAllSounds()),
    setValue: t => l.default.setNotifyMessagesInSelectedChannel(t),
    useDisabled: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDisableAllSounds())
  }),
  T = (0, Chunk509613.qs)(Chunk313789.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["2ZhCOd"]),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.EAKdPr),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDisableAllSounds()),
    setValue: t => l.default.toggleDisableAllSounds(t)
  }),
  E = (0, Chunk509613.Uc)(Chunk313789.n.NOTIFICATION_SOUNDS_FIELD_SET, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.ONU22R),
    variant: "separators",
    initialize: function() {
      return () => {
        (0, Chunk407458.WY)()
      }
    },
    buildLayout: () => [(0, Chunk407458.j$)(d), S, (0, Chunk407458.j$)(g), T]
  })