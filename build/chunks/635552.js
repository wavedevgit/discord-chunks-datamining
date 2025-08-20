/** Chunk was on 71387 **/
/** chunk id: 635552, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
  } = e, [p, v] = n.useState(false), {
    firstAvatarDecoration: f,
    firstProfileEffect: b
  } = (0, s.Rj)(t), m = (0, o.x6)(t) ? c.intl.string(c.t.tf1ZZ2) : t.type === i.Z.AVATAR_DECORATION ? c.intl.string(c.t.zOA4a2) : t.type === i.Z.NAMEPLATE ? c.intl.string(c.t.gOzMv7) : c.intl.string(c.t.SWm2am);
  return {
    handleUseNow: n.useCallback(async () => {
      v(true);
      try {
        if (null != f && await (0, a.Mn)({
            avatarDecoration: f
          }), null != b) {
          let e = {
            profile_effect_id: b.id
          };
          await (0, l.Z)(e)
        }
        if (t.type === i.Z.NAMEPLATE) {
          let e = t.items[0];
          await (0, a.Mn)({
            nameplate: e
          })
        } {
          let {
            ToastPosition: e,
            ToastType: t,
            createToast: n,
            popToast: i,
            showToast: a
          } = await Promise.resolve().then(r.bind(r, 481060));
          i(), a(n(m, t.MESSAGE, {
            duration: 6e3,
            position: e.TOP
          }))
        }
        null == u || u()
      } catch (e) {
        null == d || d(e)
      } finally {
        v(false)
      }
    }, [f, b, t, u, m, d]),
    isApplying: p
  }
}