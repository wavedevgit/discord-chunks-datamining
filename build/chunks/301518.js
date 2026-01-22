/** Chunk was on web.js **/
/** chunk id: 301518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => s
});
var Chunk224771 = require("./224771.js"),
  Chunk624210 = require("./624210.js"),
  Chunk224949 = require("./224949.js");
async function s(e) {
  let {
    checkoutSucceeded: t
  } = e;
  if (t) return;
  let n = a.A.currentOrder;
  if ((null == n ? true : n.id) != null && n.status === r.Re.DRAFT) try {
    await (0, i.Nl)(n.id)
  } catch (e) {}
}