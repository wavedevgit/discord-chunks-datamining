/** Chunk was on 96013 (7bba8e20e4c355fc.js) **/
n.d(e, {
  Z: () => i
});

function i(t) {
  if (null != t.title && null != t.filename) {
    let e = t.filename.lastIndexOf("."),
      n = e > 0 ? t.filename.substr(e) : "";
    return t.title + n
  }
  return t.filename
}