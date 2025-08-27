/** Chunk was on web.js **/
/** chunk id: 635552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk809206 = require("./809206.js"),
  Chunk350327 = require("./350327.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk388032 = require("./388032.jsx");
let u = 6e3,
  d = e => {
    let {
      product: t,
      onSuccess: d,
      onError: f
    } = e, [_, p] = r.useState(false), {
      firstAvatarDecoration: h,
      firstProfileEffect: m,
      firstNameplate: g
    } = (0, l.Rj)(t), E = (0, s.x6)(t) ? c.intl.string(c.t.tf1ZZ2) : t.type === i.Z.AVATAR_DECORATION ? c.intl.string(c.t.zOA4a2) : t.type === i.Z.NAMEPLATE ? c.intl.string(c.t.gOzMv7) : c.intl.string(c.t.SWm2am);
    return {
      handleUseNow: r.useCallback(async () => {
        p(true);
        let e = {};
        try {
          if (null != h && (e.avatarDecoration = h), null != m) {
            let e = {
              profile_effect_id: m.id
            };
            await (0, o.Z)(e)
          }
          null != g && (e.nameplate = g), Object.keys(e).length > 0 && await (0, a.Mn)(e);
          {
            let {
              ToastPosition: e,
              ToastType: t,
              createToast: r,
              popToast: i,
              showToast: a
            } = await Promise.resolve().then(n.bind(n, 481060));
            i(), a(r(E, t.MESSAGE, {
              duration: u,
              position: e.TOP
            }))
          }
          null == d || d()
        } catch (e) {
          null == f || f(e)
        } finally {
          p(false)
        }
      }, [h, m, g, d, E, f]),
      isApplying: _
    }
  }