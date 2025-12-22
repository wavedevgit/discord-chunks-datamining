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
  } = (0, Chunk442837.cj)([Chunk643281.Z], () => ({
    premiumGroupMembership: Chunk643281.Z.getMembership(),
    isFetchingMembership: Chunk643281.Z.isFetchingMembership()
  }));
  return (0, Chunk473749.useEffect)(() => {
    exports && (module && Chunk643281.Z.hasFetchedMembership() || Chunk570140.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST"
    }))
  }, [exports, module]), {
    premiumGroupMembership: require,
    isLoading: s
  }
}