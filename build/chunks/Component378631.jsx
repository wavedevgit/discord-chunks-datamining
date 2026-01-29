/** Chunk was on 2827 **/
/** chunk id: 378631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A() {
  var e;
  let t = (0, c.hT)(),
    n = null == (e = (0, u.A)()) || e,
    A = (0, o.sP)(),
    f = (0, a.yM)(),
    b = i.useMemo(() => (!A || !!f) && !n, [A, n, f]),
    h = i.useCallback(e => {
      A && e ? l.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
      }) : d.Qe.updateSetting(e)
    }, [A]);
  return (0, r.jsx)(_.h, {
    setting: m.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
    children: (0, r.jsx)(p.Ay, {
      value: t,
      onChange: h,
      title: g.intl.string(g.t.XahVjj),
      note: g.intl.string(g.t.R9fXyS),
      disabled: b
    })
  })
}