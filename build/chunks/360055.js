/** Chunk was on 4670 **/
/** chunk id: 360055, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  a: () => S
});
var Chunk64700 = require("./64700.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk36149 = require("./36149.js"),
  Chunk323073 = require("./323073.js"),
  Chunk419954 = require("./419954.js"),
  Chunk264249 = require("./264249.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk406274 = require("./406274.js"),
  Chunk985018 = require("./985018.jsx");
let S = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
  useTitle: () => A.intl.string(A.t["L+yTsa"]),
  useSubtitle: () => A.intl.string(A.t.hiM8pU),
  useValue: Chunk264249.tI,
  useDisabled: () => {
    var e;
    let t = null == (e = (0, c.A)()) || e,
      i = (0, a.sP)(),
      l = (0, r.yM)();
    return n.useMemo(() => (!i || !!l) && !t, [i, t, l])
  },
  setValue: e => {
    (0, a.p5)() && e ? l.A.showAgeVerificationGetStartedModal({
      entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
    }) : d.Kg.updateSetting(e)
  }
})