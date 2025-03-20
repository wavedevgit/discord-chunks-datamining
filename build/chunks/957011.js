/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
}), n(47120);
var r = n(192379),
  i = n(442837),
  s = n(479531),
  a = n(430824),
  l = n(594174),
  o = n(53365),
  A = n(223892);

function c(e, t) {
  let n = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
    [c, d] = r.useState(),
    [u, g] = r.useState(!1),
    f = (0, A.Ob)(n);
  return {
    canSubmitAcceptance: (0, i.e7)([l.default], () => {
      let e = l.default.getCurrentUser();
      return (null == n ? void 0 : n.isOwner(e)) === !0
    }, [n]),
    error: c,
    loading: u,
    submitAcceptTermsRequest: r.useCallback(async () => {
      if (null != e && (f || null != t)) {
        g(!0), d(void 0);
        try {
          null != t ? await o.wE(e, t) : await o.zo(e)
        } catch (e) {
          d(new s.Z(e))
        } finally {
          g(!1)
        }
      }
    }, [e, t, f])
  }
}