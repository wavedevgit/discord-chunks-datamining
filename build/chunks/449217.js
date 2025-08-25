/** Chunk was on web.js **/
/** chunk id: 449217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js");
let a = e => {
  let [t, n] = (0, r.Wu)([i.Z], () => [i.Z.getCategoryForProduct(e), i.Z.getProduct(e)]);
  return {
    category: t,
    product: n,
    purchase: (0, r.e7)([o.Z], () => o.Z.getPurchase(e))
  }
}