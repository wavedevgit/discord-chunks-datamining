/** Chunk was on 77069 **/
/** chunk id: 776570, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
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

function g() {
  return (0, Chunk54381.jsx)(Chunk825655.Z, {
    sourcePage: "voice"
  })
}
let T = (0, Chunk509613.k4)(Chunk313789.n.VOICE_CATEGORY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.K3lovD),
  useNotice: function() {
    let t = (0, Chunk825655.o)("voice");
    return Chunk473749.useMemo(() => module.canPrompt ? {
      type: Chunk970013.v.STRONGLY_DISCOURAGED_CUSTOM,
      notice: g
    } : null, [module.canPrompt])
  },
  buildLayout: () => [Chunk665388.J, Chunk589741.d, Chunk97951.F]
})