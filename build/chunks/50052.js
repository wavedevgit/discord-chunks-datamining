/** Chunk was on 77069 **/
/** chunk id: 50052, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => _
});
var Chunk442837 = require("./442837.js"),
  Chunk223245 = require("./223245.js"),
  Chunk579806 = require("./579806.js"),
  Chunk509613 = require("./509613.js"),
  Chunk246946 = require("./246946.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
    useTitle: () => o.intl.string(o.t["yR/d2T"]),
    useSubtitle: () => o.intl.string(o.t.RiIiPw),
    useValue: () => (0, i.e7)([r.Z], () => {
      let {
        hidePersonalInformation: t
      } = r.Z.getSettings();
      return t
    }),
    setValue: t => l.Z.update({
      hidePersonalInformation: t
    })
  }),
  S = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_HIDE_INVITE_LINKS, {
    useTitle: () => o.intl.string(o.t.uWBOri),
    useValue: () => (0, i.e7)([r.Z], () => {
      let {
        hideInstantInvites: t
      } = r.Z.getSettings();
      return t
    }),
    setValue: t => l.Z.update({
      hideInstantInvites: t
    })
  }),
  c = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_DISABLE_SOUNDS, {
    useTitle: () => o.intl.string(o.t.OrqYDP),
    useValue: () => (0, i.e7)([r.Z], () => {
      let {
        disableSounds: t
      } = r.Z.getSettings();
      return t
    }),
    setValue: t => l.Z.update({
      disableSounds: t
    })
  }),
  E = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t.sUAbLd),
    useValue: () => (0, i.e7)([r.Z], () => {
      let {
        disableNotifications: t
      } = r.Z.getSettings();
      return t
    }),
    setValue: t => l.Z.update({
      disableNotifications: t
    })
  }),
  d = (0, Chunk509613.qs)(Chunk313789.n.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
    useTitle: () => o.intl.string(o.t["iA81+a"]),
    useSubtitle: () => o.intl.string(o.t.P4vj0h),
    useValue: () => (0, i.e7)([r.Z], () => {
      let {
        enableContentProtection: t
      } = r.Z.getSettings();
      return t
    }),
    setValue: t => l.Z.update({
      enableContentProtection: t
    }),
    usePredicate: () => {
      var t, e, n;
      return null != (n = null === s.Z || true === s.Z || null == (e = s.Z.window) || null == (t = e.supportsContentProtection) ? true : t.call(e)) && n
    }
  }),
  _ = (0, Chunk509613.Uc)(Chunk313789.n.STREAMER_MODE_OPTIONS_LIST, {
    useTitle: () => o.intl.string(o.t.UtW8R6),
    variant: "separators",
    buildLayout: () => [T, S, c, E, d]
  })