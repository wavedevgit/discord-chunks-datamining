/** Chunk was on 28979 **/
/** chunk id: 773140, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  q: () => O
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk71995 = require("./71995.jsx"),
  Chunk573858 = require("./573858.js"),
  Chunk490107 = require("./490107.js"),
  Chunk945928 = require("./945928.js"),
  Chunk108804 = require("./108804.js"),
  Chunk198987 = require("./198987.js"),
  Chunk315943 = require("./315943.js"),
  Chunk475061 = require("./475061.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let c = (0, Chunk419954.t_)(Chunk780964.X.VOICE_AND_VIDEO_PANEL, {
    useTitle: () => g.intl.string(g.t.B1fFpf),
    StronglyDiscouragedCustomComponent: Chunk71995.A,
    buildLayout: () => []
  }),
  N = (0, Chunk419954.t_)(Chunk780964.X.VOICE_AND_VIDEO_PANEL, {
    useTitle: () => g.intl.string(g.t.B1fFpf),
    buildLayout: () => [_.p, A.Q, o.i, d.H, E.t, S.U, T.r]
  }),
  O = (0, Chunk419954.i4)(Chunk780964.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
    useTitle: () => g.intl.string(g.t.B1fFpf),
    usePredicate: () => s.A.isSupported(),
    icon: Chunk934551.MicrophoneIcon,
    getLegacySearchKey: () => (0, u.qz)("VoiceAndVideoPanel") ? true : I.H.VOICE_AND_VIDEO,
    buildLayout: () => [(0, u.qz)("VoiceAndVideoPanel") ? N : c]
  })