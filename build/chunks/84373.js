/** Chunk was on 2827 **/
/** chunk id: 84373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk287809 = require("./287809.js"),
  Chunk64313 = require("./64313.js"),
  Chunk253932 = require("./253932.js"),
  Chunk656402 = require("./656402.js");

function c() {
  var e;
  let t = a.he.useSetting(),
    n = a.cj.useSetting(),
    c = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
    d = (0, s.j)("use_derived_dm_spam_filter_setting");
  return t !== i.he.DEFAULT_UNSET ? t : (null == c ? true : c.nsfwAllowed) === false && d ? i.he.FRIENDS_AND_NON_FRIENDS : null != (e = o.xY.get(n)) ? e : i.he.NON_FRIENDS
}