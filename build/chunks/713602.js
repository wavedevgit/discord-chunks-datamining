/** Chunk was on 9452 **/
/** chunk id: 713602, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  B: () => E
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk906467 = require("./906467.js"),
  Chunk313789 = require("./313789.js"),
  Chunk956699 = require("./956699.jsx"),
  Chunk726985 = require("./726985.js");
let o = (0, Chunk509613.x1)(Chunk313789.n.DEVELOPER_OPTIONS_PANE, {
    buildLayout: () => [],
    render: Chunk956699.Z
  }),
  c = (0, Chunk509613.wf)(Chunk313789.n.DEVELOPER_OPTIONS_PANEL, {
    useTitle: () => "Developer Options",
    buildLayout: () => [o]
  }),
  E = (0, Chunk509613.m7)(Chunk313789.n.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
    icon: Chunk657707.Che,
    useTitle: () => "Developer Options",
    legacySearchKey: Chunk726985.s6.DEVELOPER_OPTIONS,
    usePredicate: () => Chunk906467.Z.isDeveloper,
    buildLayout: () => [c]
  })