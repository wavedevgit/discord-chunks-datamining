/** Chunk was on 86142 **/
/** chunk id: 926451, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk218681 = require("./218681.js"),
  Chunk970984 = require("./970984.js"),
  Chunk397927 = require("./397927.js");
let c = null != (r = window.ResizeObserver) ? r : Chunk218681.t;

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
  })(), h = (0, o.zhh)({
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
  }), p = (0, o.zhh)({
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
        opacity: p.opacity
      },
      ref: u,
      children: n
    })
  })
}