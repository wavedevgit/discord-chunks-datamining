/** Chunk was on 9452 **/
/** chunk id: 263735, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk400287 = require("./400287.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.CHAT_PANE, {
    buildLayout: () => [],
    render: () => (0, Chunk54381.jsx)(Chunk400287.Z, {})
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.CHAT_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["/VQax8"]),
    buildLayout: () => [c]
  }),
  T = (0, Chunk509613.m7)(Chunk313789.n.CHAT_SIDEBAR_ITEM, {
    icon: Chunk657707.kBi,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["/VQax8"]),
    getLegacySearchKey: () => Chunk726985.s6.CHAT,
    buildLayout: () => [E]
  })