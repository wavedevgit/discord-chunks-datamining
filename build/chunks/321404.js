/** Chunk was on 71287 **/
/** chunk id: 321404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => l,
  c: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js");

function l(e) {
  return (0, i.bG)([a.A], () => a.A.isMessageRequest(e), [e])
}

function u(e) {
  return (0, i.bG)([a.A, r.A], () => null != e && (a.A.isMessageRequest(e) || r.A.isSpam(e)))
}