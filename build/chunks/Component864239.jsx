/** Chunk was on web.js **/
/** chunk id: 864239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk622822 = require("./622822.js"),
  Chunk519207 = require("./519207.js"),
  Chunk695346 = require("./695346.js"),
  Chunk682578 = require("./682578.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function h() {
  var e;
  let t = null == (e = (0, Chunk682578.J)()) || module,
    n = (0, Chunk519207.q3)(),
    h = (0, Chunk622822.xi)(),
    g = (0, Chunk81643.Jm)(),
    E = Chunk473749.useMemo(() => (!h || !!g) && !exports, [h, exports, g]),
    b = Chunk473749.useCallback(e => {
      if (h && e) return void o.Z.showAgeVerificationGetStartedModal({
        entryPoint: a.cU.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
      });
      u.DC.updateSetting(e)
    }, [h]);
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t["L+yTsa"]),
      value: require,
      onChange: b,
      disabled: E,
      note: Chunk388032.intl.string(Chunk388032.t.hiM8pU)
    })
  })
}