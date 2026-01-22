/** Chunk was on 97492 **/
/** chunk id: 203548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk432022 = require("./432022.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk180686 = require("./180686.js");
let c = Math.ceil(Math.sqrt(115200)),
  u = (c - 240) / 2,
  d = Chunk64700.forwardRef(function(e, t) {
    let {
      children: n
    } = e, [d, f] = l.useState(false), p = l.useCallback(e => {
      f(e.contentRect.width)
    }, []), h = (0, s.w)(p, [], {
      fireOnMount: true
    }), [{
      shineSpring: b
    }, g] = (0, a.zhh)(() => ({
      from: {
        shineSpring: 0
      },
      config: {
        clamp: true,
        mass: 1,
        tension: 170,
        friction: 38
      }
    })), m = l.useCallback((e, t) => {
      g({
        shineSpring: 1,
        delay: t
      })
    }, [g]), A = l.useCallback(() => {
      g({
        shineSpring: 0,
        immediate: true
      })
    }, [g]), y = l.useMemo(() => {
      let e = (0, r.jsx)(i.animated.div, {
        className: o.q2,
        style: {
          transform: b.to(e => "translateX(calc(".concat(e * d, "px + ").concat(e * c, "px)) translateY(-50%) rotate(45deg)"))
        }
      });
      return n(o.VU, o.Qq, o.Kk, e)
    }, [n, d, b]);
    return l.useImperativeHandle(t, () => ({
      onMouseEnter: m,
      onMouseLeave: A
    }), [m, A]), (0, r.jsx)("div", {
      className: o.iE,
      onMouseEnter: m,
      onMouseLeave: A,
      onFocus: m,
      onBlur: A,
      ref: h,
      style: {
        "--custom-shine-dimensions": "".concat(240, "px"),
        "--custom-shine-rotated-dimensions-delta": "".concat(u, "px")
      },
      children: y
    })
  })