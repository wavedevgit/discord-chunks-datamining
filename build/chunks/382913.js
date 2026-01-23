/** Chunk was on 81008 **/
/** chunk id: 382913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => i
});

function i(e) {
  return e.map((e, t) => {
    var n, i;
    return {
      file: e.file,
      name: null != (n = e.id) ? n : "attachment_".concat(t),
      filename: null == (i = e.file) ? true : i.name
    }
  })
}