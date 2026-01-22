/** Chunk was on web.js **/
/** chunk id: 298481, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  } = e, n = (0, c.b8)(), d = (0, c.i2)(), f = (0, l.W)(u.intl.string(u.t.KPGVWl), u.intl.string(u.t["9KiIz6"])), p = u.intl.string(u.t["/nicWo"]), _ = i.useCallback(() => {
    s.A.showAgeVerificationGetStartedModal({
      entryPoint: o.q1.SYSTEM_DM_RETRY_BUTTON
    }), (0, o.UT)(o.Im.RETRY, t)
  }, [t]);
  return (0, r.jsx)(a.Button, {
    variant: "primary",
    text: n ? f : p,
    onClick: _,
    disabled: !d
  })
}