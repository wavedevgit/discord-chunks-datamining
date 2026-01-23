/** Chunk was on 46952 **/
/** chunk id: 450481, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  p: () => p
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk631670 = require("./631670.js"),
  Chunk587600 = require("./587600.js"),
  Chunk207803 = require("./207803.js"),
  Chunk993408 = require("./993408.js"),
  Chunk442759 = require("./442759.js"),
  Chunk985018 = require("./985018.jsx");
let p = t => {
  let {
    product: e,
    onSuccess: p,
    onError: c
  } = t, [O, h] = i.useState(false), {
    firstAvatarDecoration: f,
    firstProfileEffect: b,
    firstNameplate: y
  } = (0, d.f5)(e), A = (0, u.aw)(e) ? o.intl.string(o.t.tf1ZZ4) : e.type === r.R.AVATAR_DECORATION ? o.intl.string(o.t.zOA4ax) : e.type === r.R.NAMEPLATE ? o.intl.string(o.t.gOzMvx) : o.intl.string(o.t.SWm2ai);
  return {
    handleUseNow: i.useCallback(async () => {
      h(true);
      let t = {};
      try {
        if (null != f && (t.avatarDecoration = f), null != b) {
          let t = (0, a.yX)({
            pendingProfileEffect: b
          });
          await (0, s.gi)(t)
        }
        null != y && (t.nameplate = y), Object.keys(t).length > 0 && await (0, l.yu)(t);
        {
          let {
            ToastPosition: t,
            ToastType: e,
            createToast: i,
            popToast: r,
            showToast: l
          } = await Promise.resolve().then(n.bind(n, 397927));
          r(), l(i(A, e.MESSAGE, {
            duration: 6e3,
            position: t.TOP
          }))
        }
        null == p || p()
      } catch (t) {
        null == c || c(t)
      } finally {
        h(false)
      }
    }, [f, b, y, p, A, c]),
    isApplying: O
  }
}