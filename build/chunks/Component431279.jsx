/** Chunk was on web.js **/
/** chunk id: 431279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk124347 = require("./124347.jsx"),
  Chunk730606 = require("./730606.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk506071 = require("./506071.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class b extends(r = Chunk647438.PureComponent) {
  render() {
    let e = this.props,
      {
        appContext: t,
        isWindowFocused: n
      } = module,
      r = g(module, ["appContext", "isWindowFocused"]);
    return (0, Chunk951288.jsx)(Chunk124347.ZP, m(p({}, r), {
      onZoom: this.onZoom,
      onMouseEnter: this.onMouseEnter,
      shouldAnimate: require
    }))
  }
  constructor(...e) {
    super(...e), _(this, "onMouseEnter", e => {
      let {
        src: t,
        width: n,
        height: r,
        onMouseEnter: i,
        handlePreloadImage: o
      } = this.props;
      if (null == i || i(e), null != o) return void o();
      (0, u.Qk)({
        src: t,
        width: n,
        height: r,
        options: this.props
      })
    }), _(this, "modalContext", (0, s.VnL)(this.props.appContext)), _(this, "onCloseImage", () => {
      (0, s.Mr3)(d.Q, this.modalContext)
    }), _(this, "onZoom", (e, t) => {
      let {
        zoomThumbnailPlaceholder: n,
        trigger: r
      } = t;
      e.preventDefault();
      let {
        alt: i,
        src: o,
        original: s,
        width: l,
        height: c,
        animated: u,
        srcIsAnimated: f,
        children: _,
        shouldHideMediaOptions: p = false,
        sourceMetadata: h,
        analyticsSource: m,
        contentType: g,
        originalContentType: E
      } = this.props, b = {
        url: o,
        width: l,
        height: c,
        type: "IMAGE",
        alt: i,
        contentType: g,
        originalContentType: E,
        zoomThumbnailPlaceholder: n,
        animated: u,
        srcIsAnimated: f,
        children: _,
        trigger: r,
        sourceMetadata: h,
        original: null != s ? s : o
      };
      (0, a.k)(e.currentTarget) && e.currentTarget.blur(), (0, d.K)({
        onClose: this.onCloseImage,
        items: [b],
        shouldHideMediaOptions: p,
        location: null != m ? m : "LazyImageZoomable",
        contextKey: this.modalContext
      })
    })
  }
}

function y(e) {
  let t = (0, l.bp)(),
    n = (0, f.n)();
  return (0, i.jsx)(b, m(p({}, e), {
    isWindowFocused: n,
    appContext: t
  }))
}
_(b, "defaultProps", {
  shouldLink: true,
  autoPlay: false,
  animated: false
})