/** Chunk was on 74560 **/
/** chunk id: 790542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk751648 = require("./751648.js"),
  Chunk479766 = require("./479766.js");

function o() {
  let {
    balance: e,
    isFetching: t,
    error: n
  } = (0, Chunk442837.cj)([Chunk479766.Z], () => ({
    balance: Chunk479766.Z.balance,
    isFetching: Chunk479766.Z.isFetchingBalance,
    error: Chunk479766.Z.fetchBalanceError
  }));
  return (0, Chunk647438.useEffect)(() => {
    null !== module || null !== require || exports || (0, Chunk751648.ZO)()
  }, [module, require, exports]), {
    balance: module,
    isFetching: exports,
    error: require
  }
}