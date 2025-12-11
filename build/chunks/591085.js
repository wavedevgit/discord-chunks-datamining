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

function s() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    {
      premiumGroupMembers: t,
      premiumGroupSubscriptionId: n,
      hasFetchedMembers: s,
      isFetchingMembers: l,
      isFetchingMembership: c,
      isUpdatingMembers: u
    } = (0, Chunk442837.cj)([Chunk643281.Z], () => ({
      premiumGroupMembers: Chunk643281.Z.getMembers(),
      premiumGroupSubscriptionId: Chunk643281.Z.getPremiumGroupSubscriptionId(),
      hasFetchedMembers: Chunk643281.Z.hasFetchedMembers(),
      isFetchingMembers: Chunk643281.Z.isFetchingMembers(),
      isFetchingMembership: Chunk643281.Z.isFetchingMembership(),
      isUpdatingMembers: Chunk643281.Z.isUpdatingMembers()
    }));
  return (0, Chunk473749.useEffect)(() => {
    module && (s || (null != require ? Chunk570140.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERS_REQUEST",
      subscriptionId: require
    }) : Chunk570140.Z.dispatch({
      type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST"
    })))
  }, [module, require, s]), {
    premiumGroupMembers: exports,
    isLoading: l || c || u
  }
}