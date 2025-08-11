/** Chunk was on 83051 **/
/** chunk id: 225452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => i
});

function i(e) {
  return e.map((e, t) => {
    var n, i;
    return {
      file: e.file,
      name: null != (i = e.id) ? i : "attachment_".concat(t),
      filename: null == (n = e.file) ? true : n.name
    }
  })
}