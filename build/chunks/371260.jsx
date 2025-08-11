/** Chunk was on 1272 **/
/** chunk id: 371260, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk66418 = require("./66418.js");
let u = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: true
  },
  d = function(e) {
    let {
      animate: t,
      state: n,
      cleanUp: d,
      children: p
    } = e, f = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), h = i.useMemo(() => false === t || f ? {
      opacity: 1
    } : n === o.pJH.ENTERED || n === o.pJH.MOUNTED ? {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: u
    } : {
      from: {
        opacity: 1
      },
      to: {
        opacity: 0
      },
      config: u,
      onRest: () => {
        d()
      }
    }, [t, d, f, n]), g = (0, o.q_F)(h);
    return <l.animated.div style={g} className={c.transitionItem}>{p}</l.animated.div>
  }