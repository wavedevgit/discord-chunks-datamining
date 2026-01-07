/** Chunk was on 77069 **/
/** chunk id: 32832, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  u: () => _
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
require("./530049.js");
let S = {
    useTitle: () => T.intl.string(T.t.jD1qzM),
    sound: "message1",
    useDisabled: Chunk734934.p,
    useDisabledMessage: () => (0, s.p)() ? T.intl.string(T.t.cIRG0s) : true
  },
  c = {
    useTitle: () => T.intl.string(T.t.XBrJT6),
    sound: "call_ringing"
  },
  E = (0, Chunk509613.qs)(Chunk313789.n.SELECTED_CHANNEL_NOTIFICATIONS, {
    useTitle: () => T.intl.string(T.t.TzjwV9),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getNotifyMessagesInSelectedChannel() && !r.Z.getDisableAllSounds()),
    setValue: t => l.default.setNotifyMessagesInSelectedChannel(t),
    useDisabled: () => (0, i.e7)([r.Z], () => r.Z.getDisableAllSounds())
  }),
  d = (0, Chunk509613.qs)(Chunk313789.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
    useTitle: () => T.intl.string(T.t["2ZhCOd"]),
    useSubtitle: () => T.intl.string(T.t.EAKdPr),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getDisableAllSounds()),
    setValue: t => l.default.toggleDisableAllSounds(t)
  }),
  _ = (0, Chunk509613.Uc)(Chunk313789.n.NOTIFICATION_SOUNDS_FIELD_SET, {
    useTitle: () => T.intl.string(T.t.ONU22R),
    variant: "separators",
    initialize: function() {
      return () => {
        (0, o.WY)()
      }
    },
    buildLayout: () => [(0, o.j$)(S), E, (0, o.j$)(c), d]
  })