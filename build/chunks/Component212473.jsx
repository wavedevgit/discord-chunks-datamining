/** Chunk was on 9452 **/
/** chunk id: 212473, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  KL: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk703288 = require("./703288.jsx"),
  Chunk574755 = require("./574755.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.x1)(Chunk313789.n.CLIPS_PANE, {
    buildLayout: () => [],
    render: () => (0, Chunk951288.jsx)(Chunk574755.Z, {})
  }),
  S = (0, Chunk509613.wf)(Chunk313789.n.CLIPS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.z2jK6X),
    useBadge: () => (0, Chunk951288.jsx)(Chunk703288.Z, {}),
    buildLayout: () => [d]
  }),
  T = (0, Chunk509613.m7)(Chunk313789.n.CLIPS_SIDEBAR_ITEM, {
    icon: Chunk657707.AlX,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.z2jK6X),
    getLegacySearchKey: () => Chunk726985.s6.CLIPS,
    buildLayout: () => [S],
    usePredicate: () => !(0, Chunk526665.BK)("ClipsPanel")
  })