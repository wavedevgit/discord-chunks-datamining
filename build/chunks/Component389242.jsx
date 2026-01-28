/** Chunk was on 5606 **/
/** chunk id: 389242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f() {
  var e;
  let t = null == (e = (0, u.A)()) || e,
    n = (0, c.tI)(),
    f = (0, o.sP)(),
    b = (0, a.yM)(),
    h = i.useMemo(() => (!f || !!b) && !t, [f, t, b]),
    A = i.useCallback(e => {
      f && e ? l.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
      }) : d.Kg.updateSetting(e)
    }, [f]);
  return (0, r.jsx)(p.h, {
    setting: m.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
    children: (0, r.jsx)(_.Ay, {
      title: g.intl.string(g.t["L+yTsa"]),
      value: n,
      onChange: A,
      disabled: h,
      note: g.intl.string(g.t.hiM8pU)
    })
  })
}