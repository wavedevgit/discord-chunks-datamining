/** Chunk was on 4670 **/
/** chunk id: 897208, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  p: () => _
});
var Chunk311907 = require("./311907.js"),
  Chunk55619 = require("./55619.js"),
  Chunk77729 = require("./77729.js"),
  Chunk419954 = require("./419954.js"),
  Chunk351906 = require("./351906.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
    useTitle: () => o.intl.string(o.t["yR/d2T"]),
    useSubtitle: () => o.intl.string(o.t.RiIiPw),
    useValue: () => (0, n.bG)([a.A], () => {
      let {
        hidePersonalInformation: e
      } = a.A.getSettings();
      return e
    }),
    setValue: e => l.A.update({
      hidePersonalInformation: e
    })
  }),
  T = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
    useTitle: () => o.intl.string(o.t.uWBOri),
    useValue: () => (0, n.bG)([a.A], () => {
      let {
        hideInstantInvites: e
      } = a.A.getSettings();
      return e
    }),
    setValue: e => l.A.update({
      hideInstantInvites: e
    })
  }),
  c = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_DISABLE_SOUNDS, {
    useTitle: () => o.intl.string(o.t.OrqYDP),
    useValue: () => (0, n.bG)([a.A], () => {
      let {
        disableSounds: e
      } = a.A.getSettings();
      return e
    }),
    setValue: e => l.A.update({
      disableSounds: e
    })
  }),
  A = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t.sUAbLd),
    useValue: () => (0, n.bG)([a.A], () => {
      let {
        disableNotifications: e
      } = a.A.getSettings();
      return e
    }),
    setValue: e => l.A.update({
      disableNotifications: e
    })
  }),
  S = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
    useTitle: () => o.intl.string(o.t["iA81+a"]),
    useSubtitle: () => o.intl.string(o.t.P4vj0h),
    useValue: () => (0, n.bG)([a.A], () => {
      let {
        enableContentProtection: e
      } = a.A.getSettings();
      return e
    }),
    setValue: e => l.A.update({
      enableContentProtection: e
    }),
    usePredicate: () => {
      var e, t, i;
      return null != (e = null === s.A || true === s.A || null == (i = s.A.window) || null == (t = i.supportsContentProtection) ? true : t.call(i)) && e
    }
  }),
  _ = (0, Chunk419954.FW)(Chunk780964.X.STREAMER_MODE_OPTIONS_LIST, {
    useTitle: () => o.intl.string(o.t.UtW8R6),
    buildLayout: () => [d, T, c, A, S]
  })