/** Chunk was on 77069 **/
/** chunk id: 603569, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  a: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk631885 = require("./631885.js"),
  Chunk106939 = require("./106939.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk231582 = require("./231582.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517319 = require("./517319.js");
let I = (0, Chunk509613.wf)(Chunk313789.n.FAMILY_CENTER_PANEL, {
    usePredicate: () => !(0, c.gN)("LegacyFamilyCenterPanel"),
    useTitle: () => _.intl.string(g.default.RZqaJn),
    StronglyDiscouragedCustomComponent: Chunk106939.M,
    buildLayout: () => []
  }),
  N = (0, Chunk509613.wf)(Chunk313789.n.FAMILY_CENTER_PANEL, {
    usePredicate: () => (0, c.gN)("FamilyCenterPanel"),
    useTitle: () => _.intl.string(g.default.RZqaJn),
    buildLayout: () => [E.W]
  }),
  A = (0, Chunk509613.m7)(Chunk313789.n.FAMILY_CENTER_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(g.default.RZqaJn),
    getLegacySearchKey: () => (0, c.Gl)("FamilyCenterPanel") ? true : d.s6.PRIVACY_FAMILY_CENTER,
    icon: Chunk657707.BFJ,
    trailing: {
      type: Chunk970013.W.STRONGLY_DISCOURAGED_CUSTOM,
      getDismissibleContentTypes: () => [s.z.FAMILY_CENTER_NEW_BADGE],
      useCustomDecoration: function(t) {
        let e = (0, r.gU)();
        return t === s.z.FAMILY_CENTER_NEW_BADGE ? (0, i.jsx)(u.IGR, {
          text: _.intl.string(_.t.y2b7CA)
        }) : e > 0 ? (0, i.jsx)(u.mAB, {
          count: e
        }) : null
      }
    },
    buildLayout: () => (0, c.Gl)("FamilyCenterPanel") ? [N] : [I]
  })