/** Chunk was on 83772 **/
/** chunk id: 636850, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk731290 = require("./731290.js"),
  Chunk594174 = require("./594174.js");

function s(e) {
  let t = e.nsfw,
    n = false === (0, r.e7)([i.default], () => {
      var e;
      return null == (e = i.default.getCurrentUser()) ? true : e.nsfwAllowed
    }),
    s = !(0, r.e7)([l.Z], () => l.Z.didAgree(e.guild_id));
  return t && (s || n)
}