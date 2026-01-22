/** Chunk was on 81008 **/
/** chunk id: 382913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => l
});

function l(e) {
  return e.map((e, t) => {
    var n, l;
    return {
      file: e.file,
      name: null != (n = e.id) ? n : "attachment_".concat(t),
      filename: null == (l = e.file) ? true : l.name
    }
  })
}