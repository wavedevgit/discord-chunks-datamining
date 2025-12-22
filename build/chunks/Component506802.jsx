/** Chunk was on web.js **/
/** chunk id: 506802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  aM: () => M,
  gq: () => w,
  r6: () => I
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk24156 = require("./24156.js"),
  Chunk620792 = require("./620792.js"),
  Chunk873546 = require("./873546.js"),
  Chunk374470 = require("./374470.js"),
  Chunk793030 = require("./793030.js"),
  Chunk846519 = require("./846519.js"),
  Chunk377527 = require("./377527.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk343978 = require("./343978.js");

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
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var I = function(e) {
  return e.PRIMARY = "primary", e.GREY = "grey", e.BRAND = "brand", e.GREEN = "green", e.RED = "red", e
}({});
let T = 16,
  C = 10,
  A = 8,
  N = Object.freeze({}),
  P = Object.freeze({
    top: Chunk343978.tooltipTop,
    bottom: Chunk343978.tooltipBottom,
    left: Chunk343978.tooltipLeft,
    right: Chunk343978.tooltipRight,
    center: Chunk343978.tooltipCenter,
    window_center: Chunk343978.tooltipCenter,
    primary: Chunk343978.tooltipPrimary,
    grey: Chunk343978.tooltipGrey,
    brand: Chunk343978.tooltipBrand,
    green: Chunk343978.tooltipGreen,
    red: Chunk343978.tooltipRed
  });

function R(e, t, n) {
  let r = "left" === e || "right" === e,
    i = r ? "top" : "left",
    a = r ? "top" : "left",
    o = r ? "bottom" : "right",
    s = "50%",
    l = n;
  return t === a ? (s = "0%", l += T) : t === o && (s = "100%", l -= C + C), {
    [i]: "calc(".concat(s, " + ").concat(l, "px)")
  }
}
let w = e => {
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
      spacing: p = A,
      animationStyle: _,
      disableTooltipPointerEvents: m = false,
      allowOverflow: h = false,
      tooltipPointerClassName: b,
      positionKeyStemOverride: O,
      dataMeticulousIgnore: v
    } = e, S = "".concat(null != O ? O : "string" == typeof o ? o : "", ":").concat(r);
    return (0, i.jsx)(g.W5, {
      disablePointerEvents: m,
      targetRef: t,
      position: r,
      autoInvert: true,
      align: n,
      positionKey: S,
      spacing: p,
      nudgeAlignIntoViewport: true,
      children: e => {
        let {
          position: t,
          nudge: p
        } = e;
        return (0, i.jsxs)(c.animated.div, {
          onClick: l,
          className: s()(E.tooltip, P[null != t ? t : r], P[a], {
            [E.tooltipDisablePointerEvents]: m
          }, u),
          style: y({}, _, d),
          "data-mtctest-ignore": v,
          children: [(0, i.jsx)("div", {
            className: s()(E.tooltipPointer, E.tooltipPointerBg, b),
            style: R(null != t ? t : r, n, p)
          }), (0, i.jsx)("div", {
            className: s()(E.tooltipPointer, b),
            style: R(null != t ? t : r, n, p)
          }), (0, i.jsx)("div", {
            className: s()(E.tooltipContent, {
              [E.tooltipContentAllowOverflow]: h
            }, f),
            children: o
          })]
        })
      }
    })
  },
  D = {
    scale: .95,
    opacity: 0
  },
  x = {
    scale: 1,
    opacity: 0
  },
  L = {
    scale: 1,
    opacity: 1
  },
  j = e => {
    var {
      isVisible: t,
      onAnimationRest: n,
      targetElementRef: r
    } = e, o = v(e, ["isVisible", "onAnimationRest", "targetElementRef"]);
    let {
      reducedMotion: s
    } = a.useContext(f.Sfi);
    return (0, m.Yzy)(t, {
      keys: e => e ? "tooltip" : "empty",
      config: _.F,
      from: s.enabled ? x : D,
      enter: L,
      leave: s.enabled ? x : D,
      onRest: n
    }, "animate-always")((e, t) => t ? (0, i.jsx)(w, y({
      "data-migration-pending": true,
      animationStyle: e,
      targetElementRef: r
    }, o)) : null)
  };
class M extends(r = Chunk473749.Component) {
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
    if (null == require) return exports(N);
    "string" == typeof r ? e = r : "string" == typeof require && false !== r && (e = require);
    let o = {
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onContextMenu: this.handleContextMenu,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    };
    return null != module && (Chunk120356["aria-label"] = module), (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [exports(Chunk120356), true === this.props.targetElementRef && (0, Chunk54381.jsx)("span", {
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
      clickableOnMobile: p,
      hideOnClick: _,
      tooltipPointerClassName: m,
      dataMeticulousIgnore: h
    } = this.props, g = (Chunk873546.tq || Chunk873546.Em) && true === Chunk846519 && Chunk377527, E = false !== Chunk620792 && !Chunk314910 || true === Chunk620792, b = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, y = null;
    return y = module instanceof Function ? b ? module() : null : module, (0, Chunk54381.jsx)(j, {
      disableTooltipPointerEvents: Chunk343978,
      targetElementRef: this.domElementRef,
      tooltipStyle: s,
      tooltipClassName: Chunk120356,
      tooltipContentClassName: Chunk24156,
      tooltipPointerClassName: Chunk481060,
      align: exports,
      position: require,
      color: r,
      spacing: Chunk473749,
      isVisible: b,
      onAnimationRest: Chunk374470,
      onNonAccessibleClick: Chunk314910 ? this.handleClick : true,
      allowOverflow: Chunk793030,
      positionKeyStemOverride: this.props.positionKeyStemOverride,
      dataMeticulousIgnore: Chunk607070,
      children: y
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
    super(...e), b(this, "showTimeout", new p.V7), b(this, "domElementRef", {
      current: null
    }), b(this, "hasDomElement", false), b(this, "siblingDomRef", a.createRef()), b(this, "state", {
      shouldShowTooltip: false
    }), b(this, "handleMouseEnter", () => {
      (u.tq || u.Em) && true === this.props.clickableOnMobile || this.show()
    }), b(this, "handleMouseLeave", () => {
      (u.tq || u.Em) && true === this.props.clickableOnMobile || this.hide()
    }), b(this, "handleFocus", () => {
      h.Z.keyboardModeEnabled && this.show()
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
b(M, "Colors", I), b(M, "defaultProps", {
  hideOnClick: true,
  position: "top",
  color: "primary",
  forceOpen: false,
  spacing: A,
  shouldShow: true,
  allowOverflow: false,
  overflowOnly: false
})