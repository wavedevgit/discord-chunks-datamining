/** Chunk was on 36456 **/
/** chunk id: 572196, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk59198 = require("./59198.jsx"),
  Chunk278086 = require("./278086.js"),
  Chunk652215 = require("./652215.js");

function a(n) {
  let {
    authToken: e,
    onContinue: t,
    onError: a,
    onClose: d
  } = n;
  return (0, i.jsx)(o.W, {
    platformType: s.fg2.CRUNCHYROLL,
    clientId: r.ex,
    scopes: r._B,
    authToken: e,
    onContinue: t,
    onError: a,
    onClose: d
  })
}