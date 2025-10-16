/** Chunk was on 72740 **/
/** chunk id: 635552, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk809206 = require("./809206.js"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk388032 = require("./388032.jsx");
let d = e => {
  let {
    product: t,
    onSuccess: d,
    onError: p
  } = e, [f, b] = r.useState(false), {
    firstAvatarDecoration: y,
    firstProfileEffect: O,
    firstNameplate: v
  } = (0, c.Rj)(t), g = (0, s.x6)(t) ? u.intl.string(u.t.tf1ZZ2) : t.type === l.Z.AVATAR_DECORATION ? u.intl.string(u.t.zOA4a2) : t.type === l.Z.NAMEPLATE ? u.intl.string(u.t.gOzMv7) : u.intl.string(u.t.SWm2am);
  return {
    handleUseNow: r.useCallback(async () => {
      b(true);
      let e = {};
      try {
        if (null != y && (e.avatarDecoration = y), null != O) {
          let e = (0, i.g9)({
            pendingProfileEffect: O
          });
          await (0, o.Z)(e)
        }
        null != v && (e.nameplate = v), Object.keys(e).length > 0 && await (0, a.Mn)(e);
        {
          let {
            ToastPosition: e,
            ToastType: t,
            createToast: r,
            popToast: l,
            showToast: a
          } = await Promise.resolve().then(n.bind(n, 481060));
          l(), a(r(g, t.MESSAGE, {
            duration: 6e3,
            position: e.TOP
          }))
        }
        null == d || d()
      } catch (e) {
        null == p || p(e)
      } finally {
        b(false)
      }
    }, [y, O, v, d, g, p]),
    isApplying: f
  }
}