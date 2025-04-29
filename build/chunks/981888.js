/** Chunk was on 74367 **/
t.d(n, {
  Z: () => r
}), t(388685);
var i = t(73800),
  a = t(881052);

function r(e, n) {
  let [t, r] = i.useState(!1), [o, l] = i.useState(null);
  return [async () => {
    r(!0), l(null);
    try {
      let n = await e();
      return r(!1), l(null), n
    } catch (t) {
      let e = new a.Hx(t);
      return null == n || n(e), l(e), r(!1), null
    }
  }, {
    loading: t,
    error: o
  }]
}