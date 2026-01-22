/** Chunk was on 91042 **/
/** chunk id: 121127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk706752 = require("./706752.js"),
  Chunk985925 = require("./985925.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk474397 = require("./474397.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk486974 = require("./486974.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    userId: t,
    guildId: n,
    channelId: h,
    location: j,
    onAction: x,
    appContext: S
  } = e, M = i.useContext(O.AnalyticsContext), C = (0, u.aL)(), D = (0, r.bG)([m.A], () => null != h ? h : m.A.getChannelId(n, true), [h, n]), P = (0, r.bG)([f.Ay], () => null == n ? null : f.Ay.getMember(n, t), [n, t]), I = (0, s.q)(n);
  return null != n && null != P && I ? (0, l.jsx)(a.Drp, {
    id: "mod-view",
    label: v.intl.string(v.t.kj3tz2),
    action: () => {
      null == x || x(), (0, c.A)(S), C.dispatch(p.jej.POPOUT_CLOSE);
      let e = g.A.getChannel(D),
        l = {
          modViewPanel: E.g.INFO,
          sourceLocation: null != j ? j : M.location
        };
      if ((null == e ? true : e.isThread()) && null != e.parent_id) {
        b.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id && (o.h.dispatch({
          type: "SIDEBAR_CLOSE",
          baseChannelId: e.parent_id
        }), (0, A.iN)(e.id)), (0, d.z)(n, t, e.parent_id, l);
        return
      }(0, d.z)(n, t, null != D ? D : y.VV.MEMBER_SAFETY, l)
    }
  }) : null
}