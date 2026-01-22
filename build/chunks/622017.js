/** Chunk was on web.js **/
/** chunk id: 622017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk233317 = require("./233317.js");

function o(e) {
  let {
    useCachedData: t = false,
    fetch: n = true
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, {
    premiumGroupMembers: o,
    isFetchingMembers: l,
    isUpdatingMembers: c
  } = (0, i.cf)([s.A], () => ({
    premiumGroupMembers: s.A.getMembers(),
    isFetchingMembers: s.A.isFetchingMembers(),
    isUpdatingMembers: s.A.isUpdatingMembers()
  }));
  return (0, r.useEffect)(() => {
    !n || t && s.A.hasFetchedMembers() || null != e && a.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERS_REQUEST",
      subscriptionId: e
    })
  }, [n, e, t]), {
    premiumGroupMembers: o,
    isLoading: l || c
  }
}