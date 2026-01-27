/** Chunk was on web.js **/
/** chunk id: 490693, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk619517 = require("./619517.jsx"),
  Chunk369254 = require("./369254.jsx"),
  Chunk256905 = require("./256905.jsx"),
  Chunk218394 = require("./218394.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class y extends(r = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        appContext: t,
        isWindowFocused: n
      } = e,
      r = g(e, ["appContext", "isWindowFocused"]);
    return (0, i.jsx)(c.Ay, m(_({}, r), {
      onZoom: this.onZoom,
      onMouseEnter: this.onMouseEnter,
      shouldAnimate: n
    }))
  }
  constructor(...e) {
    super(...e), p(this, "onMouseEnter", e => {
      let {
        src: t,
        width: n,
        height: r,
        onMouseEnter: i,
        handlePreloadImage: a
      } = this.props;
      (null == i || i(e), null != a) ? a(): (0, u.t1)({
        src: t,
        width: n,
        height: r,
        options: this.props
      })
    }), p(this, "modalContext", (0, s.TId)(this.props.appContext)), p(this, "onCloseImage", () => {
      (0, s.OoC)(d.K, this.modalContext)
    }), p(this, "onZoom", (e, t) => {
      let {
        zoomThumbnailPlaceholder: n,
        trigger: r
      } = t;
      e.preventDefault();
      let {
        alt: i,
        src: a,
        original: s,
        width: l,
        height: c,
        animated: u,
        srcIsAnimated: f,
        children: p,
        shouldHideMediaOptions: _ = false,
        sourceMetadata: h,
        analyticsSource: m,
        contentType: g,
        originalContentType: E
      } = this.props, y = {
        url: a,
        width: l,
        height: c,
        type: "IMAGE",
        alt: i,
        contentType: g,
        originalContentType: E,
        zoomThumbnailPlaceholder: n,
        animated: u,
        srcIsAnimated: f,
        children: p,
        trigger: r,
        sourceMetadata: h,
        original: null != s ? s : a
      };
      (0, o.vq)(e.currentTarget) && e.currentTarget.blur(), (0, d.R)({
        onClose: this.onCloseImage,
        items: [y],
        shouldHideMediaOptions: _,
        location: null != m ? m : "LazyImageZoomable",
        contextKey: this.modalContext
      })
    })
  }
}

function b(e) {
  let t = (0, l.Us)(),
    n = (0, f.j)();
  return (0, i.jsx)(y, m(_({}, e), {
    isWindowFocused: n,
    appContext: t
  }))
}
p(y, "defaultProps", {
  shouldLink: true,
  autoPlay: false,
  animated: false
})