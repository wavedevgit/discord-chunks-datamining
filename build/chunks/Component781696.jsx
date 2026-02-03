/** Chunk was on web.js **/
/** chunk id: 781696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ST: () => j,
  oM: () => I
}), require("./65821.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk340287 = require("./340287.js"),
  Chunk92674 = require("./92674.js"),
  Chunk607399 = require("./607399.js"),
  Chunk621466 = require("./621466.js"),
  Chunk158954 = require("./158954.js"),
  Chunk451988 = require("./451988.js"),
  Chunk953992 = require("./953992.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk197290 = require("./197290.js");

function y(e, t, n) {
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
      y(e, t, n[t])
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var I = function(e) {
  return e.PRIMARY = "primary", e.GREY = "grey", e.BRAND = "brand", e.GREEN = "green", e.RED = "red", e
}({});
let S = 16,
  T = 10,
  C = 8,
  N = Object.freeze({}),
  w = Object.freeze({
    top: Chunk197290.dn,
    bottom: Chunk197290.L_,
    left: Chunk197290.Lf,
    right: Chunk197290.Uu,
    center: Chunk197290.F6,
    window_center: Chunk197290.F6,
    primary: Chunk197290.A4,
    grey: Chunk197290.F7,
    brand: Chunk197290.ZE,
    green: Chunk197290.x7,
    red: Chunk197290.Rp
  });

function R(e, t, n) {
  let r = "left" === e || "right" === e,
    i = r ? "top" : "left",
    a = r ? "top" : "left",
    o = r ? "bottom" : "right",
    s = "50%",
    l = n;
  return t === a ? (s = "0%", l += S) : t === o && (s = "100%", l -= T + T), {
    [i]: "calc(".concat(s, " + ").concat(l, "px)")
  }
}
let P = e => {
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
      spacing: p = C,
      animationStyle: _,
      disableTooltipPointerEvents: h = false,
      allowOverflow: m = false,
      tooltipPointerClassName: y,
      positionKeyStemOverride: O,
      dataMeticulousIgnore: v
    } = e, A = "".concat(null != O ? O : "string" == typeof o ? o : "", ":").concat(r);
    return (0, i.jsx)(g.nE, {
      disablePointerEvents: h,
      targetRef: t,
      position: r,
      autoInvert: true,
      align: n,
      positionKey: A,
      spacing: p,
      nudgeAlignIntoViewport: true,
      children: e => {
        let {
          position: t,
          nudge: p
        } = e;
        return (0, i.jsxs)(c.animated.div, {
          onClick: l,
          className: s()(E.YL, w[null != t ? t : r], w[a], {
            [E.Cy]: h
          }, u),
          style: b({}, _, d),
          "data-mtctest-ignore": v,
          children: [(0, i.jsx)("div", {
            className: s()(E.xQ, E.yH, y),
            style: R(null != t ? t : r, n, p)
          }), (0, i.jsx)("div", {
            className: s()(E.xQ, y),
            style: R(null != t ? t : r, n, p)
          }), (0, i.jsx)("div", {
            className: s()(E.rv, {
              [E.u2]: m
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
  L = {
    scale: 1,
    opacity: 0
  },
  x = {
    scale: 1,
    opacity: 1
  },
  M = e => {
    let {
      isVisible: t,
      onAnimationRest: n,
      targetElementRef: r
    } = e, o = v(e, ["isVisible", "onAnimationRest", "targetElementRef"]), {
      reducedMotion: s
    } = a.useContext(f.CZY);
    return (0, h.pnh)(t, {
      keys: e => e ? "tooltip" : "empty",
      config: _.p,
      from: s.enabled ? L : D,
      enter: x,
      leave: s.enabled ? L : D,
      onRest: n
    }, "animate-always")((e, t) => t ? (0, i.jsx)(P, b({
      "data-migration-pending": true,
      animationStyle: e,
      targetElementRef: r
    }, o)) : null)
  };
class j extends(r = Chunk64700.Component) {
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
        if (e = null == (t = this.siblingDomRef.current) ? true : t.previousElementSibling, !(0, d.vq)(e)) throw Error("VoidTooltip cannot find DOM node")
      }
      this.domElementRef.current = e, this.hasDomElement = true, this.forceUpdate()
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
    if (null == n) return t(N);
    "string" == typeof r ? e = r : "string" == typeof n && false !== r && (e = n);
    let o = {
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onContextMenu: this.handleContextMenu,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    };
    return null != e && (o["aria-label"] = e), (0, i.jsxs)(a.Fragment, {
      children: [t(o), true === this.props.targetElementRef && (0, i.jsx)("span", {
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
      tooltipPointerClassName: h,
      dataMeticulousIgnore: m
    } = this.props, g = (u.Fr || u.v1) && true === p && _, E = false !== c && !g || true === c, y = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, b = null;
    return b = e instanceof Function ? y ? e() : null : e, (0, i.jsx)(M, {
      disableTooltipPointerEvents: E,
      targetElementRef: this.domElementRef,
      tooltipStyle: s,
      tooltipClassName: o,
      tooltipContentClassName: l,
      tooltipPointerClassName: h,
      align: t,
      position: n,
      color: r,
      spacing: a,
      isVisible: y,
      onAnimationRest: d,
      onNonAccessibleClick: g ? this.handleClick : true,
      allowOverflow: f,
      positionKeyStemOverride: this.props.positionKeyStemOverride,
      dataMeticulousIgnore: m,
      children: b
    })
  }
  show() {
    let {
      delay: e,
      overflowOnly: t
    } = this.props;
    if (t) {
      let e = this.domElementRef.current;
      if (null == e || (0, d.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
    }
    null != e ? this.showTimeout.start(e, () => this.toggleShow(true), false) : this.toggleShow(true)
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
    super(...e), y(this, "showTimeout", new p.Ep), y(this, "domElementRef", {
      current: null
    }), y(this, "hasDomElement", false), y(this, "siblingDomRef", a.createRef()), y(this, "state", {
      shouldShowTooltip: false
    }), y(this, "handleMouseEnter", () => {
      (u.Fr || u.v1) && true === this.props.clickableOnMobile || this.show()
    }), y(this, "handleMouseLeave", () => {
      (u.Fr || u.v1) && true === this.props.clickableOnMobile || this.hide()
    }), y(this, "handleFocus", () => {
      m.A.keyboardModeEnabled && this.show()
    }), y(this, "handleBlur", () => {
      this.hide()
    }), y(this, "handleClick", () => {
      let e = this.hasDomElement;
      e && this.props.hideOnClick ? this.hide() : !e && (u.Fr || u.v1) && true === this.props.clickableOnMobile && this.show()
    }), y(this, "handleContextMenu", () => {
      this.hide()
    })
  }
}
y(j, "Colors", I), y(j, "defaultProps", {
  hideOnClick: true,
  position: "top",
  color: "primary",
  forceOpen: false,
  spacing: C,
  shouldShow: true,
  allowOverflow: false,
  overflowOnly: false
})