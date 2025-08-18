/** Chunk was on 91173 **/
/** chunk id: 183431, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    channelId: t
  } = e, n = (0, s.l6)(), u = (0, s.L5)(), d = i.useCallback(() => {
    a.Z.showAgeVerificationGetStartedModal(o.cU.SYSTEM_DM_RETRY_BUTTON), (0, o.Z7)(o.io.RETRY, t)
  }, [t]);
  return (0, r.jsx)(l.zxk, {
    variant: "primary",
    text: n ? c.intl.string(c.t.KPGVWl) : c.intl.string(c.t["/nicWl"]),
    onClick: d,
    disabled: !u
  })
}