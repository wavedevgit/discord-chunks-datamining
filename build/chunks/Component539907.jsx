/** Chunk was on web.js **/
/** chunk id: 539907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => D,
  t: () => I
}), require("./388685.js"), require("./415506.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk84735 = require("./84735.js"),
  Chunk710260 = require("./710260.jsx"),
  Chunk472558 = require("./472558.js"),
  Chunk585483 = require("./585483.js"),
  Chunk872801 = require("./872801.js"),
  Chunk302901 = require("./302901.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk36344 = require("./36344.js");

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
  let n = (0, p.Z)(t, g.layer);
  for (; null != n;) {
    let t = v.get(n);
    if (null == t) break;
    if (e.contains(t)) returntrue;
    n = (0, p.Z)(t, g.layer)
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

function N(e, t, n) {
  return {
    top: e.top - n,
    left: e.left - t,
    bottom: e.bottom - n,
    right: e.right - t,
    width: e.width,
    height: e.height
  }
}

function C(e) {
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
class D extends(r = Chunk73800.Component) {
  formatDimension(e) {
    return this.props.useRawTargetDimensions ? e : Math.ceil(e)
  }
  nudgeLeftAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props;
    if (!r) return e;
    let i = n.offsetWidth,
      o = e + t.offsetWidth - i + T;
    return o > 0 ? Math.max(T, e - o) : Math.max(T, e)
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
          o = this.formatDimension(e.left) - i;
        return {
          style: O(b({}, r), {
            left: i
          }),
          nudge: o
        }
      }
      case "right": {
        let i = this.formatDimension(n.offsetWidth - e.right),
          o = this.nudgeRightAlignment(i, t, n);
        return {
          style: O(b({}, r), {
            right: i + o
          }),
          nudge: 0
        }
      }
      case "center": {
        let i = e.left + (e.width - t.offsetWidth) / 2,
          o = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
          a = this.formatDimension(i) - o;
        return {
          style: O(b({}, r), {
            left: o
          }),
          nudge: a
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
      o = e + i - n.offsetHeight + T;
    return o > 0 ? Math.max(T, e - o) : e
  }
  nudgeBottomAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props, i = n.offsetHeight, o = i - e;
    if (!r) return o;
    let a = o + t.offsetHeight - i + T;
    return a > 0 ? Math.max(T, o - a) : o
  }
  getVerticalAlignmentStyle(e, t, n, r) {
    let {
      align: i
    } = this.props;
    switch (i) {
      case "top": {
        let i = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
          o = this.formatDimension(e.top) - i;
        return {
          style: O(b({}, r), {
            top: i
          }),
          nudge: o
        }
      }
      case "bottom": {
        let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
          o = this.formatDimension(e.bottom) - i;
        return {
          style: O(b({}, r), {
            bottom: i
          }),
          nudge: o
        }
      }
      case "center": {
        let i = e.top + (e.height - t.offsetHeight) / 2,
          o = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
          a = this.formatDimension(i) - o;
        return {
          style: O(b({}, r), {
            top: o
          }),
          nudge: a
        }
      }
      default:
        throw Error("Unsupported align: ".concat(i))
    }
  }
  calculatePositionStyle(e, t, n, r) {
    let {
      spacing: i = 0
    } = this.props, o = P(this.props), a = n.getBoundingClientRect(), s = N(o, a.left, a.top);
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
    let r = (0, Chunk302901.wL)(require),
      {
        style: i,
        nudge: o
      } = this.calculatePositionStyle(module, require, r),
      a = {
        position: module,
        style: Chunk255367,
        nudge: Chunk73800
      },
      s = A(module, Chunk255367, require, r),
      l = s,
      u = null,
      d = 0;
    if (exports && s < 0) {
      let t = C(module),
        i = this.calculatePositionStyle(exports, require, r);
      u = Chunk255367.style, d = Chunk255367.nudge;
      let o = A(exports, Chunk84735, require, r);
      if (Chunk73800 > s && (a = {
          position: exports,
          style: Chunk84735,
          nudge: Chunk710260
        }, l = Chunk73800), s < 0 && Chunk73800 < 0) {
        let i, o = Chunk120356.position;
        if ((i = "top" === Chunk73800 || "bottom" === Chunk73800 ? "overlap_vertical" : "left" === Chunk73800 || "right" === Chunk73800 ? "overlap_horizontal" : Chunk73800) !== module && Chunk255367 !== exports) {
          let e = this.calculatePositionStyle(Chunk255367, require, r, Chunk73800),
            t = A(C(Chunk73800), module.style, require, r);
          exports > Chunk512722 && (a = b({
            position: Chunk73800
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
    c()(null != Chunk255367, "Missing elementRef"), null != require.current && v.set(Chunk255367, require.current), Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_START, this.handleLayerPopStart), Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == Chunk255367 || null == (t = Chunk255367.ownerDocument) || null == (e = exports.defaultView) || module.addEventListener("resize", this.handleLayerPopComplete), null == r || r()
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
    c()(null != Chunk255367, "Missing elementRef"), v.delete(Chunk255367), Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_START, this.handleLayerPopStart), Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == Chunk255367 || null == (t = Chunk255367.ownerDocument) || null == (e = exports.defaultView) || module.removeEventListener("resize", this.handleLayerPopComplete), null == (n = (r = this.props).onUnmount) || require.call(r)
  }
  render() {
    let {
      id: e,
      className: t,
      children: n,
      fixed: r,
      disablePointerEvents: o,
      clickTrap: a = false
    } = this.props, {
      position: l,
      isPositioned: c,
      isSettingsLayerTransitioning: _,
      nudge: p
    } = this.state;
    return (0, Chunk255367.jsx)("div", {
      className: s()({
        [Chunk36344.clickTrapContainer]: true,
        [Chunk36344.trapClicks]: Chunk120356
      }),
      children: (0, Chunk255367.jsx)(Chunk710260.C1, {
        children: a => {
          let {
            theme: d,
            disableAdaptiveTheme: h
          } = a;
          return (0, i.jsx)("div", {
            id: e,
            className: s()(t, (0, f.Q)(d), g.layer, {
              [g.emptyError]: false,
              [g.layerHidden]: _,
              [g.disabledPointerEvents]: o,
              "disable-adaptive-theme": h
            }),
            style: b({
              position: r ? "fixed" : "absolute"
            }, this.state.style),
            ref: this.elementRef,
            children: (0, i.jsx)(u.J, {
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
    super(...e), E(this, "elementRef", o.createRef()), E(this, "state", {
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