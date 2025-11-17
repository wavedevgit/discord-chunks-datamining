/** Chunk was on web.js **/
/** chunk id: 790542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk751648 = require("./751648.js"),
  Chunk479766 = require("./479766.js");

function s() {
  let {
    balance: e,
    isFetching: t,
    error: n
  } = (0, Chunk442837.cj)([Chunk479766.Z], () => ({
    balance: Chunk479766.Z.balance,
    isFetching: Chunk479766.Z.isFetchingBalance,
    error: Chunk479766.Z.fetchBalanceError
  }));
  return (0, Chunk473749.useEffect)(() => {
    null !== module || null !== require || exports || (0, Chunk751648.ZO)()
  }, [module, require, exports]), {
    balance: module,
    isFetching: exports,
    error: require
  }
}