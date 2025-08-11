/** Chunk was on 45620 **/
/** chunk id: 635552, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => u
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk979554 = require("./979554.js"),
  Chunk809206 = require("./809206.js"),
  Chunk350327 = require("./350327.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk388032 = require("./388032.jsx");
let u = e => {
  let {
    product: t,
    onSuccess: u,
    onError: d
  } = e, [p, g] = n.useState(false), {
    firstAvatarDecoration: f,
    firstProfileEffect: b
  } = (0, s.Rj)(t), h = (0, o.x6)(t) ? c.intl.string(c.t.tf1ZZ2) : t.type === l.Z.AVATAR_DECORATION ? c.intl.string(c.t.zOA4a2) : t.type === l.Z.NAMEPLATE ? c.intl.string(c.t.gOzMv7) : c.intl.string(c.t.SWm2am);
  return {
    handleUseNow: n.useCallback(async () => {
      g(true);
      try {
        if (null != f && await (0, a.Mn)({
            avatarDecoration: f
          }), null != b) {
          let e = {
            profile_effect_id: b.id
          };
          await (0, i.Z)(e)
        }
        if (t.type === l.Z.NAMEPLATE) {
          let e = t.items[0];
          await (0, a.Mn)({
            nameplate: e
          })
        } {
          let {
            ToastPosition: e,
            ToastType: t,
            createToast: n,
            popToast: l,
            showToast: a
          } = await Promise.resolve().then(r.bind(r, 481060));
          l(), a(n(h, t.MESSAGE, {
            duration: 6e3,
            position: e.TOP
          }))
        }
        null == u || u()
      } catch (e) {
        null == d || d(e)
      } finally {
        g(false)
      }
    }, [f, b, t, u, h, d]),
    isApplying: p
  }
}