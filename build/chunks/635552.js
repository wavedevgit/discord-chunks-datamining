/** Chunk was on 30141 **/
/** chunk id: 635552, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
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
  } = t, [O, f] = i.useState(false), {
    firstAvatarDecoration: h,
    firstProfileEffect: b,
    firstNameplate: y
  } = (0, o.Rj)(e), A = (0, u.x6)(e) ? d.intl.string(d.t.tf1ZZ4) : e.type === r.Z.AVATAR_DECORATION ? d.intl.string(d.t.zOA4ax) : e.type === r.Z.NAMEPLATE ? d.intl.string(d.t.gOzMvx) : d.intl.string(d.t.SWm2ai);
  return {
    handleUseNow: i.useCallback(async () => {
      f(true);
      let t = {};
      try {
        if (null != h && (t.avatarDecoration = h), null != b) {
          let t = (0, a.g9)({
            pendingProfileEffect: b
          });
          await (0, s.Z)(t)
        }
        null != y && (t.nameplate = y), Object.keys(t).length > 0 && await (0, l.Mn)(t);
        {
          let {
            ToastPosition: t,
            ToastType: e,
            createToast: i,
            popToast: r,
            showToast: l
          } = await Promise.resolve().then(n.bind(n, 481060));
          r(), l(i(A, e.MESSAGE, {
            duration: 6e3,
            position: t.TOP
          }))
        }
        null == c || c()
      } catch (t) {
        null == p || p(t)
      } finally {
        f(false)
      }
    }, [h, b, y, c, A, p]),
    isApplying: O
  }
}