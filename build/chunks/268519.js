/** Chunk was on 67544 **/
/** chunk id: 268519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668826 = require("./668826.js"),
  Chunk120421 = require("./120421.js"),
  Chunk477839 = require("./477839.js");

function c() {
  let e = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.numPurchases),
    t = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.purchasedItems);
  (0, Chunk73800.useEffect)(() => {
    Chunk477839.YG.forEach(n => {
      null == t[n.itemId] && e > n.purchasesRequired && (0, o.xD)(n.itemId)
    })
  }, [module, exports])
}