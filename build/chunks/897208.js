/** Chunk was on 28979 **/
/** chunk id: 897208, original params: t,e,i (module,exports,require) **/
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
let T = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
    useTitle: () => o.intl.string(o.t["yR/d2T"]),
    useSubtitle: () => o.intl.string(o.t.RiIiPw),
    useValue: () => (0, n.bG)([u.A], () => {
      let {
        hidePersonalInformation: t
      } = u.A.getSettings();
      return t
    }),
    setValue: t => l.A.update({
      hidePersonalInformation: t
    })
  }),
  A = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
    useTitle: () => o.intl.string(o.t.uWBOri),
    useValue: () => (0, n.bG)([u.A], () => {
      let {
        hideInstantInvites: t
      } = u.A.getSettings();
      return t
    }),
    setValue: t => l.A.update({
      hideInstantInvites: t
    })
  }),
  d = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_DISABLE_SOUNDS, {
    useTitle: () => o.intl.string(o.t.OrqYDP),
    useValue: () => (0, n.bG)([u.A], () => {
      let {
        disableSounds: t
      } = u.A.getSettings();
      return t
    }),
    setValue: t => l.A.update({
      disableSounds: t
    })
  }),
  S = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t.sUAbLd),
    useValue: () => (0, n.bG)([u.A], () => {
      let {
        disableNotifications: t
      } = u.A.getSettings();
      return t
    }),
    setValue: t => l.A.update({
      disableNotifications: t
    })
  }),
  E = (0, Chunk419954.zD)(Chunk780964.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
    useTitle: () => o.intl.string(o.t["iA81+a"]),
    useSubtitle: () => o.intl.string(o.t.P4vj0h),
    useValue: () => (0, n.bG)([u.A], () => {
      let {
        enableContentProtection: t
      } = u.A.getSettings();
      return t
    }),
    setValue: t => l.A.update({
      enableContentProtection: t
    }),
    usePredicate: () => {
      var t, e, i;
      return null != (t = null === s.A || true === s.A || null == (i = s.A.window) || null == (e = i.supportsContentProtection) ? true : e.call(i)) && t
    }
  }),
  _ = (0, Chunk419954.FW)(Chunk780964.X.STREAMER_MODE_OPTIONS_LIST, {
    useTitle: () => o.intl.string(o.t.UtW8R6),
    buildLayout: () => [T, A, d, S, E]
  })