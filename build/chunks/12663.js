/** Chunk was on 14691 **/
/** chunk id: 12663, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => r
});

function r(e, t, l) {
  let r = l[e.pingUrl],
    n = l[t.pingUrl];
  return (null == r ? true : r.rtt) != null && (null == n ? true : n.rtt) != null ? r.rtt - n.rtt : (null == r ? true : r.rtt) != null && (null == n ? true : n.rtt) == null ? false : (null == r ? true : r.rtt) == null && (null == n ? true : n.rtt) != null ? 1 : (null == r ? true : r.loading) && !(null == n ? true : n.loading) ? false : !(null == r ? true : r.loading) && (null == n ? true : n.loading) || (null == r ? true : r.error) && !(null == n ? true : n.error) ? 1 : !(null == r ? true : r.error) && (null == n ? true : n.error) ? false : 0
}