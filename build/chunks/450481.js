/** Chunk was on web.js **/
/** chunk id: 450481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk631670 = require("./631670.js"),
  Chunk587600 = require("./587600.js"),
  Chunk207803 = require("./207803.js"),
  Chunk993408 = require("./993408.js"),
  Chunk442759 = require("./442759.js"),
  Chunk985018 = require("./985018.jsx");
let d = 6e3,
  f = e => {
    let {
      product: t,
      onSuccess: f,
      onError: p
    } = e, [_, h] = r.useState(false), {
      firstAvatarDecoration: m,
      firstProfileEffect: g,
      firstNameplate: E
    } = (0, c.f5)(t), y = (0, l.aw)(t) ? u.intl.string(u.t.tf1ZZ4) : t.type === i.R.AVATAR_DECORATION ? u.intl.string(u.t.zOA4ax) : t.type === i.R.NAMEPLATE ? u.intl.string(u.t.gOzMvx) : u.intl.string(u.t.SWm2ai);
    return {
      handleUseNow: r.useCallback(async () => {
        h(true);
        let e = {};
        try {
          if (null != m && (e.avatarDecoration = m), null != g) {
            let e = (0, s.yX)({
              pendingProfileEffect: g
            });
            await (0, o.gi)(e)
          }
          null != E && (e.nameplate = E), Object.keys(e).length > 0 && await (0, a.yu)(e);
          {
            let {
              ToastPosition: e,
              ToastType: t,
              createToast: r,
              popToast: i,
              showToast: a
            } = await Promise.resolve().then(n.bind(n, 397927));
            i(), a(r(y, t.MESSAGE, {
              duration: d,
              position: e.TOP
            }))
          }
          null == f || f()
        } catch (e) {
          null == p || p(e)
        } finally {
          h(false)
        }
      }, [m, g, E, f, y, p]),
      isApplying: _
    }
  }