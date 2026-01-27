/** Chunk was on web.js **/
/** chunk id: 248643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk453771 = require("./453771.js"),
  Chunk619517 = require("./619517.jsx"),
  Chunk922667 = require("./922667.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
class m extends Chunk64700.Component {
  render() {
    let e = this.props,
      {
        src: t,
        fileSize: n,
        className: i,
        mediaPlayerClassName: u,
        poster: f,
        fileName: h,
        naturalWidth: m,
        naturalHeight: g,
        playable: E,
        downloadable: y = true,
        volume: b,
        autoPlay: O,
        autoMute: v,
        responsive: A,
        mediaLayoutType: I,
        mimeType: S,
        renderOverlayContent: T,
        renderLinkComponent: C,
        onClick: N,
        onPlay: w,
        onPause: R,
        onEnded: P,
        onControlsShow: D,
        onControlsHide: L,
        onVolumeChange: x,
        onMute: M,
        disableArrowKeySeek: j,
        alt: k = c.intl.string(c.t.FlNoSV)
      } = e,
      U = _(e, ["src", "fileSize", "className", "mediaPlayerClassName", "poster", "fileName", "naturalWidth", "naturalHeight", "playable", "downloadable", "volume", "autoPlay", "autoMute", "responsive", "mediaLayoutType", "mimeType", "renderOverlayContent", "renderLinkComponent", "onClick", "onPlay", "onPause", "onEnded", "onControlsShow", "onControlsHide", "onVolumeChange", "onMute", "disableArrowKeySeek", "alt"]);
    return (0, r.jsx)(o.Ay, p(d({
      alt: k,
      className: i,
      src: f
    }, U), {
      minWidth: s.Ay.minWidth,
      minHeight: s.Ay.minHeight,
      shouldLink: false,
      shouldAnimate: false,
      mediaLayoutType: I,
      responsive: A,
      children: e => {
        let {
          src: i,
          size: {
            width: o,
            height: c
          }
        } = e, d = !(m <= l.AaC && g <= l.oJQ || m <= l.oJQ && g <= l.AaC);
        return (0, r.jsx)(s.Ay, {
          alt: k,
          className: u,
          forceExternal: d,
          src: t,
          poster: i,
          width: o,
          height: c,
          responsive: A,
          volume: b,
          autoPlay: null != O && O,
          autoMute: null != v && v,
          type: s.Ay.Types.VIDEO,
          mediaLayoutType: I,
          fileName: h,
          fileSize: null == n ? true : (0, a.Hb)(n),
          fileSizeBytes: null == n ? true : n,
          playable: E,
          renderLinkComponent: C,
          renderOverlayContent: T,
          onClick: N,
          onPlay: w,
          onPause: R,
          onEnded: P,
          onVolumeChange: x,
          onMute: M,
          onControlsShow: D,
          onControlsHide: L,
          mimeType: S,
          downloadable: y,
          disableArrowKeySeek: j
        })
      }
    }))
  }
}