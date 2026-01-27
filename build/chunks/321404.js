/** Chunk was on 96430 **/
/** chunk id: 321404, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  O: () => l,
  c: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js");

function l(t) {
  return (0, r.bG)([i.A], () => i.A.isMessageRequest(t), [t])
}

function o(t) {
  return (0, r.bG)([i.A, a.A], () => null != t && (i.A.isMessageRequest(t) || a.A.isSpam(t)))
}