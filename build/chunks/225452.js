/** Chunk was on 83051 **/
/** chunk id: 225452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => r
});

function r(e) {
  return e.map((e, t) => {
    var n, r;
    return {
      file: e.file,
      name: null != (r = e.id) ? r : "attachment_".concat(t),
      filename: null == (n = e.file) ? true : n.name
    }
  })
}