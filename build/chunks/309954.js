/** Chunk was on web.js **/
/** chunk id: 309954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk786953 = require("./786953.js"),
  Chunk505274 = require("./505274.js");

function o() {
  let {
    balance: e,
    isFetching: t,
    error: n
  } = (0, i.cf)([s.A], () => ({
    balance: s.A.balance,
    isFetching: s.A.isFetchingBalance,
    error: s.A.fetchBalanceError
  }));
  return (0, r.useEffect)(() => {
    null !== e || null !== n || t || (0, a.Bf)()
  }, [e, n, t]), {
    balance: e,
    isFetching: t,
    error: n
  }
}