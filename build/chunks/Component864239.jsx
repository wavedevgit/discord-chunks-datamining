/** Chunk was on web.js **/
/** chunk id: 864239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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

function m() {
  var e;
  let t = null == (e = (0, d.J)()) || e,
    n = (0, c.q3)(),
    m = (0, l.xi)(),
    g = (0, s.Jm)(),
    E = i.useMemo(() => (!m || !!g) && !t, [m, t, g]),
    b = i.useCallback(e => {
      if (m && e) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
      });
      u.DC.updateSetting(e)
    }, [m]);
  return (0, r.jsx)(f.U, {
    setting: _.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
    children: (0, r.jsx)(p.ZP, {
      title: h.intl.string(h.t["L+yTsa"]),
      value: n,
      onChange: b,
      disabled: E,
      note: h.intl.string(h.t.hiM8pU)
    })
  })
}