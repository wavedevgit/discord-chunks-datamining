/** Chunk was on 9452 **/
/** chunk id: 419477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  z: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk725727 = require("./725727.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk313789 = require("./313789.js"),
  Chunk387747 = require("./387747.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.x1)(Chunk313789.n.GIFT_PANE, {
    buildLayout: () => [],
    render: Chunk387747.Z
  }),
  S = (0, Chunk509613.wf)(Chunk313789.n.GIFT_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["jcSP+g"]),
    buildLayout: () => [E]
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.GIFT_SIDEBAR_ITEM, {
    icon: Chunk657707.OgN,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["jcSP+g"]),
    getLegacySearchKey: () => Chunk726985.s6.GIFT_INVENTORY,
    buildLayout: () => [S],
    trailing: {
      type: Chunk28682.PU.BADGE_COUNT,
      useCount: () => (0, Chunk725727.YO)().length
    }
  })