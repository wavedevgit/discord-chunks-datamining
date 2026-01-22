/** Chunk was on 21738 **/
/** chunk id: 217090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk179771 = require("./179771.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  return {
    [s.ZE4.VOICE_SETTINGS_UPDATE]: {
      scope: {
        [a.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
      },
      handler: () => t => {
        let {
          prevState: n,
          dispatch: r
        } = t, l = e();
        return i().isEqual(l, n) || r(l), l
      }
    },
    [s.ZE4.VOICE_SETTINGS_UPDATE_2]: {
      scope: a.hj,
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