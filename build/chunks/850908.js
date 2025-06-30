/** Chunk was on 26179 **/
a.d(t, {
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