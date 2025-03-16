/** Chunk was on 87267 **/
n.d(t, {
  D: () => O,
  Z: () => b
});
var r = n(200651),
  i = n(120356),
  o = n.n(i),
  a = n(524444),
  l = n(52824),
  s = n(956664),
  c = n(589530),
  u = n(591759),
  d = n(124347),
  f = n(80966),
  p = n(345159);

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = {
  DEFAULT: null,
  CONTAIN: p.contain,
  SCALE_DOWN: p.scaleDown
};

function b(e) {
  let {
    media: t,
    fit: n = O.DEFAULT,
    obscured: i = !1,
    onContextMenu: b
  } = e, {
    width: m,
    height: g,
    url: y,
    proxyUrl: C,
    alt: E,
    type: S,
    maxWidth: v,
    maxHeight: P
  } = t, x = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(t, ["width", "height", "url", "proxyUrl", "alt", "type", "maxWidth", "maxHeight"]), {
    width: L,
    height: j
  } = (0, s.zp)(null != m ? m : 0, null != g ? g : 0), D = (0, l.q)({
    proxyURL: C,
    url: y
  }), N = null != m && 0 !== m && null != g && 0 !== g;
  if ("VIDEO" === S && N && null != C) {
    var A;
    let e = function(e) {
      let t = u.Z.toURLSafe(e);
      return null == t ? null : (t.searchParams.append("format", "webp"), t.toString())
    }(C);
    if (null == e) return null;
    let n = null !== (A = t.renderLinkComponent) && void 0 !== A ? A : a.iT;
    return (0, r.jsx)(f.Z, h(_({}, x), {
      src: D,
      width: m,
      height: g,
      maxWidth: L,
      maxHeight: j,
      poster: e,
      naturalWidth: m,
      naturalHeight: g,
      volume: c.FC,
      autoMute: c.rs,
      onVolumeChange: c.jA,
      onMute: c.Zj,
      renderLinkComponent: n,
      autoPlay: !i,
      alt: E,
      onContextMenu: b
    }))
  }
  return "IMAGE" === S ? N ? (0, r.jsx)(d.ZP, h(_({}, x), {
    imageClassName: o()(p.slide, n),
    src: D,
    width: m,
    height: g,
    shouldLink: !1,
    maxWidth: L,
    maxHeight: j,
    animated: !i && t.animated,
    autoPlay: !i,
    alt: E,
    zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
    onContextMenu: b
  })) : (0, r.jsx)("img", {
    src: D,
    alt: E,
    className: o()(p.slide, n),
    onContextMenu: b
  }) : null
}