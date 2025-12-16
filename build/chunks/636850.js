/** Chunk was on 51333 **/
/** chunk id: 636850, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk731290 = require("./731290.js"),
  Chunk594174 = require("./594174.js");

function a(e) {
  let t = e.nsfw,
    n = false === (0, r.e7)([l.default], () => {
      var e;
      return null == (e = l.default.getCurrentUser()) ? true : e.nsfwAllowed
    }),
    a = !(0, r.e7)([i.Z], () => i.Z.didAgree(e.guild_id));
  return t && (a || n)
}