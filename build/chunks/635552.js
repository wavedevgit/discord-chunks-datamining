/** Chunk was on 75393 **/
/** chunk id: 635552, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => u
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk809206 = require("./809206.js"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk388032 = require("./388032.jsx");
let u = e => {
  let {
    product: t,
    onSuccess: u,
    onError: m
  } = e, [p, h] = a.useState(false), {
    firstAvatarDecoration: x,
    firstProfileEffect: f,
    firstNameplate: g
  } = (0, c.Rj)(t), b = (0, o.x6)(t) ? d.intl.string(d.t.tf1ZZ4) : t.type === l.Z.AVATAR_DECORATION ? d.intl.string(d.t.zOA4ax) : t.type === l.Z.NAMEPLATE ? d.intl.string(d.t.gOzMvx) : d.intl.string(d.t.SWm2ai);
  return {
    handleUseNow: a.useCallback(async () => {
      h(true);
      let e = {};
      try {
        if (null != x && (e.avatarDecoration = x), null != f) {
          let e = (0, i.g9)({
            pendingProfileEffect: f
          });
          await (0, s.Z)(e)
        }
        null != g && (e.nameplate = g), Object.keys(e).length > 0 && await (0, r.Mn)(e);
        {
          let {
            ToastPosition: e,
            ToastType: t,
            createToast: a,
            popToast: l,
            showToast: r
          } = await Promise.resolve().then(n.bind(n, 481060));
          l(), r(a(b, t.MESSAGE, {
            duration: 6e3,
            position: e.TOP
          }))
        }
        null == u || u()
      } catch (e) {
        null == m || m(e)
      } finally {
        h(false)
      }
    }, [x, f, g, u, b, m]),
    isApplying: p
  }
}