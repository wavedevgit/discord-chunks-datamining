/** Chunk was on 82124 **/
/** chunk id: 277642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => c,
  t: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js");

function o(e, t) {
  return 0 === e.size || 1 === e.size && e.has(t)
}

function s(e) {
  return (0, r.e7)([a.Z, i.default], () => {
    if (null == e) returntrue;
    let t = a.Z.getUserIds(e);
    return null == t || o(t, i.default.getId())
  })
}

function c() {
  return (0, r.e7)([l.Z, i.default], () => {
    let e = l.Z.getUserIds();
    return null == e || o(e, i.default.getId())
  })
}