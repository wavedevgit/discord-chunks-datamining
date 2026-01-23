/** Chunk was on 97492 **/
/** chunk id: 321404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => s,
  c: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js");

function s(e) {
  return (0, r.bG)([l.A], () => l.A.isMessageRequest(e), [e])
}

function a(e) {
  return (0, r.bG)([l.A, i.A], () => null != e && (l.A.isMessageRequest(e) || i.A.isSpam(e)))
}