/** Chunk was on 21738 **/
/** chunk id: 542678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk92674 = require("./92674.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk330640 = require("./330640.js");
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
    } = e, h = (0, a.bG)([o.A], () => o.A.useReducedMotion), g = i.useMemo(() => false === t || h ? {
      opacity: 1
    } : n === s.wLy.ENTERED || n === s.wLy.MOUNTED ? {
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
    }, [t, d, h, n]), m = (0, s.zhh)(g);
    return (0, r.jsx)(l.animated.div, {
      style: m,
      className: c.Hp,
      children: p
    })
  }