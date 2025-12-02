/** Chunk was on 77069 **/
/** chunk id: 264413, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk375258 = require("./375258.js"),
  Chunk383713 = require("./383713.js"),
  Chunk782134 = require("./782134.jsx"),
  Chunk833682 = require("./833682.jsx"),
  Chunk815194 = require("./815194.jsx"),
  Chunk16009 = require("./16009.js"),
  Chunk387076 = require("./387076.js"),
  Chunk595373 = require("./595373.js"),
  Chunk388032 = require("./388032.jsx");
let N = (0, Chunk509613.k4)(Chunk313789.n.VOICE_INPUT_MODE_CATEGORY, {
  useNotice: function() {
    let t = (0, Chunk442837.e7)([Chunk463395.Z, Chunk131951.Z], () => {
      let t = Chunk131951.Z.getInputDeviceId();
      return (Chunk463395.Z.hasEchoCancellation(module) || Chunk463395.Z.hasNoiseSuppression(module) || Chunk463395.Z.hasAutomaticGainControl(module)) && Chunk131951.Z.isInputProfileCustom()
    });
    return Chunk473749.useMemo(() => {
      if (module) return {
        type: Chunk28682.y1.INLINE_NOTICE,
        noticeType: "info",
        useText: () => Chunk388032.intl.string(Chunk388032.t["/Whuzi"])
      }
    }, [module])
  },
  buildLayout: () => [Chunk782134.Z, Chunk833682.Z, Chunk383713.Z, Chunk595373.Z, Chunk815194.Z, Chunk387076.Z, Chunk16009.Z, Chunk375258.E]
})