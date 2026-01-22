/** Chunk was on 97492 **/
/** chunk id: 83942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => c,
  w: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk383501 = require("./383501.js"),
  Chunk162605 = require("./162605.js");

function s(e, t) {
  return 0 === e.size || 1 === e.size && e.has(t)
}

function o(e) {
  return (0, r.bG)([a.A, l.default], () => {
    if (null == e) returntrue;
    let t = a.A.getUserIds(e);
    return null == t || s(t, l.default.getId())
  })
}

function c() {
  return (0, r.bG)([i.A, l.default], () => {
    let e = i.A.getUserIds();
    return null == e || s(e, l.default.getId())
  })
}