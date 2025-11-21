/** Chunk was on 9452 **/
/** chunk id: 837061, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  x: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk736752 = require("./736752.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.x1)(Chunk313789.n.ACCOUNT_PANE, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["JAIM/m"]),
    buildLayout: () => [],
    render: Chunk736752.Z
  }),
  c = (0, Chunk509613.wf)(Chunk313789.n.ACCOUNT_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["JAIM/m"]),
    buildLayout: () => [o]
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.ACCOUNT_SIDEBAR_ITEM, {
    icon: Chunk657707.tBG,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["JAIM/m"]),
    getLegacySearchKey: () => Chunk726985.s6.ACCOUNT,
    buildLayout: () => [c]
  })