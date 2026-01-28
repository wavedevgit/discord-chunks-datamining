/** Chunk was on 28979 **/
/** chunk id: 360055, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  a: () => E
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
let E = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
  useTitle: () => S.intl.string(S.t["L+yTsa"]),
  useSubtitle: () => S.intl.string(S.t.hiM8pU),
  useValue: Chunk264249.tI,
  useDisabled: () => {
    var t;
    let e = null == (t = (0, A.A)()) || t,
      i = (0, u.sP)(),
      l = (0, r.yM)();
    return n.useMemo(() => (!i || !!l) && !e, [i, e, l])
  },
  setValue: t => {
    (0, u.p5)() && t ? l.A.showAgeVerificationGetStartedModal({
      entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
    }) : T.Kg.updateSetting(t)
  }
})