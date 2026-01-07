/** Chunk was on web.js **/
/** chunk id: 340426, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk643281 = require("./643281.js");

function s() {
  let {
    useCachedData: e = false,
    fetch: t = true
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
    premiumGroupMembership: n,
    isFetchingMembership: s
  } = (0, i.cj)([o.Z], () => ({
    premiumGroupMembership: o.Z.getMembership(),
    isFetchingMembership: o.Z.isFetchingMembership()
  }));
  return (0, r.useEffect)(() => {
    t && (e && o.Z.hasFetchedMembership() || a.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST"
    }))
  }, [t, e]), {
    premiumGroupMembership: n,
    isLoading: s
  }
}