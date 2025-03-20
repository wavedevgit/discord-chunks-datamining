/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(192379),
  i = n(479531),
  s = n(53365);

function a(e) {
  let [t, n] = r.useState(), [a, l] = r.useState(!1), [o, A] = r.useState(!1);
  return {
    error: t,
    loading: a,
    createEnableRequest: r.useCallback(async () => {
      if (null != e) {
        l(!0), n(void 0), A(!1);
        try {
          await s.He(e), A(!0)
        } catch (e) {
          n(new i.Z(e))
        } finally {
          l(!1)
        }
      }
    }, [e]),
    submittedRequest: o
  }
}