/** Chunk was on 43694 **/
/** chunk id: 850908, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => o
});

function o(e) {
  if (null != e.title && null != e.filename) {
    let t = e.filename.lastIndexOf("."),
      a = t > 0 ? e.filename.substr(t) : "";
    return e.title + a
  }
  return e.filename
}