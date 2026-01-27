/** Chunk was on 98797 **/
/** chunk id: 465856, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});

function r(t) {
  if (null != t.title && null != t.filename) {
    let e = t.filename.lastIndexOf("."),
      n = e > 0 ? t.filename.substr(e) : "";
    return t.title + n
  }
  return t.filename
}