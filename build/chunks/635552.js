/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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
    } = e, [p, _] = r.useState(!1), {
      firstAvatarDecoration: h,
      firstProfileEffect: m
    } = (0, l.R)(t), g = (0, s.x6)(t) ? c.NW.string(c.t.tf1ZZ2) : t.type === i.Z.AVATAR_DECORATION ? c.NW.string(c.t.zOA4a2) : c.NW.string(c.t.SWm2am);
    return {
      handleUseNow: r.useCallback(async () => {
        _(!0);
        try {
          if (null != h) {
            let e = {
              avatarDecoration: h
            };
            await (0, o.Mn)(e)
          }
          if (null != m) {
            let e = {
              profile_effect_id: m.id
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
            i(), o(r(g, t.MESSAGE, {
              duration: u,
              position: e.TOP
            }))
          }
          null == d || d()
        } catch (e) {
          null == f || f(e)
        } finally {
          _(!1)
        }
      }, [h, m, d, g, f]),
      isApplying: p
    }
  }