/** Chunk was on 9753 **/
/** chunk id: 298481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk870383 = require("./870383.js"),
  Chunk36149 = require("./36149.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    channelId: t
  } = e, n = (0, c.b8)(), d = (0, c.i2)(), p = (0, o.W)(u.intl.string(u.t.KPGVWl), u.intl.string(u.t["9KiIz6"])), m = u.intl.string(u.t["/nicWo"]), f = i.useCallback(() => {
    a.A.showAgeVerificationGetStartedModal({
      entryPoint: s.q1.SYSTEM_DM_RETRY_BUTTON
    }), (0, s.UT)(s.Im.RETRY, t)
  }, [t]);
  return (0, r.jsx)(l.Button, {
    variant: "primary",
    text: n ? p : m,
    onClick: f,
    disabled: !d
  })
}