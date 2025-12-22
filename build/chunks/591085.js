/** Chunk was on web.js **/
/** chunk id: 591085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk643281 = require("./643281.js");

function s(e) {
  let {
    useCachedData: t = false,
    fetch: n = true
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, {
    premiumGroupMembers: s,
    isFetchingMembers: l,
    isUpdatingMembers: c
  } = (0, i.cj)([o.Z], () => ({
    premiumGroupMembers: o.Z.getMembers(),
    isFetchingMembers: o.Z.isFetchingMembers(),
    isUpdatingMembers: o.Z.isUpdatingMembers()
  }));
  return (0, r.useEffect)(() => {
    n && (t && o.Z.hasFetchedMembers() || null != e && a.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERS_REQUEST",
      subscriptionId: e
    }))
  }, [n, e, t]), {
    premiumGroupMembers: s,
    isLoading: l || c
  }
}