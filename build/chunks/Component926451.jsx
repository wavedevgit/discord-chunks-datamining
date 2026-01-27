/** Chunk was on 86142 **/
/** chunk id: 926451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk218681 = require("./218681.js"),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js");
let c = null != (r = window.ResizeObserver) ? r : Chunk218681.t;

function d(e) {
  let {
    show: t,
    children: n,
    top: r = 0,
    bottom: l = 0
  } = e, {
    ref: d,
    height: u
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
      height: t ? u : 0,
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
      ref: d,
      children: n
    })
  })
}