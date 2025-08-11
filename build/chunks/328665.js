/** Chunk was on 67544 **/
/** chunk id: 328665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => d
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668826 = require("./668826.js"),
  Chunk120421 = require("./120421.js"),
  Chunk67411 = require("./67411.js"),
  Chunk477839 = require("./477839.js");
let l = [Chunk477839.FK.CLICKS_1, Chunk477839.FK.CLICKS_2, Chunk477839.FK.CLICKS_3],
  u = [Chunk477839.FK.PURCHASE_1, Chunk477839.FK.PURCHASE_2, Chunk477839.FK.PURCHASE_3, Chunk477839.FK.PURCHASE_4];

function d() {
  let e = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.purchasedItems),
    t = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.getContributionsForItem(Chunk477839.yN.CLICKER_BUTTON));
  (0, Chunk73800.useEffect)(() => {
    if (!Chunk120421.Z.hasUnlockedAchievement(Chunk477839.FK.PURCHASE_5)) {
      let t = Object.keys((0, Chunk477839.w2)()).every(t => {
          let n = Number(t);
          return n === c.yN.COMPLETE_GAME || null != e[n]
        }),
        n = (0, Chunk477839.r7)(),
        r = Object.keys(require).every(t => {
          var r, s;
          return (null != (s = null == (r = e[n[t].itemId]) ? true : r.upgrades[t]) ? s : 0) > 0
        });
      exports && Chunk73800 && (0, Chunk668826.TD)(Chunk477839.FK.PURCHASE_5)
    }
  }, [module]), (0, Chunk67411.Z)(u, Object.keys(module).length), (0, Chunk67411.Z)(l, exports)
}