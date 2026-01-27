/** Chunk was on web.js **/
/** chunk id: 623646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => A,
  Q: () => D
}), require("./896048.js"), require("./65821.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk621466 = require("./621466.js"),
  Chunk426333 = require("./426333.js"),
  Chunk38021 = require("./38021.jsx"),
  Chunk43990 = require("./43990.jsx"),
  Chunk508382 = require("./508382.jsx"),
  Chunk365912 = require("./365912.jsx"),
  Chunk992910 = require("./992910.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = new WeakMap;

function v(e) {
  let t = (0, u.p3)(e, m.qd);
  return null == t && (t = (0, u.wB)(e, _.IP)), null != t ? t : null
}

function A(e, t) {
  if (e.contains(t)) returntrue;
  let n = v(t);
  for (; null != n;) {
    let t = O.get(n);
    if (null == t) break;
    if (e.contains(t)) returntrue;
    n = v(t)
  }
  returnfalse
}
let I = 12;

function S(e) {
  let {
    positionKey: t,
    position: n,
    align: r
  } = e;
  return null != t ? t : "".concat(n, ":").concat(r)
}

function T(e, t, n, r) {
  switch (e) {
    case "top":
      return c()(null != t.bottom, "Missing bottom"), r.offsetHeight - (t.bottom + n.offsetHeight);
    case "bottom":
      return c()(null != t.top, "Missing top"), r.offsetHeight - (t.top + n.offsetHeight);
    case "left":
      return c()(null != t.right, "Missing right"), r.offsetWidth - (t.right + n.offsetWidth);
    case "right":
      return c()(null != t.left, "Missing left"), r.offsetWidth - (t.left + n.offsetWidth);
    case "center":
    case "window_center":
      return c()(null != t.left, "Missing left"), r.offsetWidth - (t.left + n.offsetWidth / 2);
    default:
      throw Error("Unexpected position: ".concat(e))
  }
}

function C(e, t, n) {
  return {
    top: e.top - n,
    left: e.left - t,
    bottom: e.bottom - n,
    right: e.right - t,
    width: e.width,
    height: e.height
  }
}

function N(e) {
  switch (e) {
    case "top":
      return "bottom";
    case "bottom":
      return "top";
    case "left":
      return "right";
    case "right":
      return "left";
    case "center":
      return "center";
    case "window_center":
      return "window_center";
    default:
      throw Error()
  }
}

function w(e, t, n) {
  if (null != e && e < 0 && ("top" === n.position || "bottom" === n.position) && null != t && Math.abs(e) < (null == t ? true : t.offsetHeight) && null != n.style) {
    let t = "top" === n.position ? "bottom" : "top",
      r = n.style[t];
    return b(E({}, n), {
      style: b(E({}, n.style), {
        [t]: (null == r ? 0 : r) + e
      })
    })
  }
  return n
}

function R(e) {
  let {
    targetRef: t,
    overrideTargetRect: n
  } = e;
  return null != n ? n : (c()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect())
}

function P(e, t) {
  let n = R(e),
    r = R(t);
  return n.top === r.top && n.left === r.left
}
class D extends(r = Chunk64700.Component) {
  formatDimension(e) {
    return this.props.useRawTargetDimensions ? e : Math.ceil(e)
  }
  nudgeLeftAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props;
    if (!r) return e;
    let i = n.offsetWidth,
      a = e + t.offsetWidth - i + I;
    return a > 0 ? Math.max(I, e - a) : Math.max(I, e)
  }
  nudgeRightAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props;
    if (!r) return 0;
    let i = t.offsetWidth;
    return Math.min(n.offsetWidth - e - i - I, 0)
  }
  getHorizontalAlignmentStyle(e, t, n, r) {
    let {
      align: i,
      offset: a = 0
    } = this.props;
    switch (i) {
      case "left": {
        let i = this.formatDimension(this.nudgeLeftAlignment(e.left + a, t, n)),
          o = this.formatDimension(e.left + a) - i;
        return {
          style: b(E({}, r), {
            left: i
          }),
          nudge: o
        }
      }
      case "right": {
        let i = this.formatDimension(n.offsetWidth - e.right - a),
          o = this.nudgeRightAlignment(i, t, n);
        return {
          style: b(E({}, r), {
            right: i + o
          }),
          nudge: 0
        }
      }
      case "center": {
        let i = e.left + (e.width - t.offsetWidth) / 2 + a,
          o = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
          s = this.formatDimension(i) - o;
        return {
          style: b(E({}, r), {
            left: o
          }),
          nudge: s
        }
      }
      default:
        throw Error("Unsupported align: ".concat(i))
    }
  }
  nudgeTopAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props;
    if (!r) return e;
    if (e < 0) return 0;
    let i = e + t.getBoundingClientRect().height - n.offsetHeight + I;
    return i > 0 ? Math.max(I, e - i) : e
  }
  nudgeBottomAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props, i = n.offsetHeight, a = i - e;
    if (!r) return a;
    let o = a + t.offsetHeight - i + I;
    return o > 0 ? Math.max(I, a - o) : a
  }
  getVerticalAlignmentStyle(e, t, n, r) {
    let {
      align: i,
      offset: a = 0
    } = this.props;
    switch (i) {
      case "top": {
        let i = this.formatDimension(this.nudgeTopAlignment(e.top + a, t, n)),
          o = this.formatDimension(e.top + a) - i;
        return {
          style: b(E({}, r), {
            top: i
          }),
          nudge: o
        }
      }
      case "bottom": {
        let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom + a, t, n)),
          o = this.formatDimension(e.bottom + a) - i;
        return {
          style: b(E({}, r), {
            bottom: i
          }),
          nudge: o
        }
      }
      case "center": {
        let i = e.top + (e.height - t.offsetHeight) / 2 + a,
          o = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
          s = this.formatDimension(i) - o;
        return {
          style: b(E({}, r), {
            top: o
          }),
          nudge: s
        }
      }
      default:
        throw Error("Unsupported align: ".concat(i))
    }
  }
  calculatePositionStyle(e, t, n, r) {
    let {
      spacing: i = 0
    } = this.props, a = R(this.props), o = n.getBoundingClientRect(), s = C(a, o.left, o.top);
    switch (e) {
      case "top":
        return this.getHorizontalAlignmentStyle(s, t, n, {
          bottom: n.offsetHeight - s.top + i
        });
      case "bottom":
        return this.getHorizontalAlignmentStyle(s, t, n, {
          top: s.bottom + i
        });
      case "left":
        return this.getVerticalAlignmentStyle(s, t, n, {
          right: n.offsetWidth - s.left + i
        });
      case "right":
        return this.getVerticalAlignmentStyle(s, t, n, {
          left: s.right + i
        });
      case "overlap_vertical":
        return this.getHorizontalAlignmentStyle(s, t, n, {
          [r]: 0
        });
      case "overlap_horizontal":
        return this.getVerticalAlignmentStyle(s, t, n, {
          [r]: I
        });
      case "center":
        return this.getVerticalAlignmentStyle(s, t, n, {
          left: s.left + s.width / 2 - t.offsetWidth / 2 + i
        });
      case "window_center":
        return this.getVerticalAlignmentStyle(s, t, n, {
          left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0)
        });
      default:
        throw Error("Unexpected position: ".concat(e))
    }
  }
  calculateState() {
    let {
      position: e,
      autoInvert: t
    } = this.props, n = this.elementRef.current;
    c()(null != n, "Unexpected null element");
    let r = (0, h.J$)(n),
      {
        style: i,
        nudge: a
      } = this.calculatePositionStyle(e, n, r),
      o = {
        position: e,
        style: i,
        nudge: a
      },
      s = T(e, i, n, r),
      l = s,
      u = null,
      d = 0;
    if (t && s < 0) {
      let t = N(e),
        i = this.calculatePositionStyle(t, n, r);
      u = i.style, d = i.nudge;
      let a = T(t, u, n, r);
      if (a > s && (o = {
          position: t,
          style: u,
          nudge: d
        }, l = a), s < 0 && a < 0) {
        let i, a = o.position;
        if ((i = "top" === a || "bottom" === a ? "overlap_vertical" : "left" === a || "right" === a ? "overlap_horizontal" : a) !== e && i !== t) {
          let e = this.calculatePositionStyle(i, n, r, a),
            t = T(N(a), e.style, n, r);
          t > l && (o = E({
            position: a
          }, e), l = t)
        }
      }
    }
    return w(l, n, o)
  }
  componentDidMount() {
    var e, t;
    let {
      targetRef: n,
      onMount: r
    } = this.props;
    this.setState(E({
      isPositioned: true
    }, this.calculateState()));
    let i = this.elementRef.current;
    c()(null != i, "Missing elementRef"), null != n.current && O.set(i, n.current), null == i || null == (t = i.ownerDocument) || null == (e = t.defaultView) || e.addEventListener("resize", this.updatePosition), null == r || r()
  }
  componentDidUpdate(e, t) {
    if (S(e) === S(this.props) && P(e, this.props) || this.updatePosition(), t.position !== this.state.position) {
      var n, r;
      null == (n = (r = this.props).onPositionChange) || n.call(r, this.state.position)
    }
  }
  componentWillUnmount() {
    var e, t, n, r;
    let i = this.elementRef.current;
    c()(null != i, "Missing elementRef"), O.delete(i), null == i || null == (t = i.ownerDocument) || null == (e = t.defaultView) || e.removeEventListener("resize", this.updatePosition), null == (n = (r = this.props).onUnmount) || n.call(r)
  }
  calculateMaxHeight() {
    let e = this.elementRef.current;
    if (null == e) return;
    let t = (0, h.J$)(e),
      n = this.state.style;
    return null != n.top ? Math.max(0, t.offsetHeight - n.top - I) : null != n.bottom ? Math.max(0, t.offsetHeight - n.bottom - I) : Math.max(0, t.offsetHeight - 2 * I)
  }
  render() {
    let {
      id: e,
      className: t,
      children: n,
      fixed: r,
      disablePointerEvents: a,
      clickTrap: o = false
    } = this.props, {
      position: l,
      isPositioned: c,
      nudge: u
    } = this.state, _ = this.calculateMaxHeight();
    return (0, i.jsx)("div", {
      className: s()({
        [m.ld]: true,
        [m.x7]: o
      }),
      children: (0, i.jsx)(f.aS, {
        children: o => {
          let {
            disableAdaptiveTheme: f
          } = o;
          return (0, i.jsx)(p.N, {
            disableAdaptiveTheme: f,
            children: o => (0, i.jsx)("div", {
              id: e,
              className: s()(t, o, m.qd, {
                [m.CA]: false,
                [m.Hc]: a
              }),
              style: b(E({
                position: r ? "fixed" : "absolute"
              }, this.state.style), {
                "--reference-position-layer-max-height": null != _ ? "".concat(_, "px") : true
              }),
              ref: this.elementRef,
              children: (0, i.jsx)(d.xp, {
                containerRef: this.elementRef,
                children: n({
                  position: l,
                  nudge: u,
                  isPositioned: c
                }, this.updatePosition)
              })
            })
          })
        }
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "elementRef", a.createRef()), g(this, "state", {
      style: Object.freeze({}),
      position: this.props.autoInvert ? null : this.props.position,
      nudge: 0,
      isPositioned: false
    }), g(this, "updatePosition", () => {
      this.setState(this.calculateState())
    })
  }
}
g(D, "defaultProps", {
  nudgeAlignIntoViewport: false,
  spacing: 0,
  autoInvert: false,
  disablePointerEvents: false
})