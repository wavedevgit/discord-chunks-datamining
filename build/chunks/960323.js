/** Chunk was on 9452 **/
/** chunk id: 960323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk604224 = require("./604224.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.VOICE_AND_VIDEO_PANE, {
    buildLayout: () => [],
    render: Chunk604224.Z
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
    icon: Chunk657707.S6n,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.B1fFpa),
    buildLayout: () => [c],
    usePredicate: () => Chunk131951.Z.isSupported(),
    legacySearchKey: Chunk726985.s6.VOICE_AND_VIDEO
  })