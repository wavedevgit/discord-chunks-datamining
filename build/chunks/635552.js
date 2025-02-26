/** Chunk was on web.js **/
"use strict";
n.d(t, {
  W: () => d
}), n(47120);
var r = n(192379),
  i = n(979554),
  o = n(809206),
  a = n(350327),
  s = n(884697),
  l = n(328456),
  c = n(388032);
let u = 6e3,
  d = e => {
    let {
      product: t,
      onSuccess: d,
      onError: f
    } = e, [_, p] = r.useState(!1), {
      firstAvatarDecoration: h,
      firstProfileEffect: g
    } = (0, l.R)(t), m = (0, s.x6)(t) ? c.NW.string(c.t.tf1ZZ2) : t.type === i.Z.AVATAR_DECORATION ? c.NW.string(c.t.zOA4a2) : c.NW.string(c.t.SWm2am);
    return {
      handleUseNow: r.useCallback(async () => {
        p(!0);
        try {
          if (null != h) {
            let e = {
              avatarDecoration: h
            };
            await (0, o.Mn)(e)
          }
          if (null != g) {
            let e = {
              profile_effect_id: g.id
            };
            await (0, a.Z)(e)
          } {
            let {
              ToastPosition: e,
              ToastType: t,
              createToast: r,
              popToast: i,
              showToast: o
            } = await Promise.resolve().then(n.bind(n, 481060));
            i(), o(r(m, t.MESSAGE, {
              duration: u,
              position: e.TOP
            }))
          }
          null == d || d()
        } catch (e) {
          null == f || f(e)
        } finally {
          p(!1)
        }
      }, [h, g, d, m, f]),
      isApplying: _
    }
  }