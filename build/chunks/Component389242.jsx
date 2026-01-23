/** Chunk was on web.js **/
/** chunk id: 389242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk36149 = require("./36149.js"),
  Chunk323073 = require("./323073.js"),
  Chunk264249 = require("./264249.js"),
  Chunk253932 = require("./253932.js"),
  Chunk406274 = require("./406274.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function m() {
  var e;
  let t = null == (e = (0, d.A)()) || e,
    n = (0, c.tI)(),
    m = (0, l.sP)(),
    g = (0, o.yM)(),
    E = i.useMemo(() => (!m || !!g) && !t, [m, t, g]),
    y = i.useCallback(e => {
      m && e ? a.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
      }) : u.Kg.updateSetting(e)
    }, [m]);
  return (0, r.jsx)(f.h, {
    setting: _.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
    children: (0, r.jsx)(p.Ay, {
      title: h.intl.string(h.t["L+yTsa"]),
      value: n,
      onChange: y,
      disabled: E,
      note: h.intl.string(h.t.hiM8pU)
    })
  })
}