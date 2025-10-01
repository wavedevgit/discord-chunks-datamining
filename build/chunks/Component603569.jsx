/** Chunk was on 9452 **/
/** chunk id: 603569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk631885 = require("./631885.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk313789 = require("./313789.js"),
  Chunk54942 = require("./54942.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412297 = require("./412297.js");
let y = (0, Chunk509613.x1)(Chunk313789.n.FAMILY_CENTER_PANE, {
    useTitle: () => Chunk388032.intl.string(Chunk412297.default.RZqaJi),
    buildLayout: () => [],
    render: () => (0, Chunk951288.jsx)(Chunk54942.Z, {})
  }),
  N = (0, Chunk509613.wf)(Chunk313789.n.FAMILY_CENTER_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk412297.default.RZqaJi),
    icon: Chunk657707.BFJ,
    buildLayout: () => [y],
    legacySearchKey: Chunk726985.s6.PRIVACY_FAMILY_CENTER,
    trailing: {
      type: Chunk28682.PU.STRONGLY_DISCOURAGED_CUSTOM,
      dismissibleContentTypes: [Chunk704215.z.FAMILY_CENTER_NEW_BADGE],
      useDecoration: function(e) {
        let t = (0, s.gU)();
        return e === l.z.FAMILY_CENTER_NEW_BADGE ? (0, i.jsx)(u.IGR, {
          text: O.intl.string(O.t.y2b7CA)
        }) : t > 0 ? (0, i.jsx)(u.mAB, {
          count: t
        }) : null
      }
    }
  })