/** Chunk was on 77069 **/
/** chunk id: 960323, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  K: () => f
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk604224 = require("./604224.jsx"),
  Chunk901567 = require("./901567.js"),
  Chunk279362 = require("./279362.js"),
  Chunk556080 = require("./556080.js"),
  Chunk90794 = require("./90794.js"),
  Chunk756893 = require("./756893.js"),
  Chunk927947 = require("./927947.js"),
  Chunk776570 = require("./776570.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let O = (0, Chunk509613.x1)(Chunk313789.n.VOICE_AND_VIDEO_PANE, {
    usePredicate: () => !(0, Chunk526665.BK)("LegacyVoiceAndVideoPane"),
    render: Chunk604224.Z,
    buildLayout: () => []
  }),
  N = (0, Chunk509613.x1)(Chunk313789.n.VOICE_AND_VIDEO_PANE, {
    usePredicate: () => (0, Chunk526665.BK)("VoiceAndVideoPane"),
    buildLayout: () => [Chunk776570.Z, Chunk556080.W, Chunk901567.V, Chunk927947.d, Chunk756893.g, Chunk90794.d, Chunk279362.g]
  }),
  A = (0, Chunk509613.wf)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.B1fFpf),
    buildLayout: () => (0, Chunk526665.Ml)("VoiceAndVideoPanel") ? [N] : [O]
  }),
  f = (0, Chunk509613.m7)(Chunk313789.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.B1fFpf),
    getLegacySearchKey: () => (0, Chunk526665.Ml)("VoiceAndVideoPanel") ? true : Chunk726985.s6.VOICE_AND_VIDEO,
    icon: Chunk657707.S6n,
    usePredicate: () => Chunk131951.Z.isSupported(),
    buildLayout: () => [A]
  })