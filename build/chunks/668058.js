/** Chunk was on 57539 **/
n.d(e, {
  $: () => s
}), n(388685);
var a = n(73800),
  i = n(881052);

function s(t) {
  let {
    onError: e,
    onSuccess: n,
    report: s
  } = t, [r, o] = a.useState(!1);
  return {
    reportFalsePositive: a.useCallback(async () => {
      if (!r) {
        o(!0);
        try {
          await s(), null == n || n()
        } catch (n) {
          let t = new i.Hx(n);
          null == e || e(t)
        } finally {
          o(!1)
        }
      }
    }, [r, e, n, s]),
    isReportFalsePositiveLoading: r
  }
}