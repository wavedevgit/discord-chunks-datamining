/** Chunk was on 30141 **/
/** chunk id: 635552, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk809206 = require("./809206.js"),
  Chunk350327 = require("./350327.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk388032 = require("./388032.jsx");
let o = t => {
  let {
    product: e,
    onSuccess: o,
    onError: c
  } = t, [p, f] = i.useState(false), {
    firstAvatarDecoration: h,
    firstProfileEffect: y,
    firstNameplate: O
  } = (0, u.Rj)(e), b = (0, a.x6)(e) ? d.intl.string(d.t.tf1ZZ2) : e.type === r.Z.AVATAR_DECORATION ? d.intl.string(d.t.zOA4a2) : e.type === r.Z.NAMEPLATE ? d.intl.string(d.t.gOzMv7) : d.intl.string(d.t.SWm2am);
  return {
    handleUseNow: i.useCallback(async () => {
      f(true);
      let t = {};
      try {
        if (null != h && (t.avatarDecoration = h), null != y) {
          let t = {
            profile_effect_id: y.id
          };
          await (0, s.Z)(t)
        }
        null != O && (t.nameplate = O), Object.keys(t).length > 0 && await (0, l.Mn)(t);
        {
          let {
            ToastPosition: t,
            ToastType: e,
            createToast: i,
            popToast: r,
            showToast: l
          } = await Promise.resolve().then(n.bind(n, 481060));
          r(), l(i(b, e.MESSAGE, {
            duration: 6e3,
            position: t.TOP
          }))
        }
        null == o || o()
      } catch (t) {
        null == c || c(t)
      } finally {
        f(false)
      }
    }, [h, y, O, o, b, c]),
    isApplying: p
  }
}