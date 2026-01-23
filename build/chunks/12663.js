/** Chunk was on 14691 **/
/** chunk id: 12663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});

function r(e, t, n) {
  let r = n[e.pingUrl],
    l = n[t.pingUrl];
  return (null == r ? true : r.rtt) != null && (null == l ? true : l.rtt) != null ? r.rtt - l.rtt : (null == r ? true : r.rtt) != null && (null == l ? true : l.rtt) == null ? false : (null == r ? true : r.rtt) == null && (null == l ? true : l.rtt) != null ? 1 : (null == r ? true : r.loading) && !(null == l ? true : l.loading) ? false : !(null == r ? true : r.loading) && (null == l ? true : l.loading) || (null == r ? true : r.error) && !(null == l ? true : l.error) ? 1 : !(null == r ? true : r.error) && (null == l ? true : l.error) ? false : 0
}