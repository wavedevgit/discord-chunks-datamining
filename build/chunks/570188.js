/** Chunk was on 24753 **/
/** chunk id: 570188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => s,
  U: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk650774 = require("./650774.js"),
  Chunk496675 = require("./496675.js"),
  Chunk231338 = require("./231338.js");

function s(e) {
  return (0, r.e7)([i.Z], () => null != e && i.Z.can(a.Pl.MENTION_EVERYONE, e), [e])
}

function c(e) {
  let t = null == e ? true : e.guild_id,
    n = (0, r.e7)([l.Z], () => l.Z.getMemberCount(t), [t]);
  return null == e || null != n && !(n > 5e4)
}