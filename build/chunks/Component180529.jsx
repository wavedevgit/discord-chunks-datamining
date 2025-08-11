/** Chunk was on 84956 **/
/** chunk id: 180529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk796075 = require("./796075.js"),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js");
let u = null != (i = window.ResizeObserver) ? i : Chunk796075.d,
  d = () => {
    let e = Chunk73800.useRef(null),
      [t, n] = Chunk73800.useState(0),
      i = Chunk73800.useMemo(() => new u(e => {
        let [t] = e;
        return n(t.contentRect.height)
      }), []);
    return Chunk73800.useLayoutEffect(() => (null != module.current && i.observe(module.current), () => i.disconnect()), [i]), {
      ref: module,
      height: exports
    }
  };

function g(e) {
  let {
    show: t,
    children: n,
    top: i = 0,
    bottom: o = 0
  } = e, {
    ref: a,
    height: u
  } = d(), g = (0, l.q_F)({
    from: {
      height: 0,
      paddingBottom: "0px",
      marginTop: "0px"
    },
    to: {
      height: t ? u : 0,
      paddingBottom: t ? "".concat(o, "px") : "0px",
      marginTop: t ? "".concat(i, "px") : "0px"
    },
    config: {
      tension: 170,
      friction: 26
    }
  }), c = (0, l.q_F)({
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
  return (0, r.jsx)(s.animated.div, {
    style: {
      overflow: "hidden",
      height: g.height,
      paddingBottom: g.paddingBottom,
      marginTop: g.marginTop
    },
    children: (0, r.jsx)(s.animated.div, {
      style: {
        opacity: c.opacity
      },
      ref: a,
      children: n
    })
  })
}