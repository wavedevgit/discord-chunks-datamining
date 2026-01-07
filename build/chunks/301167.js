/** Chunk was on web.js **/
/** chunk id: 301167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => o
});
var Chunk197550 = require("./197550.js"),
  Chunk711959 = require("./711959.js"),
  Chunk877820 = require("./877820.js");
async function o(e) {
  let {
    checkoutSucceeded: t
  } = e;
  if (t) return;
  let n = a.Z.currentOrder;
  if ((null == n ? true : n.id) != null && n.status === r.iF.DRAFT) try {
    await (0, i.J0)(n.id)
  } catch (e) {}
}