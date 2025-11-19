/** Chunk was on web.js **/
/** chunk id: 924356, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk622822 = require("./622822.js"),
  Chunk695346 = require("./695346.js"),
  Chunk682578 = require("./682578.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  var e;
  let t = Chunk695346.xM.useSetting(),
    n = null == (e = (0, Chunk682578.J)()) || module,
    p = (0, Chunk622822.xi)(),
    h = Chunk473749.useCallback(e => {
      if (p && e) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
      });
      l.xM.updateSetting(e)
    }, [p]);
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      value: !!require && exports,
      onChange: h,
      title: Chunk388032.intl.string(Chunk388032.t.XahVjj),
      note: Chunk388032.intl.string(Chunk388032.t.R9fXyS),
      disabled: !require
    })
  })
}