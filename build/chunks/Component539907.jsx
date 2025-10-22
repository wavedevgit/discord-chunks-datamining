/** Chunk was on web.js **/
/** chunk id: 539907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => R,
  t: () => y
}), require("./388685.js"), require("./415506.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk585483 = require("./585483.js"),
  Chunk872801 = require("./872801.js"),
  Chunk981631 = require("./981631.js"),
  Chunk305857 = require("./305857.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = new WeakMap;

function y(e, t) {
  if (e.contains(t)) returntrue;
  let n = (0, f.Z)(t, p.layer);
  for (; null != n;) {
    let t = b.get(n);
    if (null == t) break;
    if (e.contains(t)) returntrue;
    n = (0, f.Z)(t, p.layer)
  }
  returnfalse
}
let O = 12;

function v(e) {
  let {
    positionKey: t,
    position: n,
    align: r
  } = e;
  return null != t ? t : "".concat(n, ":").concat(r)
}

function I(e, t, n, r) {
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

function T(e, t, n) {
  return {
    top: e.top - n,
    left: e.left - t,
    bottom: e.bottom - n,
    right: e.right - t,
    width: e.width,
    height: e.height
  }
}

function S(e) {
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

function A(e, t, n) {
  if (null != e && e < 0 && ("top" === n.position || "bottom" === n.position) && null != t && Math.abs(e) < (null == t ? true : t.offsetHeight) && null != n.style) {
    let t = "top" === n.position ? "bottom" : "top",
      r = n.style[t];
    return E(m({}, n), {
      style: E(m({}, n.style), {
        [t]: (null == r ? 0 : r) + e
      })
    })
  }
  return n
}

function C(e) {
  let {
    targetRef: t,
    overrideTargetRect: n
  } = e;
  return null != n ? n : (c()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect())
}

function N(e, t) {
  let n = C(e),
    r = C(t);
  return n.top === r.top && n.left === r.left
}
class R extends(r = Chunk647438.Component) {
  formatDimension(e) {
    return this.props.useRawTargetDimensions ? e : Math.ceil(e)
  }
  nudgeLeftAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props;
    if (!r) return e;
    let i = n.offsetWidth,
      a = e + t.offsetWidth - i + O;
    return a > 0 ? Math.max(O, e - a) : Math.max(O, e)
  }
  nudgeRightAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props;
    if (!r) return 0;
    let i = t.offsetWidth;
    return Math.min(n.offsetWidth - e - i - O, 0)
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
          style: E(m({}, r), {
            left: i
          }),
          nudge: a
        }
      }
      case "right": {
        let i = this.formatDimension(n.offsetWidth - e.right),
          a = this.nudgeRightAlignment(i, t, n);
        return {
          style: E(m({}, r), {
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
          style: E(m({}, r), {
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
      a = e + i - n.offsetHeight + O;
    return a > 0 ? Math.max(O, e - a) : e
  }
  nudgeBottomAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: r
    } = this.props, i = n.offsetHeight, a = i - e;
    if (!r) return a;
    let o = a + t.offsetHeight - i + O;
    return o > 0 ? Math.max(O, a - o) : a
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
          style: E(m({}, r), {
            top: i
          }),
          nudge: a
        }
      }
      case "bottom": {
        let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
          a = this.formatDimension(e.bottom) - i;
        return {
          style: E(m({}, r), {
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
          style: E(m({}, r), {
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
    } = this.props, a = C(this.props), o = n.getBoundingClientRect(), s = T(a, o.left, o.top);
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
          [r]: O
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
        style: Chunk951288,
        nudge: Chunk647438
      },
      s = I(module, Chunk951288, require, r),
      l = s,
      d = null,
      f = 0;
    if (exports && s < 0) {
      let t = S(module),
        i = this.calculatePositionStyle(exports, require, r);
      d = Chunk951288.style, f = Chunk951288.nudge;
      let a = I(exports, Chunk585483, require, r);
      if (Chunk647438 > s && (o = {
          position: exports,
          style: Chunk585483,
          nudge: Chunk872801
        }, l = Chunk647438), s < 0 && Chunk647438 < 0) {
        let i, a = Chunk120356.position;
        if ((i = "top" === Chunk647438 || "bottom" === Chunk647438 ? "overlap_vertical" : "left" === Chunk647438 || "right" === Chunk647438 ? "overlap_horizontal" : Chunk647438) !== module && Chunk951288 !== exports) {
          let e = this.calculatePositionStyle(Chunk951288, require, r, Chunk647438),
            t = I(S(Chunk647438), module.style, require, r);
          exports > Chunk512722 && (o = m({
            position: Chunk647438
          }, module), l = exports)
        }
      }
    }
    return A(Chunk512722, require, Chunk120356)
  }
  componentDidMount() {
    var e, t;
    let {
      targetRef: n,
      onMount: r
    } = this.props;
    this.setState(m({
      isPositioned: true
    }, this.calculateState()));
    let i = this.elementRef.current;
    c()(null != Chunk951288, "Missing elementRef"), null != require.current && b.set(Chunk951288, require.current), Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_START, this.handleLayerPopStart), Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == Chunk951288 || null == (t = Chunk951288.ownerDocument) || null == (e = exports.defaultView) || module.addEventListener("resize", this.handleLayerPopComplete), null == r || r()
  }
  componentDidUpdate(e, t) {
    if (v(e) === v(this.props) && N(e, this.props) || this.updatePosition(), t.position !== this.state.position) {
      var n, r;
      null == (n = (r = this.props).onPositionChange) || n.call(r, this.state.position)
    }
  }
  componentWillUnmount() {
    var e, t, n, r;
    let i = this.elementRef.current;
    c()(null != Chunk951288, "Missing elementRef"), b.delete(Chunk951288), Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_START, this.handleLayerPopStart), Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == Chunk951288 || null == (t = Chunk951288.ownerDocument) || null == (e = exports.defaultView) || module.removeEventListener("resize", this.handleLayerPopComplete), null == (n = (r = this.props).onUnmount) || require.call(r)
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
      isSettingsLayerTransitioning: d,
      nudge: f
    } = this.state;
    return (0, Chunk951288.jsx)("div", {
      className: s()({
        [Chunk305857.clickTrapContainer]: true,
        [Chunk305857.trapClicks]: Chunk120356
      }),
      children: (0, Chunk951288.jsx)(Chunk793030.C1Q, {
        children: o => {
          let {
            disableAdaptiveTheme: _
          } = o;
          return (0, i.jsx)(u.f6W, {
            disableAdaptiveTheme: _,
            children: o => (0, i.jsx)("div", {
              id: e,
              className: s()(t, o, p.layer, {
                [p.emptyError]: false,
                [p.layerHidden]: d,
                [p.disabledPointerEvents]: a
              }),
              style: m({
                position: r ? "fixed" : "absolute"
              }, this.state.style),
              ref: this.elementRef,
              children: (0, i.jsx)(u.JcV, {
                containerRef: this.elementRef,
                children: n({
                  position: l,
                  nudge: f,
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
    super(...e), h(this, "elementRef", a.createRef()), h(this, "state", {
      style: Object.freeze({}),
      position: this.props.autoInvert ? null : this.props.position,
      nudge: 0,
      isPositioned: false,
      isSettingsLayerTransitioning: false
    }), h(this, "handleLayerPopStart", () => {
      this.setState({
        isSettingsLayerTransitioning: true
      })
    }), h(this, "handleLayerPopComplete", () => {
      let e = this.calculateState();
      this.setState(E(m({}, e), {
        isSettingsLayerTransitioning: false
      }))
    }), h(this, "updatePosition", () => {
      this.setState(this.calculateState())
    })
  }
}
h(R, "defaultProps", {
  nudgeAlignIntoViewport: false,
  spacing: 0,
  autoInvert: false,
  disablePointerEvents: false
})