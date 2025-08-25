/** Chunk was on web.js **/
/** chunk id: 981729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cy: () => D,
  DY: () => U,
  FG: () => S,
  u: () => M
}), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk603113 = require("./603113.js"),
  Chunk202841 = require("./202841.js"),
  Chunk873546 = require("./873546.js"),
  Chunk374470 = require("./374470.js"),
  Chunk846519 = require("./846519.js"),
  Chunk377527 = require("./377527.js"),
  Chunk186325 = require("./186325.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk503011 = require("./503011.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
    top: Chunk503011.tooltipTop,
    bottom: Chunk503011.tooltipBottom,
    left: Chunk503011.tooltipLeft,
    right: Chunk503011.tooltipRight,
    center: Chunk503011.tooltipCenter,
    window_center: Chunk503011.tooltipCenter,
    primary: Chunk503011.tooltipPrimary,
    grey: Chunk503011.tooltipGrey,
    brand: Chunk503011.tooltipBrand,
    green: Chunk503011.tooltipGreen,
    red: Chunk503011.tooltipRed
  });

function w(e, t, n) {
  let r = "left" === e || "right" === e,
    i = r ? "top" : "left",
    o = r ? "top" : "left",
    a = r ? "bottom" : "right",
    s = "50%",
    l = n;
  return t === o ? (s = "0%", l += A) : t === a && (s = "100%", l -= C + C), {
    [i]: "calc(".concat(s, " + ").concat(l, "px)")
  }
}
let D = e => {
    let {
      targetElementRef: t,
      align: n = "center",
      position: r,
      color: o,
      children: a,
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
    } = e, v = "".concat(null != O ? O : "string" == typeof a ? a : "", ":").concat(r);
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
          className: s()(E.tooltip, P[null != t ? t : r], P[o], {
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
            children: a
          })]
        })
      }
    })
  },
  x = {
    scale: .95,
    opacity: 0
  },
  L = {
    scale: 1,
    opacity: 0
  },
  j = {
    scale: 1,
    opacity: 1
  },
  k = e => {
    var {
      isVisible: t,
      onAnimationRest: n,
      targetElementRef: r
    } = e, a = I(e, ["isVisible", "onAnimationRest", "targetElementRef"]);
    let {
      reducedMotion: s
    } = o.useContext(p.S);
    return (0, h.Yzy)(t, {
      keys: e => e ? "tooltip" : "empty",
      config: _.F,
      from: s.enabled ? L : x,
      enter: j,
      leave: s.enabled ? L : x,
      onRest: n
    }, "animate-always")((e, t) => t ? (0, i.jsx)(D, y({
      animationStyle: e,
      targetElementRef: r
    }, a)) : null)
  };
class M extends(r = Chunk647438.Component) {
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
        if (e = null == (t = this.siblingDomRef.current) ? true : exports.previousElementSibling, !(0, Chunk374470.k)(module)) throw Error("Tooltip cannot find DOM node")
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
    let a = {
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
      spacing: o,
      tooltipClassName: a,
      tooltipStyle: s,
      tooltipContentClassName: l,
      disableTooltipPointerEvents: c,
      onAnimationRest: d,
      allowOverflow: f,
      clickableOnMobile: _,
      hideOnClick: p,
      tooltipPointerClassName: h
    } = this.props, m = (Chunk873546.tq || Chunk873546.Em) && true === Chunk377527 && Chunk186325, g = false !== Chunk202841 && !Chunk607070 || true === Chunk202841, E = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, b = null;
    return b = module instanceof Function ? Chunk503011 ? module() : null : module, (0, Chunk951288.jsx)(k, {
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
      isVisible: Chunk503011,
      onAnimationRest: Chunk374470,
      onNonAccessibleClick: Chunk607070 ? this.handleClick : true,
      allowOverflow: Chunk846519,
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
      if (null == module || (0, Chunk374470.k)(module, HTMLElement) && module.offsetWidth >= module.scrollWidth) return
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
    super(...e), b(this, "showTimeout", new f.V7), b(this, "domElementRef", {
      current: null
    }), b(this, "hasDomElement", false), b(this, "siblingDomRef", o.createRef()), b(this, "state", {
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
b(M, "Colors", S), b(M, "defaultProps", {
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
  } = e, a = I(e, ["children", "className", "element"]);
  return (0, i.jsx)(M, v(y({}, a), {
    children: e => o.createElement(r, null != n ? v(y({}, e), {
      className: n
    }) : e, t)
  }))
}