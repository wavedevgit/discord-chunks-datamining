/** Chunk was on 20725 **/
/** chunk id: 541702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk517019 = require("./517019.js"),
  Chunk287809 = require("./287809.js");

function s(e) {
  let t = e.nsfw,
    n = false === (0, r.bG)([i.default], () => {
      var e;
      return null == (e = i.default.getCurrentUser()) ? true : e.nsfwAllowed
    }),
    s = !(0, r.bG)([l.A], () => l.A.didAgree(e.guild_id));
  return t && (s || n)
}