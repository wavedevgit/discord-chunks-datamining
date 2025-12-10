/** Chunk was on 77069 **/
/** chunk id: 50052, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => E
});
var Chunk442837 = require("./442837.js"),
  Chunk223245 = require("./223245.js"),
  Chunk579806 = require("./579806.js"),
  Chunk509613 = require("./509613.js"),
  Chunk246946 = require("./246946.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.MkvEgl),
    useValue: () => (0, Chunk442837.e7)([Chunk246946.Z], () => {
      let {
        hidePersonalInformation: t
      } = Chunk246946.Z.getSettings();
      return module
    }),
    setValue: t => l.Z.update({
      hidePersonalInformation: t
    })
  }),
  d = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_HIDE_INVITE_LINKS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.uWBOri),
    useValue: () => (0, Chunk442837.e7)([Chunk246946.Z], () => {
      let {
        hideInstantInvites: t
      } = Chunk246946.Z.getSettings();
      return module
    }),
    setValue: t => l.Z.update({
      hideInstantInvites: t
    })
  }),
  g = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_DISABLE_SOUNDS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.OrqYDP),
    useValue: () => (0, Chunk442837.e7)([Chunk246946.Z], () => {
      let {
        disableSounds: t
      } = Chunk246946.Z.getSettings();
      return module
    }),
    setValue: t => l.Z.update({
      disableSounds: t
    })
  }),
  S = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.sUAbLd),
    useValue: () => (0, Chunk442837.e7)([Chunk246946.Z], () => {
      let {
        disableNotifications: t
      } = Chunk246946.Z.getSettings();
      return module
    }),
    setValue: t => l.Z.update({
      disableNotifications: t
    })
  }),
  T = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["iA81+a"]),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.P4vj0h),
    useValue: () => (0, Chunk442837.e7)([Chunk246946.Z], () => {
      let {
        enableContentProtection: t
      } = Chunk246946.Z.getSettings();
      return module
    }),
    setValue: t => l.Z.update({
      enableContentProtection: t
    }),
    usePredicate: () => {
      var t, e, n;
      return null != (n = null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.window) || null == (t = exports.supportsContentProtection) ? true : module.call(exports)) && require
    }
  }),
  E = (0, Chunk509613.Uc)(Chunk313789.n.STREAMER_MODE_OPTIONS_LIST, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.UtW8R6),
    variant: "separators",
    buildLayout: () => [c, d, g, S, T]
  })