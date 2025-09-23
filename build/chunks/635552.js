/** Chunk was on 75157 **/
/** chunk id: 635552, original params: t,e,n (module,exports,require) **/
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
let d = t => {
  let {
    product: e,
    onSuccess: d,
    onError: c
  } = t, [p, f] = i.useState(false), {
    firstAvatarDecoration: y,
    firstProfileEffect: g,
    firstNameplate: b
  } = (0, o.Rj)(e), m = (0, a.x6)(e) ? u.intl.string(u.t.tf1ZZ2) : e.type === r.Z.AVATAR_DECORATION ? u.intl.string(u.t.zOA4a2) : e.type === r.Z.NAMEPLATE ? u.intl.string(u.t.gOzMv7) : u.intl.string(u.t.SWm2am);
  return {
    handleUseNow: i.useCallback(async () => {
      f(true);
      let t = {};
      try {
        if (null != y && (t.avatarDecoration = y), null != g) {
          let t = {
            profile_effect_id: g.id
          };
          await (0, s.Z)(t)
        }
        null != b && (t.nameplate = b), Object.keys(t).length > 0 && await (0, l.Mn)(t);
        {
          let {
            ToastPosition: t,
            ToastType: e,
            createToast: i,
            popToast: r,
            showToast: l
          } = await Promise.resolve().then(n.bind(n, 481060));
          r(), l(i(m, e.MESSAGE, {
            duration: 6e3,
            position: t.TOP
          }))
        }
        null == d || d()
      } catch (t) {
        null == c || c(t)
      } finally {
        f(false)
      }
    }, [y, g, b, d, m, c]),
    isApplying: p
  }
}