/** Chunk was on 26976 **/
/** chunk id: 813872, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk189432 = require("./189432.js"),
  Chunk189357 = require("./189357.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk887413 = require("./887413.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    userId: t,
    guildId: n,
    channelId: h,
    location: E,
    onAction: v,
    appContext: j
  } = e, P = i.useContext(f.AnalyticsContext), p = (0, u.Aq)(), S = (0, r.e7)([g.Z], () => null != h ? h : g.Z.getChannelId(n, true), [h, n]), y = (0, r.e7)([c.ZP], () => null == n ? null : c.ZP.getMember(n, t), [n, t]), C = (0, s.m)(n);
  return null != n && null != y && C ? (0, l.jsx)(o.sNh, {
    id: "mod-view",
    label: O.intl.string(O.t.kj3tz2),
    action: () => {
      null == v || v(), (0, d.i)(j), (0, a.r)(n, t, null != S ? S : b.oC.MEMBER_SAFETY, {
        modViewPanel: m.k.INFO,
        sourceLocation: null != E ? E : P.location
      }), p.dispatch(Z.CkL.POPOUT_CLOSE)
    }
  }) : null
}