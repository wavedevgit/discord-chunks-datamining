/** Chunk was on 77069 **/
/** chunk id: 776570, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk825655 = require("./825655.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk665388 = require("./665388.js"),
  Chunk589741 = require("./589741.js"),
  Chunk97951 = require("./97951.jsx"),
  Chunk388032 = require("./388032.jsx");

function E() {
  return (0, i.jsx)(r.Z, {
    sourcePage: "voice"
  })
}
let d = (0, Chunk509613.k4)(Chunk313789.n.VOICE_CATEGORY, {
  useTitle: () => c.intl.string(c.t.K3lovD),
  useNotice: function() {
    let t = (0, r.o)("voice");
    return l.useMemo(() => t.canPrompt ? {
      type: u.v.STRONGLY_DISCOURAGED_CUSTOM,
      notice: E
    } : null, [t.canPrompt])
  },
  buildLayout: () => [o.J, T.d, S.F]
})