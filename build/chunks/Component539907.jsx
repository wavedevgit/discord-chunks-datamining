/** Chunk was on web.js **/
/** chunk id: 539907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => D,
  t: () => I
}), require("./388685.js"), require("./415506.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk168718 = require("./168718.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk710260 = require("./710260.jsx"),
  Chunk472558 = require("./472558.js"),
  Chunk585483 = require("./585483.js"),
  Chunk872801 = require("./872801.js"),
  Chunk981631 = require("./981631.js"),
  Chunk793906 = require("./793906.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
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

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = new WeakMap;

function I(e, t) {
  if (e.contains(t)) returntrue;
  let n = (0, h.Z)(t, g.layer);
  for (; null != n;) {
    let t = v.get(n);
    if (null == t) break;
    if (e.contains(t)) returntrue;
    n = (0, h.Z)(t, g.layer)
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
    return O(b({}, n), {
      style: O(b({}, n.style), {
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

function w(e, t) {
  let n = P(e),
    r = P(t);
  return n.top === r.top && n.left === r.left
}
class D extends(r = Chunk647438.Component) {
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
          style: O(b({}, r), {
            left: i
          }),
          nudge: a
        }
      }
      case "right": {
        let i = this.formatDimension(n.offsetWidth - e.right),
          a = this.nudgeRightAlignment(i, t, n);
        return {
          style: O(b({}, r), {
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
          style: O(b({}, r), {
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
          style: O(b({}, r), {
            top: i
          }),
          nudge: a
        }
      }
      case "bottom": {
        let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
          a = this.formatDimension(e.bottom) - i;
        return {
          style: O(b({}, r), {
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
          style: O(b({}, r), {
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
    let r = (0, Chunk168718.wL)(require),
      {
        style: i,
        nudge: a
      } = this.calculatePositionStyle(module, require, r),
      o = {
        position: module,
        style: Chunk951288,
        nudge: Chunk647438
      },
      s = A(module, Chunk951288, require, r),
      l = s,
      d = null,
      f = 0;
    if (exports && s < 0) {
      let t = N(module),
        i = this.calculatePositionStyle(exports, require, r);
      d = Chunk951288.style, f = Chunk951288.nudge;
      let a = A(exports, Chunk793030, require, r);
      if (Chunk647438 > s && (o = {
          position: exports,
          style: Chunk793030,
          nudge: Chunk710260
        }, l = Chunk647438), s < 0 && Chunk647438 < 0) {
        let i, a = Chunk120356.position;
        if ((i = "top" === Chunk647438 || "bottom" === Chunk647438 ? "overlap_vertical" : "left" === Chunk647438 || "right" === Chunk647438 ? "overlap_horizontal" : Chunk647438) !== module && Chunk951288 !== exports) {
          let e = this.calculatePositionStyle(Chunk951288, require, r, Chunk647438),
            t = A(N(Chunk647438), module.style, require, r);
          exports > Chunk512722 && (o = b({
            position: Chunk647438
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
    this.setState(b({
      isPositioned: true
    }, this.calculateState()));
    let i = this.elementRef.current;
    c()(null != Chunk951288, "Missing elementRef"), null != require.current && v.set(Chunk951288, require.current), Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_START, this.handleLayerPopStart), Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == Chunk951288 || null == (t = Chunk951288.ownerDocument) || null == (e = exports.defaultView) || module.addEventListener("resize", this.handleLayerPopComplete), null == r || r()
  }
  componentDidUpdate(e, t) {
    if (S(e) === S(this.props) && w(e, this.props) || this.updatePosition(), t.position !== this.state.position) {
      var n, r;
      null == (n = (r = this.props).onPositionChange) || n.call(r, this.state.position)
    }
  }
  componentWillUnmount() {
    var e, t, n, r;
    let i = this.elementRef.current;
    c()(null != Chunk951288, "Missing elementRef"), v.delete(Chunk951288), Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_START, this.handleLayerPopStart), Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == Chunk951288 || null == (t = Chunk951288.ownerDocument) || null == (e = exports.defaultView) || module.removeEventListener("resize", this.handleLayerPopComplete), null == (n = (r = this.props).onUnmount) || require.call(r)
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
      nudge: p
    } = this.state;
    return (0, Chunk951288.jsx)("div", {
      className: s()({
        [Chunk793906.clickTrapContainer]: true,
        [Chunk793906.trapClicks]: Chunk120356
      }),
      children: (0, Chunk951288.jsx)(Chunk710260.C1, {
        children: o => {
          let {
            theme: f,
            disableAdaptiveTheme: h
          } = o;
          return (0, i.jsx)("div", {
            id: e,
            className: s()(t, (0, _.Q)(f), g.layer, {
              [g.emptyError]: false,
              [g.layerHidden]: u,
              [g.disabledPointerEvents]: a,
              "disable-adaptive-theme": h
            }),
            style: b({
              position: r ? "fixed" : "absolute"
            }, this.state.style),
            ref: this.elementRef,
            children: (0, i.jsx)(d.JcV, {
              containerRef: this.elementRef,
              children: n({
                position: l,
                nudge: p,
                isPositioned: c
              }, this.updatePosition)
            })
          })
        }
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "elementRef", a.createRef()), E(this, "state", {
      style: Object.freeze({}),
      position: this.props.autoInvert ? null : this.props.position,
      nudge: 0,
      isPositioned: false,
      isSettingsLayerTransitioning: false
    }), E(this, "handleLayerPopStart", () => {
      this.setState({
        isSettingsLayerTransitioning: true
      })
    }), E(this, "handleLayerPopComplete", () => {
      let e = this.calculateState();
      this.setState(O(b({}, e), {
        isSettingsLayerTransitioning: false
      }))
    }), E(this, "updatePosition", () => {
      this.setState(this.calculateState())
    })
  }
}
E(D, "defaultProps", {
  nudgeAlignIntoViewport: false,
  spacing: 0,
  autoInvert: false,
  disablePointerEvents: false
})