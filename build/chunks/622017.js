/** Chunk was on 78376 **/
/** chunk id: 622017, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk233317 = require("./233317.js");

function a(e) {
  let {
    useCachedData: t = false,
    fetch: n = true
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, {
    premiumGroupMembers: a,
    isFetchingMembers: o,
    isUpdatingMembers: c
  } = (0, i.cf)([s.A], () => ({
    premiumGroupMembers: s.A.getMembers(),
    isFetchingMembers: s.A.isFetchingMembers(),
    isUpdatingMembers: s.A.isUpdatingMembers()
  }));
  return (0, r.useEffect)(() => {
    !n || t && s.A.hasFetchedMembers() || null != e && l.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERS_REQUEST",
      subscriptionId: e
    })
  }, [n, e, t]), {
    premiumGroupMembers: a,
    isLoading: o || c
  }
}