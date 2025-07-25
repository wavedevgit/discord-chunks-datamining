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
  } = t, [r, l] = a.useState(!1);
  return {
    reportFalsePositive: a.useCallback(async () => {
      if (!r) {
        l(!0);
        try {
          await o(), null == n || n()
        } catch (n) {
          let t = new i.Hx(n);
          null == e || e(t)
        } finally {
          l(!1)
        }
      }
    }, [r, e, n, o]),
    isReportFalsePositiveLoading: r
  }
}