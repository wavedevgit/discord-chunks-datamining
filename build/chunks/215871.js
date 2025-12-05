/** Chunk was on 77069 **/
/** chunk id: 215871, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => E
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk327885 = require("./327885.jsx"),
  Chunk168308 = require("./168308.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.OVERLAY_PANE, {
    render: Chunk327885.Z,
    buildLayout: () => []
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.OVERLAY_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["9cb1Uz"]),
    buildLayout: () => [c]
  }),
  E = (0, Chunk509613.m7)(Chunk313789.n.OVERLAY_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["9cb1Uz"]),
    getLegacySearchKey: () => Chunk726985.s6.OVERLAY,
    icon: Chunk657707.epB,
    usePredicate: Chunk168308.bC,
    buildLayout: () => [d]
  })