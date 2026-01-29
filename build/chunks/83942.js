/** Chunk was on 16674 **/
/** chunk id: 83942, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  c: () => c,
  w: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk383501 = require("./383501.js"),
  Chunk162605 = require("./162605.js");

function s(e, t) {
  return 0 === e.size || 1 === e.size && e.has(t)
}

function a(e) {
  return (0, n.bG)([i.A, l.default], () => {
    if (null == e) returntrue;
    let t = i.A.getUserIds(e);
    return null == t || s(t, l.default.getId())
  })
}

function c() {
  return (0, n.bG)([u.A, l.default], () => {
    let e = u.A.getUserIds();
    return null == e || s(e, l.default.getId())
  })
}