/** Chunk was on 1272 **/
/** chunk id: 845752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk243814 = require("./243814.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  return {
    [s.zMe.VOICE_SETTINGS_UPDATE]: {
      scope: {
        [a.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
      },
      handler: () => t => {
        let {
          prevState: n,
          dispatch: r
        } = t, l = e();
        return i().isEqual(l, n) || r(l), l
      }
    },
    [s.zMe.VOICE_SETTINGS_UPDATE_2]: {
      scope: a.lH,
      handler(e) {
        let {
          socket: n
        } = e;
        return e => {
          let {
            prevState: r,
            dispatch: l
          } = e;
          if (null == n.application.id) return r;
          let a = t(n.application.id);
          return i().isEqual(a, r) || l(a), a
        }
      }
    }
  }
}