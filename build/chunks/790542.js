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
  } = (0, i.cj)([o.Z], () => ({
    balance: o.Z.balance,
    isFetching: o.Z.isFetchingBalance,
    error: o.Z.fetchBalanceError
  }));
  return (0, r.useEffect)(() => {
    null !== e || null !== n || t || (0, a.ZO)()
  }, [e, n, t]), {
    balance: e,
    isFetching: t,
    error: n
  }
}