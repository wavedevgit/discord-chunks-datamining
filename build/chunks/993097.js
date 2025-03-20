/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  C: () => g
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(852860),
  l = n(434404),
  o = n(999382),
  A = n(621319),
  c = n(44550),
  d = n(770270),
  u = n(203377);

function g() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, s.cj)([c.Z], () => ({
    vanityURLCode: c.Z.vanityURLCode,
    hasChanges: c.Z.hasChanges(),
    errorDetails: c.Z.errorDetails
  })), {
    guild: g,
    submitting: f,
    errors: m,
    hasChanges: p
  } = (0, s.cj)([o.Z], () => o.Z.getProps()), h = i.useMemo(() => null != n ? (0, d.i)(null == n ? void 0 : n.code) : (0, u.LG)(m), [m, n]), C = i.useCallback(async () => {
    if (null != g && (t && await (0, A.en)(g.id, e, {
        throwErr: !0
      }), p)) {
      let e = {
        premiumProgressBarEnabled: g.premiumProgressBarEnabled,
        banner: g.banner,
        splash: g.splash
      };
      await l.Z.saveGuild(g.id, e, {
        throwErr: !0
      })
    }
  }, [g, p, t, e]), b = i.useCallback(() => {
    null != g && (l.Z.init(g.id), (0, A.H7)())
  }, [g]);
  return (0, r.jsx)(a.Z, {
    submitting: f,
    errorMessage: h,
    onSave: C,
    onReset: b
  })
}