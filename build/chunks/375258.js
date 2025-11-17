/** Chunk was on 9452 **/
/** chunk id: 375258, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  E: () => p,
  h: () => y
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk292591 = require("./292591.js"),
  Chunk383713 = require("./383713.js"),
  Chunk51397 = require("./51397.js"),
  Chunk782134 = require("./782134.jsx"),
  Chunk894470 = require("./894470.js"),
  Chunk422767 = require("./422767.js"),
  Chunk754680 = require("./754680.js"),
  Chunk919723 = require("./919723.js"),
  Chunk792971 = require("./792971.js"),
  Chunk956853 = require("./956853.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx");

function Z(t) {
  return t ? f.intl.string(f.t.KHsSWK) : f.intl.string(f.t.PPDo5V)
}

function C() {
  return Chunk388032.intl.string(Chunk388032.t["4n3WTh"])
}

function L() {
  return [Chunk782134.Z, Chunk383713.Z, Chunk754680.Z, Chunk292591.Z, Chunk894470.Z, Chunk956853.Z, Chunk422767.Z, Chunk51397.Z, Chunk919723.Z, Chunk792971.Z]
}

function P() {
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
}

function b() {
  return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getActiveInputProfile() !== Chunk345655._.STUDIO)
}
let p = (0, Chunk509613.CB)(Chunk313789.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION, {
    useTitle: Z,
    useSubtitle: C,
    useNotice: P,
    buildLayout: L,
    usePredicate: b
  }),
  y = (0, Chunk509613.CB)(Chunk313789.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
    useTitle: Z,
    useSubtitle: C,
    useNotice: P,
    buildLayout: L,
    usePredicate: () => !b()
  })