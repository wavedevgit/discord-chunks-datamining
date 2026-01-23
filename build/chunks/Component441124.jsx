/** Chunk was on 80360 **/
/** chunk id: 441124, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  V: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk518614 = require("./518614.js"),
  Chunk333748 = require("./333748.js"),
  Chunk59198 = require("./59198.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk544105 = require("./544105.js");

function l(t) {
  let {
    platformType: e,
    authToken: n,
    onContinue: l,
    onError: d,
    onClose: _
  } = t, p = e === a.fg2.PLAYSTATION_STAGING ? r.i.PLAYSTATION_STAGING_APPLICATION_ID : r.i.PLAYSTATION_APPLICATION_ID, b = e === a.fg2.PLAYSTATION_STAGING ? i._.PLAYSTATION_STAGING : i._.PLAYSTATION;
  return (0, o.jsx)(s.W, {
    platformType: e,
    clientId: p,
    scopes: c.NL,
    authToken: n,
    onContinue: l,
    onError: d,
    onClose: _,
    redirectUri: b
  })
}