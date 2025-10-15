/** Chunk was on 87624 **/
/** chunk id: 635552, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk809206 = require("./809206.js"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk388032 = require("./388032.jsx");
let c = t => {
  let {
    product: e,
    onSuccess: c,
    onError: p
  } = t, [h, E] = i.useState(false), {
    firstAvatarDecoration: f,
    firstProfileEffect: A,
    firstNameplate: O
  } = (0, d.Rj)(e), C = (0, u.x6)(e) ? o.intl.string(o.t.tf1ZZ4) : e.type === r.Z.AVATAR_DECORATION ? o.intl.string(o.t.zOA4ax) : e.type === r.Z.NAMEPLATE ? o.intl.string(o.t.gOzMvx) : o.intl.string(o.t.SWm2ai);
  return {
    handleUseNow: i.useCallback(async () => {
      E(true);
      let t = {};
      try {
        if (null != f && (t.avatarDecoration = f), null != A) {
          let t = (0, a.g9)({
            pendingProfileEffect: A
          });
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
          r(), l(i(C, e.MESSAGE, {
            duration: 6e3,
            position: t.TOP
          }))
        }
        null == c || c()
      } catch (t) {
        null == p || p(t)
      } finally {
        E(false)
      }
    }, [f, A, O, c, C, p]),
    isApplying: h
  }
}