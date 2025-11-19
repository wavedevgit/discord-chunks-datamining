/** Chunk was on 9452 **/
/** chunk id: 603569, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  a: () => g
});
var Chunk54381 = require("./54381.js"),
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
  Chunk744038 = require("./744038.js");
let I = (0, Chunk509613.x1)(Chunk313789.n.FAMILY_CENTER_PANE, {
    useTitle: () => Chunk388032.intl.string(Chunk744038.default.RZqaJn),
    buildLayout: () => [],
    render: () => (0, Chunk54381.jsx)(Chunk54942.Z, {})
  }),
  O = (0, Chunk509613.wf)(Chunk313789.n.FAMILY_CENTER_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk744038.default.RZqaJn),
    buildLayout: () => [I]
  }),
  g = (0, Chunk509613.m7)(Chunk313789.n.FAMILY_CENTER_SIDEBAR_ITEM, {
    icon: Chunk657707.BFJ,
    useTitle: () => Chunk388032.intl.string(Chunk744038.default.RZqaJn),
    getLegacySearchKey: () => Chunk726985.s6.PRIVACY_FAMILY_CENTER,
    buildLayout: () => [O],
    trailing: {
      type: Chunk28682.PU.STRONGLY_DISCOURAGED_CUSTOM,
      getDismissibleContentTypes: () => [Chunk704215.z.FAMILY_CENTER_NEW_BADGE],
      useDecoration: function(t) {
        let e = (0, s.gU)();
        return t === u.z.FAMILY_CENTER_NEW_BADGE ? (0, i.jsx)(r.IGR, {
          text: S.intl.string(S.t.y2b7CA)
        }) : e > 0 ? (0, i.jsx)(r.mAB, {
          count: e
        }) : null
      }
    }
  })