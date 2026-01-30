/** Chunk was on web.js **/
/** chunk id: 963894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  H: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk970984 = require("./970984.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk726368 = require("./726368.js");
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
  } = e, [h, m] = i.useState(0), g = i.useRef(false), E = i.useRef(true), y = (0, o.bG)([l.A], () => l.A.useReducedMotion), {
    scaleFactor: b
  } = (0, s.zhh)({
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
  }, []), y) ? t : (0, r.jsx)(a.animated.div, {
    className: u.WD,
    style: {
      transform: b.to(e => "scale(".concat(e, ")"))
    },
    children: (0, r.jsx)(s.DUT, {
      className: u.hh,
      onMouseDown: () => {
        m(1), f(true), c(e => Math.min(e + 2, p)), window.clearTimeout(g.current), g.current = window.setTimeout(() => {
          E.current && c(0)
        }, d)
      },
      onMouseUp: () => {
        m(0), f(false)
      },
      onMouseEnter: () => {
        var e;
        m(2), null == _ || null == (e = _.onMouseEnter) || e.call(_)
      },
      onMouseLeave: () => {
        var e;
        m(0), null == _ || null == (e = _.onMouseLeave) || e.call(_)
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
    cannon: a,
    createMultipleConfettiAt: s
  } = i.useContext(c.x), u = (0, o.bG)([l.A], () => l.A.useReducedMotion);
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