/** Chunk was on 47129 **/
/** chunk id: 367889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk692547 = require("./692547.js"),
  Chunk160913 = require("./160913.js"),
  Chunk813732 = require("./813732.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk869235 = require("./869235.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let _ = (0, Chunk509613.x1)(Chunk869235.t.SUBSCRIPTIONS_PANE, {
    getLayout: () => [],
    render: Chunk813732.Z
  }),
  E = (0, Chunk509613.wf)(Chunk869235.t.SUBSCRIPTIONS_PANEL, {
    icon: Chunk657707.SrA,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.trSpHR),
    getLayout: () => [_],
    trailing: {
      useDecoration: () => (0, Chunk160913.U)() ? (0, Chunk951288.jsx)(Chunk657707.Mgn, {
        size: "xs",
        color: Chunk692547.Z.unsafe_rawColors.YELLOW_300
      }) : null
    },
    legacySearchKey: Chunk726985.s6.SUBSCRIPTIONS
  })