/** Chunk was on web.js **/
/** chunk id: 198466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  m: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk315824 = require("./315824.js");
let d = 200,
  f = 20,
  p = 200;

function _(e) {
  let {
    children: t,
    confettiTriggerRef: n,
    setConfettiCount: c,
    setShouldFireConfetti: f,
    tooltipProps: _
  } = e, [m, h] = i.useState(0), g = i.useRef(false), E = i.useRef(true), b = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), {
    scaleFactor: y
  } = (0, s.q_F)({
    from: {
      scaleFactor: 1
    },
    to: {
      scaleFactor: 1 === m ? .9 : 2 === m ? 1.2 : 1
    },
    config: {
      tension: 380,
      friction: 7
    }
  });
  return (i.useEffect(() => () => {
    E.current = false
  }, []), b) ? t : (0, r.jsx)(a.animated.div, {
    className: u.confettiTriggerWrapper,
    style: {
      transform: y.to(e => "scale(".concat(e, ")"))
    },
    children: (0, r.jsx)(s.P3F, {
      className: u.confettiTrigger,
      onMouseDown: () => {
        h(1), f(true), c(e => Math.min(e + 2, p)), window.clearTimeout(g.current), g.current = window.setTimeout(() => {
          E.current && c(0)
        }, d)
      },
      onMouseUp: () => {
        h(0), f(false)
      },
      onMouseEnter: () => {
        var e;
        h(2), null == _ || null == (e = _.onMouseEnter) || e.call(_)
      },
      onMouseLeave: () => {
        var e;
        h(0), null == _ || null == (e = _.onMouseLeave) || e.call(_)
      },
      innerRef: n,
      children: t
    })
  })
}
let m = function(e) {
  let {
    confettiCount: t,
    confettiTriggerRef: n,
    isFiring: r
  } = e, {
    cannon: a,
    createMultipleConfettiAt: s
  } = i.useContext(c.h), u = (0, o.e7)([l.Z], () => l.Z.useReducedMotion);
  return i.useEffect(() => () => {
    null == a || a.clearConfetti()
  }, [a]), i.useEffect(() => {
    if (!r || u || null == n.current) return;
    let e = n.current.getBoundingClientRect();
    s(e.left + e.width / 2, e.top + e.height / 2, {
      velocity: {
        type: "static-random",
        minValue: {
          x: false,
          y: false
        },
        maxValue: {
          x: 180,
          y: 180
        }
      }
    }, Math.max(t, f))
  }, [t, n, s, r, u]), null
}