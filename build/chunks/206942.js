/** Chunk was on 9452 **/
/** chunk id: 206942, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./951288.js"), require("./647438.js");
var Chunk442837 = require("./442837.js");
require("./481060.js");
var Chunk292556 = require("./292556.js"),
  Chunk734934 = require("./734934.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk299426 = require("./299426.jsx"),
  Chunk407458 = require("./407458.js"),
  Chunk388032 = require("./388032.jsx");
require("./453934.js");
let d = {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.jD1qzM),
    sound: "message1",
    useDisabled: Chunk734934.p,
    useDisabledMessage: () => (0, Chunk734934.p)() ? Chunk388032.intl.string(Chunk388032.t.cIRG0s) : true
  },
  S = {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.XBrJT6),
    sound: "call_ringing"
  },
  T = (0, Chunk509613.qs)(Chunk313789.n.SELECTED_CHANNEL_NOTIFICATIONS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.TzjwV9),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getNotifyMessagesInSelectedChannel()),
    setValue: t => l.default.setNotifyMessagesInSelectedChannel(t)
  }),
  O = (0, Chunk509613.qs)(Chunk313789.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["2ZhCOd"]),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["+B0XLE"]),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDisableAllSounds()),
    setValue: t => l.default.toggleDisableAllSounds(t)
  }),
  g = (0, Chunk509613.$l)(Chunk313789.n.NOTIFICATION_SOUNDS_LIST, {
    collapseAfter: 4,
    useCollapsibleTitle: (t, e) => t ? E.intl.formatToPlainString(E.t["0JYT98"], {
      count: e
    }) : E.intl.formatToPlainString(E.t.ji1uNt, {
      count: e
    }),
    ContextProvider: Chunk299426.u,
    buildLayout: () => [(0, Chunk407458.j)(d), T, (0, Chunk407458.j)(S), O]
  })