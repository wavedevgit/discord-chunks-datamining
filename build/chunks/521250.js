/** Chunk was on 7384 **/
/** chunk id: 521250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk284539 = require("./284539.js"),
  Chunk477839 = require("./477839.js"),
  Chunk105900 = require("./105900.js");
let a = {
  [Chunk477839.Vx.DEFAULT]: Chunk105900.default,
  [Chunk477839.Vx.CAT]: Chunk105900.cat,
  [Chunk477839.Vx.SWORD]: Chunk105900.sword,
  [Chunk477839.Vx.PIZZA]: Chunk105900.pizza
};

function l() {
  var e;
  let [t] = (0, Chunk284539.Z)(Chunk477839.yN.CURSORS);
  return a[null != (e = exports.selectedCursor) ? module : Chunk477839.Vx.DEFAULT]
}