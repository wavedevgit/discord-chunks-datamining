/** Chunk was on 77069 **/
/** chunk id: 291802, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => E
});
var Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk622822 = require("./622822.js"),
  Chunk509613 = require("./509613.js"),
  Chunk519207 = require("./519207.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk682578 = require("./682578.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.XahVjj),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.R9fXyS),
  useValue: Chunk519207.Xg,
  useDisabled: () => {
    var t;
    let e = null == (t = (0, Chunk682578.J)()) || module,
      n = (0, Chunk622822.xi)(),
      i = (0, Chunk81643.Jm)();
    return (!require || !!Chunk168107) && !exports
  },
  setValue: t => {
    if ((0, u.Uw)() && t) return void i.Z.showAgeVerificationGetStartedModal({
      entryPoint: l.cU.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
    });
    o.xM.updateSetting(t)
  }
})