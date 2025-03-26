/** Chunk was on 52272 **/
n.d(t, {
  $: () => o
}), n(47120);
var r = n(192379),
  i = n(881052);

function o(e) {
  let {
    onError: t,
    onSuccess: n,
    report: o
  } = e, [a, l] = r.useState(!1);
  return {
    reportFalsePositive: r.useCallback(async () => {
      if (!a) {
        l(!0);
        try {
          await o(), null == n || n()
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          l(!1)
        }
      }
    }, [a, t, n, o]),
    isReportFalsePositiveLoading: a
  }
}