/** Chunk was on web.js **/
/** chunk id: 491662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js");

function s(e, t) {
  let n = (0, i.e7)([o.default], () => o.default.getNewestTokenForApplication(e)),
    s = (0, i.e7)([o.default], () => null != e ? o.default.getFetchStateForApplication(e) : o.FetchState.NOT_FETCHED),
    l = s === o.FetchState.FETCHED,
    {
      disableFetch: c = false
    } = null != t ? t : {};
  return r.useEffect(() => {
    c || s !== o.FetchState.NOT_FETCHED || null != e && a.Z.fetchByApplicationId(e)
  }, [c, s, e]), {
    token: n,
    fetched: l
  }
}