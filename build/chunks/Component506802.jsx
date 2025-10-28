/** Chunk was on web.js **/
/** chunk id: 506802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  aM: () => j,
  gq: () => D,
  jS: () => U,
  r6: () => S
}), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk603113 = require("./603113.js"),
  Chunk13941 = require("./13941.js"),
  Chunk873546 = require("./873546.js"),
  Chunk374470 = require("./374470.js"),
  Chunk793030 = require("./793030.js"),
  Chunk846519 = require("./846519.js"),
  Chunk377527 = require("./377527.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk855711 = require("./855711.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var S = function(e) {
  return e.PRIMARY = "primary", e.GREY = "grey", e.BRAND = "brand", e.GREEN = "green", e.RED = "red", e
}({});
let A = 16,
  C = 10,
  N = 8,
  R = Object.freeze({}),
  P = Object.freeze({
    top: Chunk855711.tooltipTop,
    bottom: Chunk855711.tooltipBottom,
    left: Chunk855711.tooltipLeft,
    right: Chunk855711.tooltipRight,
    center: Chunk855711.tooltipCenter,
    window_center: Chunk855711.tooltipCenter,
    primary: Chunk855711.tooltipPrimary,
    grey: Chunk855711.tooltipGrey,
    brand: Chunk855711.tooltipBrand,
    green: Chunk855711.tooltipGreen,
    red: Chunk855711.tooltipRed
  });

function w(e, t, n) {
  let r = "left" === e || "right" === e,
    i = r ? "top" : "left",
    a = r ? "top" : "left",
    o = r ? "bottom" : "right",
    s = "50%",
    l = n;
  return t === a ? (s = "0%", l += A) : t === o && (s = "100%", l -= C + C), {
    [i]: "calc(".concat(s, " + ").concat(l, "px)")
  }
}
let D = e => {
    let {
      targetElementRef: t,
      align: n = "center",
      position: r,
      color: a,
      children: o,
      onNonAccessibleClick: l,
      tooltipClassName: u,
      tooltipStyle: d,
      tooltipContentClassName: f,
      spacing: _ = N,
      animationStyle: p,
      disableTooltipPointerEvents: h = false,
      allowOverflow: m = false,
      tooltipPointerClassName: b,
      positionKeyStemOverride: O
    } = e, v = "".concat(null != O ? O : "string" == typeof o ? o : "", ":").concat(r);
    return (0, i.jsx)(g.W5, {
      disablePointerEvents: h,
      targetRef: t,
      position: r,
      autoInvert: true,
      align: n,
      positionKey: v,
      spacing: _,
      nudgeAlignIntoViewport: true,
      children: e => {
        let {
          position: t,
          nudge: _
        } = e;
        return (0, i.jsxs)(c.animated.div, {
          onClick: l,
          className: s()(E.tooltip, P[null != t ? t : r], P[a], {
            [E.tooltipDisablePointerEvents]: h
          }, u),
          style: y({}, p, d),
          children: [(0, i.jsx)("div", {
            className: s()(E.tooltipPointer, E.tooltipPointerBg, b),
            style: w(null != t ? t : r, n, _)
          }), (0, i.jsx)("div", {
            className: s()(E.tooltipPointer, b),
            style: w(null != t ? t : r, n, _)
          }), (0, i.jsx)("div", {
            className: s()(E.tooltipContent, {
              [E.tooltipContentAllowOverflow]: m
            }, f),
            children: o
          })]
        })
      }
    })
  },
  L = {
    scale: .95,
    opacity: 0
  },
  x = {
    scale: 1,
    opacity: 0
  },
  M = {
    scale: 1,
    opacity: 1
  },
  k = e => {
    var {
      isVisible: t,
      onAnimationRest: n,
      targetElementRef: r
    } = e, o = I(e, ["isVisible", "onAnimationRest", "targetElementRef"]);
    let {
      reducedMotion: s
    } = a.useContext(f.Sfi);
    return (0, h.Yzy)(t, {
      keys: e => e ? "tooltip" : "empty",
      config: p.F,
      from: s.enabled ? x : L,
      enter: M,
      leave: s.enabled ? x : L,
      onRest: n
    }, "animate-always")((e, t) => t ? (0, i.jsx)(D, y({
      animationStyle: e,
      targetElementRef: r
    }, o)) : null)
  };
class j extends(r = Chunk647438.Component) {
  static getDerivedStateFromProps(e, t) {
    return t.shouldShowTooltip && null == e.text ? {
      shouldShowTooltip: false
    } : null
  }
  componentDidMount() {
    this.shouldShowTooltip(this.props, this.state) && this.setDomElement()
  }
  componentDidUpdate(e, t) {
    let n = this.shouldShowTooltip(this.props, this.state);
    n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : this.hasDomElement = false)
  }
  setDomElement() {
    let e;
    if (null != this.props.text) {
      if (null != this.props.targetElementRef) {
        if (null == (e = this.props.targetElementRef.current)) return
      } else {
        var t;
        if (e = null == (t = this.siblingDomRef.current) ? true : exports.previousElementSibling, !(0, Chunk374470.kK)(module)) throw Error("VoidTooltip cannot find DOM node")
      }
      this.domElementRef.current = module, this.hasDomElement = true, this.forceUpdate()
    }
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.domElementRef.current = null
  }
  render() {
    let e, {
      children: t,
      text: n,
      "aria-label": r
    } = this.props;
    if (null == require) return exports(R);
    "string" == typeof r ? e = r : "string" == typeof require && false !== r && (e = require);
    let o = {
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onContextMenu: this.handleContextMenu,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    };
    return null != module && (Chunk120356["aria-label"] = module), (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [exports(Chunk120356), true === this.props.targetElementRef && (0, Chunk951288.jsx)("span", {
        ref: this.siblingDomRef,
        style: {
          display: "none"
        }
      }), this.renderTooltip()]
    })
  }
  shouldShowTooltip(e, t) {
    let n = null == e.targetElementRef || null != e.targetElementRef.current;
    return e.shouldShow && (t.shouldShowTooltip || e.forceOpen) && n
  }
  renderTooltip() {
    let {
      text: e,
      align: t,
      position: n,
      color: r,
      spacing: a,
      tooltipClassName: o,
      tooltipStyle: s,
      tooltipContentClassName: l,
      disableTooltipPointerEvents: c,
      onAnimationRest: d,
      allowOverflow: f,
      clickableOnMobile: _,
      hideOnClick: p,
      tooltipPointerClassName: h
    } = this.props, m = (Chunk873546.tq || Chunk873546.Em) && true === Chunk846519 && Chunk377527, g = false !== Chunk13941 && !Chunk607070 || true === Chunk13941, E = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, b = null;
    return b = module instanceof Function ? Chunk855711 ? module() : null : module, (0, Chunk951288.jsx)(k, {
      disableTooltipPointerEvents: Chunk314910,
      targetElementRef: this.domElementRef,
      tooltipStyle: s,
      tooltipClassName: Chunk120356,
      tooltipContentClassName: Chunk603113,
      tooltipPointerClassName: Chunk481060,
      align: exports,
      position: require,
      color: r,
      spacing: Chunk647438,
      isVisible: Chunk855711,
      onAnimationRest: Chunk374470,
      onNonAccessibleClick: Chunk607070 ? this.handleClick : true,
      allowOverflow: Chunk793030,
      positionKeyStemOverride: this.props.positionKeyStemOverride,
      children: b
    })
  }
  show() {
    let {
      delay: e,
      overflowOnly: t
    } = this.props;
    if (exports) {
      let e = this.domElementRef.current;
      if (null == module || (0, Chunk374470.kK)(module, HTMLElement) && module.offsetWidth >= module.scrollWidth) return
    }
    null != module ? this.showTimeout.start(module, () => this.toggleShow(true), false) : this.toggleShow(true)
  }
  hide() {
    this.showTimeout.stop(), this.toggleShow(false)
  }
  toggleShow(e) {
    if (this.state.shouldShowTooltip !== e) {
      var t, n, r, i;
      e ? null == (t = (n = this.props).onTooltipShow) || t.call(n) : null == (r = (i = this.props).onTooltipHide) || r.call(i), l.flushSync(() => {
        this.setState({
          shouldShowTooltip: e
        })
      })
    }
  }
  constructor(...e) {
    super(...e), b(this, "showTimeout", new _.V7), b(this, "domElementRef", {
      current: null
    }), b(this, "hasDomElement", false), b(this, "siblingDomRef", a.createRef()), b(this, "state", {
      shouldShowTooltip: false
    }), b(this, "handleMouseEnter", () => {
      (u.tq || u.Em) && true === this.props.clickableOnMobile || this.show()
    }), b(this, "handleMouseLeave", () => {
      (u.tq || u.Em) && true === this.props.clickableOnMobile || this.hide()
    }), b(this, "handleFocus", () => {
      m.Z.keyboardModeEnabled && this.show()
    }), b(this, "handleBlur", () => {
      this.hide()
    }), b(this, "handleClick", () => {
      let e = this.hasDomElement;
      e && this.props.hideOnClick ? this.hide() : !e && (u.tq || u.Em) && true === this.props.clickableOnMobile && this.show()
    }), b(this, "handleContextMenu", () => {
      this.hide()
    })
  }
}
b(j, "Colors", S), b(j, "defaultProps", {
  hideOnClick: true,
  position: "top",
  color: "primary",
  forceOpen: false,
  spacing: N,
  shouldShow: true,
  allowOverflow: false,
  overflowOnly: false
});
let U = e => {
  var {
    children: t,
    className: n,
    element: r = "div"
  } = e, o = I(e, ["children", "className", "element"]);
  return (0, i.jsx)(j, v(y({}, o), {
    children: e => a.createElement(r, null != n ? v(y({}, e), {
      className: n
    }) : e, t)
  }))
}