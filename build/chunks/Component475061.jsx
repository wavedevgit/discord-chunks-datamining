/** Chunk was on 28979 **/
/** chunk id: 475061, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  p: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk843401 = require("./843401.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk902713 = require("./902713.js"),
  Chunk428961 = require("./428961.js"),
  Chunk639500 = require("./639500.jsx"),
  Chunk985018 = require("./985018.jsx");

function E() {
  return (0, n.jsx)(u.A, {
    sourcePage: "voice"
  })
}
let d = (0, Chunk419954.zZ)(Chunk780964.X.VOICE_CATEGORY, {
  useTitle: () => S.intl.string(S.t.K3lovD),
  useNotice: function() {
    let t = (0, u.I)("voice");
    return l.useMemo(() => t.canPrompt ? {
      type: r.W.STRONGLY_DISCOURAGED_CUSTOM,
      notice: E
    } : null, [t.canPrompt])
  },
  buildLayout: () => [o.a, T.d, A.L]
})