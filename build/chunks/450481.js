/** Chunk was on 98763 **/
/** chunk id: 450481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk631670 = require("./631670.js"),
  Chunk587600 = require("./587600.js"),
  Chunk207803 = require("./207803.js"),
  Chunk993408 = require("./993408.js"),
  Chunk442759 = require("./442759.js"),
  Chunk985018 = require("./985018.jsx");
let d = e => {
  let {
    product: t,
    onSuccess: d,
    onError: p
  } = e, [v, b] = r.useState(false), {
    firstAvatarDecoration: y,
    firstProfileEffect: m,
    firstNameplate: f
  } = (0, c.f5)(t), g = (0, s.aw)(t) ? u.intl.string(u.t.tf1ZZ4) : t.type === l.R.AVATAR_DECORATION ? u.intl.string(u.t.zOA4ax) : t.type === l.R.NAMEPLATE ? u.intl.string(u.t.gOzMvx) : u.intl.string(u.t.SWm2ai);
  return {
    handleUseNow: r.useCallback(async () => {
      b(true);
      let e = {};
      try {
        if (null != y && (e.avatarDecoration = y), null != m) {
          let e = (0, i.yX)({
            pendingProfileEffect: m
          });
          await (0, o.gi)(e)
        }
        null != f && (e.nameplate = f), Object.keys(e).length > 0 && await (0, a.yu)(e);
        {
          let {
            ToastPosition: e,
            ToastType: t,
            createToast: r,
            popToast: l,
            showToast: a
          } = await Promise.resolve().then(n.bind(n, 397927));
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
    }, [y, m, f, d, g, p]),
    isApplying: v
  }
}