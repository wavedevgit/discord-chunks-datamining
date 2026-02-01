/** Chunk was on 9207 **/
/** chunk id: 113090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk233317 = require("./233317.js");

function a() {
  let {
    useCachedData: e = false,
    fetch: t = true
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
    premiumGroupMembership: n,
    isFetchingMembership: a
  } = (0, i.cf)([s.A], () => ({
    premiumGroupMembership: s.A.getMembership(),
    isFetchingMembership: s.A.isFetchingMembership()
  }));
  return (0, r.useEffect)(() => {
    !t || e && s.A.hasFetchedMembership() || l.h.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST"
    })
  }, [t, e]), {
    premiumGroupMembership: n,
    isLoading: a
  }
}