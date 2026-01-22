/** Chunk was on 21738 **/
/** chunk id: 891024, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk320501 = require("./320501.js"),
  Chunk287809 = require("./287809.js");
let a = e => (0, r.bG)([i.A, l.default], () => {
  if (null == e) returnfalse;
  let t = l.default.getCurrentUser();
  return null != i.A.getMessages(e).findNewest(e => e.author.id === (null == t ? true : t.id))
})