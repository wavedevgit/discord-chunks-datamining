/** Chunk was on 3298 **/
/** chunk id: 133091, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});

function r(e, n, t) {
  let r = t[e.pingUrl],
    i = t[n.pingUrl];
  return (null == r ? true : r.rtt) != null && (null == i ? true : i.rtt) != null ? r.rtt - i.rtt : (null == r ? true : r.rtt) != null && (null == i ? true : i.rtt) == null ? false : (null == r ? true : r.rtt) == null && (null == i ? true : i.rtt) != null ? 1 : (null == r ? true : r.loading) && !(null == i ? true : i.loading) ? false : !(null == r ? true : r.loading) && (null == i ? true : i.loading) || (null == r ? true : r.error) && !(null == i ? true : i.error) ? 1 : !(null == r ? true : r.error) && (null == i ? true : i.error) ? false : 0
}