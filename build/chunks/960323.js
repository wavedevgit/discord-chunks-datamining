/** Chunk was on 9452 **/
/** chunk id: 960323, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  K: () => A
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk604224 = require("./604224.jsx"),
  Chunk901567 = require("./901567.js"),
  Chunk98022 = require("./98022.jsx"),
  Chunk90794 = require("./90794.js"),
  Chunk756893 = require("./756893.js"),
  Chunk927947 = require("./927947.js"),
  Chunk776570 = require("./776570.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.x1)(Chunk313789.n.VOICE_AND_VIDEO_PANE, {
    buildLayout: () => [],
    render: Chunk604224.Z,
    usePredicate: () => !(0, Chunk526665.BK)("LegacyVoiceAndVideoPane")
  }),
  y = (0, Chunk509613.x1)(Chunk313789.n.VOICE_AND_VIDEO_PANE, {
    buildLayout: () => [Chunk776570.Z, Chunk901567.Z, Chunk927947.Z, Chunk756893.Z, Chunk90794.Z, Chunk98022.Z],
    usePredicate: () => (0, Chunk526665.BK)("VoiceAndVideoPane")
  }),
  b = (0, Chunk509613.wf)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.B1fFpf),
    buildLayout: () => (0, Chunk526665.Ml)("VoiceAndVideoPanel") ? [y] : [g]
  }),
  A = (0, Chunk509613.m7)(Chunk313789.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
    icon: Chunk657707.S6n,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.B1fFpf),
    usePredicate: () => Chunk131951.Z.isSupported(),
    legacySearchKey: Chunk726985.s6.VOICE_AND_VIDEO,
    buildLayout: () => [b]
  })