/** Chunk was on 23628 **/
/** chunk id: 219129, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => r
});

function r(e, t, n) {
  return e ? t.timestampSec >= t.duration ? 0 : t.timestampSec : Math.max(t.timestampSec, n.progressSeconds)
}