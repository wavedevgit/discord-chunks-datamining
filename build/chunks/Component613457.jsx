/** Chunk was on web.js **/
/** chunk id: 613457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk706752 = require("./706752.js"),
  Chunk985925 = require("./985925.js"),
  Chunk997509 = require("./997509.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk474397 = require("./474397.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk961350 = require("./961350.js"),
  Chunk309010 = require("./309010.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk486974 = require("./486974.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  let {
    user: t,
    guildId: n,
    channelId: y,
    onClose: O,
    appContext: A
  } = e, {
    newestAnalyticsLocation: v
  } = (0, s.Ay)(), S = (0, u.aL)(), I = (0, i.bG)([p.default], () => p.default.getId() === (null == t ? true : t.id)), T = (0, l.q)(null != n ? n : null), C = (0, i.bG)([_.A], () => null != y ? y : _.A.getChannelId(n, true), [y, n]);
  return null == n || !T || I ? null : (0, r.jsx)(h.br, {
    action: "PRESS_MOD_VIEW",
    icon: a.quN,
    tooltipText: b.intl.string(b.t.kj3tz2),
    onClick: () => {
      c.A.close(), null != C && (0, f.iN)(C), (0, d.A)(A), S.dispatch(m.jej.POPOUT_CLOSE), (0, o.z)(n, t.id, null != C ? C : g.VV.MEMBER_SAFETY, {
        modViewPanel: E.g.INFO,
        sourceLocation: v
      }), null == O || O()
    }
  })
}