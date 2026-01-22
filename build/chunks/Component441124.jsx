/** Chunk was on 80360 **/
/** chunk id: 441124, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  V: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk518614 = require("./518614.js"),
  Chunk333748 = require("./333748.js"),
  Chunk59198 = require("./59198.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk544105 = require("./544105.js");

function c(t) {
  let {
    platformType: n,
    authToken: e,
    onContinue: c,
    onError: l,
    onClose: b
  } = t, p = n === d.fg2.PLAYSTATION_STAGING ? a.i.PLAYSTATION_STAGING_APPLICATION_ID : a.i.PLAYSTATION_APPLICATION_ID, f = n === d.fg2.PLAYSTATION_STAGING ? i._.PLAYSTATION_STAGING : i._.PLAYSTATION;
  return (0, o.jsx)(s.W, {
    platformType: n,
    clientId: p,
    scopes: r.NL,
    authToken: e,
    onContinue: c,
    onError: l,
    onClose: b,
    redirectUri: f
  })
}