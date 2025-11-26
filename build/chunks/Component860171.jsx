/** Chunk was on 9452 **/
/** chunk id: 860171, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  g: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk889029 = require("./889029.jsx"),
  Chunk290434 = require("./290434.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.x1)(Chunk313789.n.STREAMER_MODE_PANE, {
    buildLayout: () => [Chunk290434.Z],
    usePredicate: () => (0, Chunk526665.BK)("StreamerModePane")
  }),
  S = (0, Chunk509613.x1)(Chunk313789.n.STREAMER_MODE_PANE, {
    buildLayout: () => [],
    render: () => (0, Chunk54381.jsx)(Chunk889029.Z, {}),
    usePredicate: () => !(0, Chunk526665.BK)("StreamerModePane")
  }),
  T = (0, Chunk509613.wf)(Chunk313789.n.STREAMER_MODE_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.S5GfOW),
    buildLayout: () => (0, Chunk526665.Ml)("StreamerModePanel") ? [E] : [S]
  }),
  I = (0, Chunk509613.m7)(Chunk313789.n.STREAMER_MODE_SIDEBAR_ITEM, {
    icon: Chunk657707.m3e,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.S5GfOW),
    getLegacySearchKey: () => (0, Chunk526665.Ml)("StreamerModePanel") ? true : Chunk726985.s6.STREAMER_MODE,
    buildLayout: () => [T]
  })