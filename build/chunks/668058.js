/** Chunk was on 57539 **/
n.d(e, {
  $: () => r
}), n(388685);
var a = n(73800),
  i = n(881052);

function r(t) {
  let {
    onError: e,
    onSuccess: n,
    report: r
  } = t, [s, o] = a.useState(!1);
  return {
    reportFalsePositive: a.useCallback(async () => {
      if (!s) {
        o(!0);
        try {
          await r(), null == n || n()
        } catch (n) {
          let t = new i.Hx(n);
          null == e || e(t)
        } finally {
          o(!1)
        }
      }
    }, [s, e, n, r]),
    isReportFalsePositiveLoading: s
  }
}