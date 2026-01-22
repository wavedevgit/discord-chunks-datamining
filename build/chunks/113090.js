/** Chunk was on web.js **/
/** chunk id: 113090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk233317 = require("./233317.js");

function o() {
  let {
    useCachedData: e = false,
    fetch: t = true
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
    premiumGroupMembership: n,
    isFetchingMembership: o
  } = (0, i.cf)([s.A], () => ({
    premiumGroupMembership: s.A.getMembership(),
    isFetchingMembership: s.A.isFetchingMembership()
  }));
  return (0, r.useEffect)(() => {
    !t || e && s.A.hasFetchedMembership() || a.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST"
    })
  }, [t, e]), {
    premiumGroupMembership: n,
    isLoading: o
  }
}