/** Chunk was on web.js **/
/** chunk id: 779290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk51144 = require("./51144.js"),
  Chunk591085 = require("./591085.js"),
  Chunk340426 = require("./340426.js");

function o() {
  var e;
  let {
    useCachedData: t = true,
    fetch: n = true
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
    premiumGroupMembership: o
  } = (0, Chunk340426.Z)({
    useCachedData: exports,
    fetch: require
  }), {
    premiumGroupMembers: s
  } = (0, Chunk591085.Z)(null != (e = null == o ? true : o.subscriptionId) ? module : null, {
    useCachedData: exports,
    fetch: require
  });
  return (null == s ? true : s.primary) != null ? (0, Chunk51144.XM)(null == s ? true : s.primary) : null
}