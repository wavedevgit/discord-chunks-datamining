/** Chunk was on 67000 **/
/** chunk id: 633667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk807794 = require("./807794.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk595523 = require("./595523.js");
let c = Math.ceil(Math.sqrt(115200)),
  u = (c - 240) / 2,
  d = Chunk473749.forwardRef(function(e, t) {
    let {
      children: n
    } = e, [d, f] = i.useState(false), h = i.useCallback(e => {
      f(e.contentRect.width)
    }, []), p = (0, o.y)(h, [], {
      fireOnMount: true
    }), [{
      shineSpring: g
    }, b] = (0, a.q_F)(() => ({
      from: {
        shineSpring: 0
      },
      config: {
        clamp: true,
        mass: 1,
        tension: 170,
        friction: 38
      }
    })), m = i.useCallback((e, t) => {
      b({
        shineSpring: 1,
        delay: t
      })
    }, [b]), y = i.useCallback(() => {
      b({
        shineSpring: 0,
        immediate: true
      })
    }, [b]), O = i.useMemo(() => {
      let e = (0, r.jsx)(l.animated.div, {
        className: s.shine,
        style: {
          transform: g.to(e => "translateX(calc(".concat(e * d, "px + ").concat(e * c, "px)) translateY(-50%) rotate(45deg)"))
        }
      });
      return n(s.withGradient, s.text, s.icon, e)
    }, [n, d, g]);
    return i.useImperativeHandle(t, () => ({
      onMouseEnter: m,
      onMouseLeave: y
    }), [m, y]), (0, r.jsx)("div", {
      className: s.wrapper,
      onMouseEnter: m,
      onMouseLeave: y,
      onFocus: m,
      onBlur: y,
      ref: p,
      style: {
        "--custom-shine-dimensions": "".concat(240, "px"),
        "--custom-shine-rotated-dimensions-delta": "".concat(u, "px")
      },
      children: O
    })
  })