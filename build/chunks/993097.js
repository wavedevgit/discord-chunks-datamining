/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  C: () => p
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(852860),
  l = n(434404),
  o = n(999382),
  c = n(621319),
  d = n(44550),
  u = n(770270),
  m = n(203377);

function p() {
  let {
    vanityURLCode: e,
    hasChanges: t,
    errorDetails: n
  } = (0, s.cj)([d.Z], () => ({
    vanityURLCode: d.Z.vanityURLCode,
    hasChanges: d.Z.hasChanges(),
    errorDetails: d.Z.errorDetails
  })), {
    guild: p,
    submitting: g,
    errors: h,
    hasChanges: f
  } = (0, s.cj)([o.Z], () => o.Z.getProps()), b = i.useMemo(() => null != n ? (0, u.i)(null == n ? void 0 : n.code) : (0, m.LG)(h), [h, n]), x = i.useCallback(async () => {
    if (null != p && (t && await (0, c.en)(p.id, e, {
        throwErr: !0
      }), f)) {
      let e = {
        premiumProgressBarEnabled: p.premiumProgressBarEnabled,
        banner: p.banner,
        splash: p.splash
      };
      await l.Z.saveGuild(p.id, e, {
        throwErr: !0
      })
    }
  }, [p, f, t, e]), j = i.useCallback(() => {
    null != p && (l.Z.init(p.id), (0, c.H7)())
  }, [p]);
  return (0, r.jsx)(a.Z, {
    submitting: g,
    errorMessage: b,
    onSave: x,
    onReset: j
  })
}