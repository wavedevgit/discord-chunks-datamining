/** Chunk was on 57539 **/
n.d(e, {
  $: () => o
}), n(388685);
var a = n(73800),
  i = n(881052);

function o(t) {
  let {
    onError: e,
    onSuccess: n,
    report: o
  } = t, [s, r] = a.useState(!1);
  return {
    reportFalsePositive: a.useCallback(async () => {
      if (!s) {
        r(!0);
        try {
          await o(), null == n || n()
        } catch (n) {
          let t = new i.Hx(n);
          null == e || e(t)
        } finally {
          r(!1)
        }
      }
    }, [s, e, n, o]),
    isReportFalsePositiveLoading: s
  }
}