/** Chunk was on 92524 **/
/** chunk id: 813872, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk189432 = require("./189432.js"),
  Chunk189357 = require("./189357.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk887413 = require("./887413.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx");

function S(e) {
  let {
    userId: t,
    guildId: n,
    channelId: S,
    location: P,
    onAction: y,
    appContext: j
  } = e, I = i.useContext(v.AnalyticsContext), M = (0, d.Aq)(), C = (0, r.e7)([Z.Z], () => null != S ? S : Z.Z.getChannelId(n, true), [S, n]), _ = (0, r.e7)([b.ZP], () => null == n ? null : b.ZP.getMember(n, t), [n, t]), A = (0, s.m)(n);
  return null != n && null != _ && A ? (0, l.jsx)(a.sNh, {
    id: "mod-view",
    label: h.intl.string(h.t.kj3tz2),
    action: () => {
      null == y || y(), (0, c.i)(j), M.dispatch(p.CkL.POPOUT_CLOSE);
      let e = m.Z.getChannel(C),
        l = {
          modViewPanel: O.k.INFO,
          sourceLocation: null != P ? P : I.location
        };
      if ((null == e ? true : e.isThread()) && null != e.parent_id) {
        f.ZP.getCurrentSidebarChannelId(e.parent_id) === e.id && (o.Z.dispatch({
          type: "SIDEBAR_CLOSE",
          baseChannelId: e.parent_id
        }), (0, g.Kh)(e.id)), (0, u.r)(n, t, e.parent_id, l);
        return
      }(0, u.r)(n, t, null != C ? C : E.oC.MEMBER_SAFETY, l)
    }
  }) : null
}