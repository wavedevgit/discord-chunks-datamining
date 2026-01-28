/** Chunk was on 5606 **/
/** chunk id: 231855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk427262 = require("./427262.js"),
  Chunk622017 = require("./622017.js"),
  Chunk113090 = require("./113090.js");

function s() {
  var e;
  let {
    useCachedData: t = true,
    fetch: n = true
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
    premiumGroupMembership: s
  } = (0, l.A)({
    useCachedData: t,
    fetch: n
  }), {
    premiumGroupMembers: a
  } = (0, i.A)(null != (e = null == s ? true : s.subscriptionId) ? e : null, {
    useCachedData: t,
    fetch: n
  });
  return (null == a ? true : a.primary) != null ? (0, r.$3)(null == a ? true : a.primary) : null
}