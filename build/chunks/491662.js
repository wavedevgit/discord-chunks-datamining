/** Chunk was on web.js **/
/** chunk id: 491662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js");

function s(e, t) {
  let n = (0, i.e7)([a.default], () => a.default.getNewestTokenForApplication(e)),
    s = (0, i.e7)([a.default], () => null != e ? a.default.getFetchStateForApplication(e) : a.FetchState.NOT_FETCHED),
    l = s === a.FetchState.FETCHED,
    {
      disableFetch: c = false
    } = null != t ? t : {};
  return r.useEffect(() => {
    c || s !== a.FetchState.NOT_FETCHED || null != e && o.Z.fetchByApplicationId(e)
  }, [c, s, e]), {
    token: n,
    fetched: l
  }
}