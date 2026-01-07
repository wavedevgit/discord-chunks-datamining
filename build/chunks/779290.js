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
  } = (0, a.Z)({
    useCachedData: t,
    fetch: n
  }), {
    premiumGroupMembers: s
  } = (0, i.Z)(null != (e = null == o ? true : o.subscriptionId) ? e : null, {
    useCachedData: t,
    fetch: n
  });
  return (null == s ? true : s.primary) != null ? (0, r.XM)(null == s ? true : s.primary) : null
}