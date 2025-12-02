/** Chunk was on 77069 **/
/** chunk id: 51435, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  J: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk327192 = require("./327192.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.CONNECTIONS_PANE, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["3fe7U5"]),
    buildLayout: () => [],
    render: () => (0, Chunk54381.jsx)(Chunk327192.Z, {})
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.CONNECTIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["3fe7U5"]),
    buildLayout: () => [c]
  }),
  E = (0, Chunk509613.m7)(Chunk313789.n.CONNECTIONS_SIDEBAR_ITEM, {
    icon: Chunk657707.xPt,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["3fe7U5"]),
    getLegacySearchKey: () => Chunk726985.s6.CONNECTIONS,
    buildLayout: () => [d]
  })