/** Chunk was on 87624 **/
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
  } = t, [f, p] = i.useState(false), {
    firstAvatarDecoration: h,
    firstProfileEffect: E,
    firstNameplate: A
  } = (0, u.Rj)(e), y = (0, a.x6)(e) ? o.intl.string(o.t.tf1ZZ2) : e.type === r.Z.AVATAR_DECORATION ? o.intl.string(o.t.zOA4a2) : e.type === r.Z.NAMEPLATE ? o.intl.string(o.t.gOzMv7) : o.intl.string(o.t.SWm2am);
  return {
    handleUseNow: i.useCallback(async () => {
      p(true);
      let t = {};
      try {
        if (null != h && (t.avatarDecoration = h), null != E) {
          let t = {
            profile_effect_id: E.id
          };
          await (0, s.Z)(t)
        }
        null != A && (t.nameplate = A), Object.keys(t).length > 0 && await (0, l.Mn)(t);
        {
          let {
            ToastPosition: t,
            ToastType: e,
            createToast: i,
            popToast: r,
            showToast: l
          } = await Promise.resolve().then(n.bind(n, 481060));
          r(), l(i(y, e.MESSAGE, {
            duration: 6e3,
            position: t.TOP
          }))
        }
        null == d || d()
      } catch (t) {
        null == c || c(t)
      } finally {
        p(false)
      }
    }, [h, E, A, d, y, c]),
    isApplying: f
  }
}