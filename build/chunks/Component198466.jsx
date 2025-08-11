/** Chunk was on web.js **/
/** chunk id: 198466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h,
  m: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk185091 = require("./185091.js");
let d = 200,
  f = 20,
  _ = 200;

function p(e) {
  let {
    children: t,
    confettiTriggerRef: n,
    setConfettiCount: c,
    setShouldFireConfetti: f,
    tooltipProps: p
  } = e, [h, m] = i.useState(0), g = i.useRef(false), E = i.useRef(true), b = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), {
    scaleFactor: y
  } = (0, s.q_F)({
    from: {
      scaleFactor: 1
    },
    to: {
      scaleFactor: 1 === h ? .9 : 2 === h ? 1.2 : 1
    },
    config: {
      tension: 380,
      friction: 7
    }
  });
  return (i.useEffect(() => () => {
    E.current = false
  }, []), b) ? t : (0, r.jsx)(o.animated.div, {
    className: u.confettiTriggerWrapper,
    style: {
      transform: y.to(e => "scale(".concat(e, ")"))
    },
    children: (0, r.jsx)(s.P3F, {
      className: u.confettiTrigger,
      onMouseDown: () => {
        m(1), f(true), c(e => Math.min(e + 2, _)), window.clearTimeout(g.current), g.current = window.setTimeout(() => {
          E.current && c(0)
        }, d)
      },
      onMouseUp: () => {
        m(0), f(false)
      },
      onMouseEnter: () => {
        var e;
        m(2), null == p || null == (e = p.onMouseEnter) || e.call(p)
      },
      onMouseLeave: () => {
        var e;
        m(0), null == p || null == (e = p.onMouseLeave) || e.call(p)
      },
      innerRef: n,
      children: t
    })
  })
}
let h = function(e) {
  let {
    confettiCount: t,
    confettiTriggerRef: n,
    isFiring: r
  } = e, {
    cannon: o,
    createMultipleConfettiAt: s
  } = i.useContext(c.h), u = (0, a.e7)([l.Z], () => l.Z.useReducedMotion);
  return i.useEffect(() => () => {
    null == o || o.clearConfetti()
  }, [o]), i.useEffect(() => {
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