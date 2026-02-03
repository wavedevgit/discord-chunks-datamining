/** Chunk was on 55150 **/
/** chunk id: 321404, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  O: () => a,
  c: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js");

function a(e) {
  return (0, l.bG)([r.A], () => r.A.isMessageRequest(e), [e])
}

function s(e) {
  return (0, l.bG)([r.A, i.A], () => null != e && (r.A.isMessageRequest(e) || i.A.isSpam(e)))
}