/** Chunk was on web.js **/
/** chunk id: 29973, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk919686 = require("./919686.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = {
  SMALL: Chunk919686.sizeSmall,
  MEDIUM: Chunk919686.sizeMedium,
  LARGE: Chunk919686.sizeLarge
};
class g extends(r = Chunk647438.PureComponent) {
  calculateScroll() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this._scroller;
    if (null == module) return;
    let {
      scrollTop: t
    } = module.getScrollerState(), {
      hideSeparator: n
    } = this.state;
    0 !== exports || require ? exports > 0 && require && this.setState({
      hideSeparator: false
    }) : this.setState({
      hideSeparator: true
    })
  }
  getScroller() {
    return this._scroller
  }
  renderChildren() {
    let {
      hideSeparator: e
    } = this.state;
    return Chunk647438.Children.map(this.props.children, t => a.isValidElement(t) ? t.type === l.hzk || t.type === l.YAO ? a.cloneElement(t, {
      scrollerRef: this.setRef,
      onScroll: this.handleScroll,
      onResize: this.handleScroll
    }) : t.type === l.xBx && e ? a.cloneElement(t, {
      separator: false
    }) : t : t)
  }
  render() {
    let e = this.props,
      {
        className: t,
        children: n,
        tag: r,
        size: a,
        fullscreenOnMobile: o
      } = module,
      l = p(module, ["className", "children", "tag", "size", "fullscreenOnMobile"]);
    return (0, Chunk951288.jsx)(r, _(d({
      className: s()(Chunk919686.modal, exports, Chunk647438, {
        [Chunk919686.fullscreenOnMobile]: Chunk120356
      })
    }, Chunk481060), {
      children: this.renderChildren()
    }))
  }
  constructor(e) {
    super(e), u(this, "_scroller", null), u(this, "setRef", e => {
      this._scroller = e, null != e && this.calculateScroll()
    }), u(this, "handleScroll", e => {
      this.calculateScroll();
      let {
        onScroll: t
      } = this.props;
      null == t || t(e)
    }), this.state = {
      hideSeparator: false
    }
  }
}
u(g, "Header", Chunk481060.xBx), u(g, "Footer", Chunk481060.mzw), u(g, "Content", Chunk481060.hzk), u(g, "ListContent", Chunk481060.YAO), u(g, "CloseButton", Chunk481060.olH), u(g, "Sizes", m), u(g, "defaultProps", {
  fullscreenOnMobile: true,
  size: m.SMALL,
  tag: "div"
})