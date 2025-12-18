/** Chunk was on 77069 **/
/** chunk id: 220397, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  v: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk622822 = require("./622822.js"),
  Chunk509613 = require("./509613.js"),
  Chunk519207 = require("./519207.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk682578 = require("./682578.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["L+yTsa"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.hiM8pU),
  useValue: Chunk519207.q3,
  useDisabled: () => {
    var t;
    let e = null == (t = (0, Chunk682578.J)()) || module,
      n = (0, Chunk622822.xi)(),
      l = (0, Chunk81643.Jm)();
    return Chunk473749.useMemo(() => (!require || !!Chunk168107) && !exports, [require, exports, Chunk168107])
  },
  setValue: t => {
    if ((0, r.Uw)() && t) return void l.Z.showAgeVerificationGetStartedModal({
      entryPoint: s.cU.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
    });
    T.DC.updateSetting(t)
  }
})