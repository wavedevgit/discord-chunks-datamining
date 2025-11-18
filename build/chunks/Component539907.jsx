/** Chunk was on web.js **/
/** chunk id: 539907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => w,
  t: () => I
}), require("./388685.js"), require("./415506.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk374470 = require("./374470.js"),
  Chunk762328 = require("./762328.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk585483 = require("./585483.js"),
  Chunk872801 = require("./872801.js"),
  Chunk981631 = require("./981631.js"),
  Chunk305857 = require("./305857.js");

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

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = new WeakMap;

function v(e) {
  let t = (0, p.Z)(e, m.layer);
  return null == t && (t = (0, u.MD)(e, d.TA)), null != t ? t : null
}

function I(e, t) {
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
let T = 12;

function S(e) {
  let {
    positionKey: t,
    position: n,
    align: r
  } = e;
  return null != t ? t : "".concat(n, ":").concat(r)
}

function A(e, t, n, r) {
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

function R(e, t, n) {
  if (null != e && e < 0 && ("top" === n.position || "bottom" === n.position) && null != t && Math.abs(e) < (null == t ? true : t.offsetHeight) && null != n.style) {
    let t = "top" === n.position ? "bottom" : "top",
      r = n.style[t];
    return y(E({}, n), {
      style: y(E({}, n.style), {
        [t]: (null == r ? 0 : r) + e
      })
    })
  }
  return n
}

function P(e) {
  let {
    targetRef: t,
    overrideTargetRect: n
  } = e;
  return null != n ? n : (c()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect())
}

function D(e, t) {
  let n = P(e),
    r = P(t);
  return n.top === r.top && n.left === r.left
}
class w extends(r = Chunk473749.Component) {
  formatDimension(e) {
    return this.props.useRawTargetDimensions ? e : Math.ceil(e)
  }
  nudgeLeftAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props;
    if (!r) return e;
    let i = n.offsetWidth,
      a = e + t.offsetWidth - i + T;
    return a > 0 ? Math.max(T, e - a) : Math.max(T, e)
  }
  nudgeRightAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props;
    if (!r) return 0;
    let i = t.offsetWidth;
    return Math.min(n.offsetWidth - e - i - T, 0)
  }
  getHorizontalAlignmentStyle(e, t, n, r) {
    let {
      align: i
    } = this.props;
    switch (i) {
      case "left": {
        let i = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
          a = this.formatDimension(e.left) - i;
        return {
          style: y(E({}, r), {
            left: i
          }),
          nudge: a
        }
      }
      case "right": {
        let i = this.formatDimension(n.offsetWidth - e.right),
          a = this.nudgeRightAlignment(i, t, n);
        return {
          style: y(E({}, r), {
            right: i + a
          }),
          nudge: 0
        }
      }
      case "center": {
        let i = e.left + (e.width - t.offsetWidth) / 2,
          a = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
          o = this.formatDimension(i) - a;
        return {
          style: y(E({}, r), {
            left: a
          }),
          nudge: o
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
    let i = t.getBoundingClientRect().height,
      a = e + i - n.offsetHeight + T;
    return a > 0 ? Math.max(T, e - a) : e
  }
  nudgeBottomAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props, i = n.offsetHeight, a = i - e;
    if (!r) return a;
    let o = a + t.offsetHeight - i + T;
    return o > 0 ? Math.max(T, a - o) : a
  }
  getVerticalAlignmentStyle(e, t, n, r) {
    let {
      align: i
    } = this.props;
    switch (i) {
      case "top": {
        let i = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
          a = this.formatDimension(e.top) - i;
        return {
          style: y(E({}, r), {
            top: i
          }),
          nudge: a
        }
      }
      case "bottom": {
        let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
          a = this.formatDimension(e.bottom) - i;
        return {
          style: y(E({}, r), {
            bottom: i
          }),
          nudge: a
        }
      }
      case "center": {
        let i = e.top + (e.height - t.offsetHeight) / 2,
          a = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
          o = this.formatDimension(i) - a;
        return {
          style: y(E({}, r), {
            top: a
          }),
          nudge: o
        }
      }
      default:
        throw Error("Unsupported align: ".concat(i))
    }
  }
  calculatePositionStyle(e, t, n, r) {
    let {
      spacing: i = 0
    } = this.props, a = P(this.props), o = n.getBoundingClientRect(), s = C(a, o.left, o.top);
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
          [r]: T
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
    c()(null != require, "Unexpected null element");
    let r = (0, Chunk793030.wLj)(require),
      {
        style: i,
        nudge: a
      } = this.calculatePositionStyle(module, require, r),
      o = {
        position: module,
        style: Chunk54381,
        nudge: Chunk473749
      },
      s = A(module, Chunk54381, require, r),
      l = s,
      u = null,
      d = 0;
    if (exports && s < 0) {
      let t = N(module),
        i = this.calculatePositionStyle(exports, require, r);
      u = Chunk54381.style, d = Chunk54381.nudge;
      let a = A(exports, Chunk374470, require, r);
      if (Chunk473749 > s && (o = {
          position: exports,
          style: Chunk374470,
          nudge: Chunk762328
        }, l = Chunk473749), s < 0 && Chunk473749 < 0) {
        let i, a = Chunk120356.position;
        if ((i = "top" === Chunk473749 || "bottom" === Chunk473749 ? "overlap_vertical" : "left" === Chunk473749 || "right" === Chunk473749 ? "overlap_horizontal" : Chunk473749) !== module && Chunk54381 !== exports) {
          let e = this.calculatePositionStyle(Chunk54381, require, r, Chunk473749),
            t = A(N(Chunk473749), module.style, require, r);
          exports > Chunk512722 && (o = E({
            position: Chunk473749
          }, module), l = exports)
        }
      }
    }
    return R(Chunk512722, require, Chunk120356)
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
    c()(null != Chunk54381, "Missing elementRef"), null != require.current && O.set(Chunk54381, require.current), Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_START, this.handleLayerPopStart), Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == Chunk54381 || null == (t = Chunk54381.ownerDocument) || null == (e = exports.defaultView) || module.addEventListener("resize", this.handleLayerPopComplete), null == r || r()
  }
  componentDidUpdate(e, t) {
    if (S(e) === S(this.props) && D(e, this.props) || this.updatePosition(), t.position !== this.state.position) {
      var n, r;
      null == (n = (r = this.props).onPositionChange) || n.call(r, this.state.position)
    }
  }
  componentWillUnmount() {
    var e, t, n, r;
    let i = this.elementRef.current;
    c()(null != Chunk54381, "Missing elementRef"), O.delete(Chunk54381), Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_START, this.handleLayerPopStart), Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == Chunk54381 || null == (t = Chunk54381.ownerDocument) || null == (e = exports.defaultView) || module.removeEventListener("resize", this.handleLayerPopComplete), null == (n = (r = this.props).onUnmount) || require.call(r)
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
      isSettingsLayerTransitioning: u,
      nudge: d
    } = this.state;
    return (0, Chunk54381.jsx)("div", {
      className: s()({
        [Chunk305857.clickTrapContainer]: true,
        [Chunk305857.trapClicks]: Chunk120356
      }),
      children: (0, Chunk54381.jsx)(Chunk793030.C1Q, {
        children: o => {
          let {
            disableAdaptiveTheme: _
          } = o;
          return (0, i.jsx)(f.f6W, {
            disableAdaptiveTheme: _,
            children: o => (0, i.jsx)("div", {
              id: e,
              className: s()(t, o, m.layer, {
                [m.emptyError]: false,
                [m.layerHidden]: u,
                [m.disabledPointerEvents]: a
              }),
              style: E({
                position: r ? "fixed" : "absolute"
              }, this.state.style),
              ref: this.elementRef,
              children: (0, i.jsx)(f.JcV, {
                containerRef: this.elementRef,
                children: n({
                  position: l,
                  nudge: d,
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
      isPositioned: false,
      isSettingsLayerTransitioning: false
    }), g(this, "handleLayerPopStart", () => {
      this.setState({
        isSettingsLayerTransitioning: true
      })
    }), g(this, "handleLayerPopComplete", () => {
      let e = this.calculateState();
      this.setState(y(E({}, e), {
        isSettingsLayerTransitioning: false
      }))
    }), g(this, "updatePosition", () => {
      this.setState(this.calculateState())
    })
  }
}
g(w, "defaultProps", {
  nudgeAlignIntoViewport: false,
  spacing: 0,
  autoInvert: false,
  disablePointerEvents: false
})