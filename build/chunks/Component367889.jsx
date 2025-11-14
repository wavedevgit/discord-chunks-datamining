/** Chunk was on 9452 **/
/** chunk id: 367889, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk160913 = require("./160913.js"),
  Chunk813732 = require("./813732.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk313789 = require("./313789.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.x1)(Chunk313789.n.SUBSCRIPTIONS_PANE, {
    buildLayout: () => [],
    render: Chunk813732.Z
  }),
  I = (0, Chunk509613.wf)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.trSpHX),
    buildLayout: () => [d]
  }),
  O = (0, Chunk509613.m7)(Chunk313789.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
    icon: Chunk657707.XOf,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.trSpHX),
    getLegacySearchKey: () => Chunk726985.s6.SUBSCRIPTIONS,
    buildLayout: () => [I],
    trailing: {
      type: Chunk28682.PU.STRONGLY_DISCOURAGED_CUSTOM,
      useDecoration: () => (0, Chunk160913.U)() ? (0, Chunk951288.jsx)(Chunk793030.Mgn, {
        size: "xs",
        color: Chunk692547.Z.unsafe_rawColors.YELLOW_300
      }) : null
    }
  })