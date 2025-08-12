/** Chunk was on 20501 **/
/** chunk id: 521250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk284539 = require("./284539.js"),
  Chunk477839 = require("./477839.js"),
  Chunk632230 = require("./632230.js");
let a = {
  [Chunk477839.Vx.DEFAULT]: Chunk632230.default,
  [Chunk477839.Vx.CAT]: Chunk632230.cat,
  [Chunk477839.Vx.SWORD]: Chunk632230.sword,
  [Chunk477839.Vx.PIZZA]: Chunk632230.pizza
};

function l() {
  var e;
  let [t] = (0, Chunk284539.Z)(Chunk477839.yN.CURSORS);
  return a[null != (e = exports.selectedCursor) ? module : Chunk477839.Vx.DEFAULT]
}