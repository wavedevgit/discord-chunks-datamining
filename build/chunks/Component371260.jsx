/** Chunk was on 1272 **/
/** chunk id: 371260, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk689628 = require("./689628.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk514482 = require("./514482.js");
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
    } = e, f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), h = i.useMemo(() => false === t || f ? {
      opacity: 1
    } : n === s.pJH.ENTERED || n === s.pJH.MOUNTED ? {
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
    }, [t, d, f, n]), g = (0, s.q_F)(h);
    return (0, r.jsx)(l.animated.div, {
      style: g,
      className: c.transitionItem,
      children: p
    })
  }