/** Chunk was on web.js **/
/** chunk id: 183431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    channelId: t
  } = e, n = (0, l.l6)(), u = (0, l.L5)(), d = i.useCallback(() => {
    o.Z.showAgeVerificationGetStartedModal({
      entryPoint: s.cU.SYSTEM_DM_RETRY_BUTTON
    }), (0, s.Z7)(s.io.RETRY, t)
  }, [t]);
  return (0, r.jsx)(a.Button, {
    variant: "primary",
    text: n ? c.intl.string(c.t.KPGVWl) : c.intl.string(c.t["/nicWo"]),
    onClick: d,
    disabled: !u
  })
}