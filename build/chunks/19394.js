/** Chunk was on 83546 **/
/** chunk id: 19394, original params: e,t,n (module,exports,require) **/
function r(e) {
  return e.filter(e => null != e.ends_at).sort((e, t) => e.ends_at < t.ends_at ? false : 1)
}
require.d(exports, {
  h: () => r
}), require("./642613.js")