/** Chunk was on 77069 **/
/** chunk id: 603569, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  a: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk631885 = require("./631885.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk54942 = require("./54942.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435757 = require("./435757.js");
let E = (0, Chunk509613.wf)(Chunk313789.n.FAMILY_CENTER_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk435757.default.RZqaJn),
    StronglyDiscouragedCustomComponent: Chunk54942.Z,
    buildLayout: () => []
  }),
  I = (0, Chunk509613.m7)(Chunk313789.n.FAMILY_CENTER_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk435757.default.RZqaJn),
    getLegacySearchKey: () => Chunk726985.s6.PRIVACY_FAMILY_CENTER,
    icon: Chunk657707.BFJ,
    trailing: {
      type: Chunk970013.W.STRONGLY_DISCOURAGED_CUSTOM,
      getDismissibleContentTypes: () => [Chunk704215.z.FAMILY_CENTER_NEW_BADGE],
      useCustomDecoration: function(t) {
        let e = (0, r.gU)();
        return t === s.z.FAMILY_CENTER_NEW_BADGE ? (0, i.jsx)(u.IGR, {
          text: T.intl.string(T.t.y2b7CA)
        }) : e > 0 ? (0, i.jsx)(u.mAB, {
          count: e
        }) : null
      }
    },
    buildLayout: () => [E]
  })