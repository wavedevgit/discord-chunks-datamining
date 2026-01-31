/** Chunk was on 17534 **/
/** chunk id: 203548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk180686 = require("./180686.js");
let c = Math.ceil(Math.sqrt(115200)),
  u = (c - 240) / 2,
  d = Chunk64700.forwardRef(function(e, t) {
    let {
      children: n
    } = e, [d, h] = l.useState(false), p = l.useCallback(e => {
      h(e.contentRect.width)
    }, []), g = (0, a.w)(p, [], {
      fireOnMount: true
    }), [{
      shineSpring: f
    }, m] = (0, s.zhh)(() => ({
      from: {
        shineSpring: 0
      },
      config: {
        clamp: true,
        mass: 1,
        tension: 170,
        friction: 38
      }
    })), b = l.useCallback((e, t) => {
      m({
        shineSpring: 1,
        delay: t
      })
    }, [m]), A = l.useCallback(() => {
      m({
        shineSpring: 0,
        immediate: true
      })
    }, [m]), y = l.useMemo(() => {
      let e = (0, r.jsx)(i.animated.div, {
        className: o.q2,
        style: {
          transform: f.to(e => "translateX(calc(".concat(e * d, "px + ").concat(e * c, "px)) translateY(-50%) rotate(45deg)"))
        }
      });
      return n(o.VU, o.Qq, o.Kk, e)
    }, [n, d, f]);
    return l.useImperativeHandle(t, () => ({
      onMouseEnter: b,
      onMouseLeave: A
    }), [b, A]), (0, r.jsx)("div", {
      className: o.iE,
      onMouseEnter: b,
      onMouseLeave: A,
      onFocus: b,
      onBlur: A,
      ref: g,
      style: {
        "--custom-shine-dimensions": "".concat(240, "px"),
        "--custom-shine-rotated-dimensions-delta": "".concat(u, "px")
      },
      children: y
    })
  })