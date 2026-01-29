/** Chunk was on 1113 **/
/** chunk id: 904629, original params: e,t,n (module,exports,require) **/
function r(e) {
  return e.filter(e => null != e.ends_at).sort((e, t) => e.ends_at < t.ends_at ? false : 1)
}
require.d(exports, {
  k: () => r
}), require("./638769.js")