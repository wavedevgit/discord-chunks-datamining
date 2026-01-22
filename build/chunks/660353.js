/** Chunk was on 28979 **/
/** chunk id: 660353, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  u: () => E
});
var Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk36149 = require("./36149.js"),
  Chunk323073 = require("./323073.js"),
  Chunk419954 = require("./419954.js"),
  Chunk264249 = require("./264249.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk406274 = require("./406274.js"),
  Chunk985018 = require("./985018.jsx");
let E = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
  useTitle: () => S.intl.string(S.t.XahVjj),
  useSubtitle: () => S.intl.string(S.t.R9fXyS),
  useValue: Chunk264249.hT,
  useDisabled: () => {
    var t;
    let e = null == (t = (0, A.A)()) || t,
      i = (0, r.sP)(),
      n = (0, s.yM)();
    return (!i || !!n) && !e
  },
  setValue: t => {
    (0, r.p5)() && t ? n.A.showAgeVerificationGetStartedModal({
      entryPoint: l.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
    }) : o.Qe.updateSetting(t)
  }
})