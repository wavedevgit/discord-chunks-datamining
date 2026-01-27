/** Chunk was on web.js **/
/** chunk id: 939857, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk900729 = require("./900729.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let m = {
  SMALL: Chunk900729.PG,
  MEDIUM: Chunk900729.$g,
  LARGE: Chunk900729.Pu
};
class g extends(r = Chunk64700.PureComponent) {
  calculateScroll() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this._scroller;
    if (null == e) return;
    let {
      scrollTop: t
    } = e.getScrollerState(), {
      hideSeparator: n
    } = this.state;
    0 !== t || n ? t > 0 && n && this.setState({
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
    return a.Children.map(this.props.children, t => a.isValidElement(t) ? t.type === l.$mQ || t.type === l.Dck ? a.cloneElement(t, {
      scrollerRef: this.setRef,
      onScroll: this.handleScroll,
      onResize: this.handleScroll
    }) : t.type === l.rQ0 && e ? a.cloneElement(t, {
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
      } = e,
      l = _(e, ["className", "children", "tag", "size", "fullscreenOnMobile"]);
    return (0, i.jsx)(r, p(d({
      className: s()(c.yl, t, a, {
        [c.z]: o
      })
    }, l), {
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
u(g, "Header", Chunk397927.rQ0), u(g, "Footer", Chunk397927.jlY), u(g, "Content", Chunk397927.$mQ), u(g, "ListContent", Chunk397927.Dck), u(g, "CloseButton", Chunk397927.s_y), u(g, "Sizes", m), u(g, "defaultProps", {
  fullscreenOnMobile: true,
  size: m.SMALL,
  tag: "div"
})