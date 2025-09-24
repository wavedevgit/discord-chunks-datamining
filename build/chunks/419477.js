/** Chunk was on 47129 **/
/** chunk id: 419477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk657707 = require("./657707.js"),
  Chunk725727 = require("./725727.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk313789 = require("./313789.js"),
  Chunk387747 = require("./387747.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.x1)(Chunk313789.n.GIFT_PANE, {
    getLayout: () => [],
    render: Chunk387747.Z
  }),
  g = (0, Chunk509613.wf)(Chunk313789.n.GIFT_PANEL, {
    icon: Chunk657707.OgN,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["jcSP+v"]),
    getLayout: () => [d],
    trailing: {
      type: Chunk28682.PU.BADGE_COUNT,
      useCount: () => (0, Chunk725727.YO)().length
    },
    legacySearchKey: Chunk726985.s6.GIFT_INVENTORY
  })