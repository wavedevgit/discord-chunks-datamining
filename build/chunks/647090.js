/** Chunk was on 1272 **/
/** chunk id: 647090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js");
let a = e => (0, r.e7)([i.Z, l.default], () => {
  if (null == e) returnfalse;
  let t = l.default.getCurrentUser();
  return null != i.Z.getMessages(e).findNewest(e => e.author.id === (null == t ? true : t.id))
})