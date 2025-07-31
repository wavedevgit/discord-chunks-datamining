/** Chunk was on 57539 **/
n.d(e, {
  $: () => l
}), n(388685);
var i = n(73800),
  a = n(881052);

function l(t) {
  let {
    onError: e,
    onSuccess: n,
    report: l
  } = t, [o, s] = i.useState(!1);
  return {
    reportFalsePositive: i.useCallback(async () => {
      if (!o) {
        s(!0);
        try {
          await l(), null == n || n()
        } catch (n) {
          let t = new a.Hx(n);
          null == e || e(t)
        } finally {
          s(!1)
        }
      }
    }, [o, e, n, l]),
    isReportFalsePositiveLoading: o
  }
}