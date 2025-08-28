/** Chunk was on 47129 **/
/** chunk id: 960323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk604224 = require("./604224.jsx"),
  Chunk869235 = require("./869235.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk869235.t.VOICE_AND_VIDEO_PANE, {
    getLayout: () => [],
    render: Chunk604224.Z
  }),
  d = (0, Chunk509613.wf)(Chunk869235.t.VOICE_AND_VIDEO_PANEL, {
    icon: Chunk657707.S6n,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.B1fFpa),
    getLayout: () => [c],
    usePredicate: () => Chunk131951.Z.isSupported(),
    legacySearchKey: Chunk726985.s6.VOICE_AND_VIDEO
  })