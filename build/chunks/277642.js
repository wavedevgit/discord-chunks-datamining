/** Chunk was on 65100 **/
/** chunk id: 277642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => c,
  t: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js");

function s(e, t) {
  return 0 === e.size || 1 === e.size && e.has(t)
}

function o(e) {
  return (0, i.e7)([a.Z, l.default], () => {
    if (null == e) returntrue;
    let t = a.Z.getUserIds(e);
    return null == t || s(t, l.default.getId())
  })
}

function c() {
  return (0, Chunk442837.e7)([Chunk19780.Z, Chunk314897.default], () => {
    let e = Chunk19780.Z.getUserIds();
    return null == module || s(module, Chunk314897.default.getId())
  })
}