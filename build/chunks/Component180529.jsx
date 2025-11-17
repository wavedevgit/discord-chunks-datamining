/** Chunk was on 27978 **/
/** chunk id: 180529, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk796075 = require("./796075.js"),
  Chunk878342 = require("./878342.js"),
  Chunk481060 = require("./481060.js");
let c = null != (r = window.ResizeObserver) ? r : Chunk796075.d;

function u(e) {
  let {
    show: t,
    children: n,
    top: r = 0,
    bottom: l = 0
  } = e, {
    ref: u,
    height: d
  } = (() => {
    let e = s.useRef(null),
      [t, n] = s.useState(0),
      r = s.useMemo(() => new c(e => {
        let [t] = e;
        return n(t.contentRect.height)
      }), []);
    return s.useLayoutEffect(() => (null != e.current && r.observe(e.current), () => r.disconnect()), [r]), {
      ref: e,
      height: t
    }
  })(), h = (0, o.q_F)({
    from: {
      height: 0,
      paddingBottom: "0px",
      marginTop: "0px"
    },
    to: {
      height: t ? d : 0,
      paddingBottom: t ? "".concat(l, "px") : "0px",
      marginTop: t ? "".concat(r, "px") : "0px"
    },
    config: {
      tension: 170,
      friction: 26
    }
  }), g = (0, o.q_F)({
    from: {
      opacity: 0
    },
    to: {
      opacity: +!!t
    },
    config: {
      duration: 200,
      easing: t ? e => e ** 4 : e => e * (2 - e)
    }
  });
  return (0, i.jsx)(a.animated.div, {
    style: {
      overflow: "hidden",
      height: h.height,
      paddingBottom: h.paddingBottom,
      marginTop: h.marginTop
    },
    children: (0, i.jsx)(a.animated.div, {
      style: {
        opacity: g.opacity
      },
      ref: u,
      children: n
    })
  })
}