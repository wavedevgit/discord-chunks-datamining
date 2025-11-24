/** Chunk was on 9452 **/
/** chunk id: 776570, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk825655 = require("./825655.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk665388 = require("./665388.js"),
  Chunk589741 = require("./589741.js"),
  Chunk97951 = require("./97951.jsx"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.k4)(Chunk313789.n.VOICE_CATEGORY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.K3lovD),
  useNotice: function() {
    let t = (0, Chunk825655.o)("voice");
    return Chunk473749.useMemo(() => module.canPrompt ? {
      type: Chunk28682.y1.STRONGLY_DISCOURAGED_CUSTOM,
      render: () => (0, Chunk54381.jsx)(Chunk825655.Z, {
        sourcePage: "voice"
      })
    } : null, [module.canPrompt])
  },
  buildLayout: () => [Chunk665388.Z, Chunk589741.Z, Chunk97951.Z]
})