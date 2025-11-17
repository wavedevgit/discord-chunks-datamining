/** Chunk was on 78825 **/
/** chunk id: 635552, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  W: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk809206 = require("./809206.js"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk388032 = require("./388032.jsx");
let d = e => {
  let {
    product: n,
    onSuccess: d,
    onError: v
  } = e, [p, f] = r.useState(false), {
    firstAvatarDecoration: b,
    firstProfileEffect: g,
    firstNameplate: m
  } = (0, c.Rj)(n), h = (0, s.x6)(n) ? u.intl.string(u.t.tf1ZZ4) : n.type === l.Z.AVATAR_DECORATION ? u.intl.string(u.t.zOA4ax) : n.type === l.Z.NAMEPLATE ? u.intl.string(u.t.gOzMvx) : u.intl.string(u.t.SWm2ai);
  return {
    handleUseNow: r.useCallback(async () => {
      f(true);
      let e = {};
      try {
        if (null != b && (e.avatarDecoration = b), null != g) {
          let e = (0, a.g9)({
            pendingProfileEffect: g
          });
          await (0, o.Z)(e)
        }
        null != m && (e.nameplate = m), Object.keys(e).length > 0 && await (0, i.Mn)(e);
        {
          let {
            ToastPosition: e,
            ToastType: n,
            createToast: r,
            popToast: l,
            showToast: i
          } = await Promise.resolve().then(t.bind(t, 481060));
          l(), i(r(h, n.MESSAGE, {
            duration: 6e3,
            position: e.TOP
          }))
        }
        null == d || d()
      } catch (e) {
        null == v || v(e)
      } finally {
        f(false)
      }
    }, [b, g, m, d, h, v]),
    isApplying: p
  }
}