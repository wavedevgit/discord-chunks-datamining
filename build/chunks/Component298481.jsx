/** Chunk was on web.js **/
/** chunk id: 298481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk36149 = require("./36149.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    channelId: t
  } = e, n = (0, l.b8)(), u = (0, l.i2)(), d = i.useCallback(() => {
    s.A.showAgeVerificationGetStartedModal({
      entryPoint: o.q1.SYSTEM_DM_RETRY_BUTTON
    }), (0, o.UT)(o.Im.RETRY, t)
  }, [t]);
  return (0, r.jsx)(a.Button, {
    variant: "primary",
    text: n ? c.intl.string(c.t.KPGVWl) : c.intl.string(c.t["/nicWo"]),
    onClick: d,
    disabled: !u
  })
}