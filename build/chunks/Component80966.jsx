/** Chunk was on web.js **/
/** chunk id: 80966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk403182 = require("./403182.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk640108 = require("./640108.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
class m extends Chunk647438.Component {
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
        downloadable: b = true,
        volume: y,
        autoPlay: O,
        autoMute: v,
        responsive: I,
        mediaLayoutType: T,
        mimeType: S,
        renderOverlayContent: A,
        renderLinkComponent: C,
        onClick: N,
        onPlay: R,
        onPause: P,
        onEnded: D,
        onControlsShow: w,
        onControlsHide: L,
        onVolumeChange: x,
        onMute: M,
        disableArrowKeySeek: k,
        alt: j = Chunk388032.intl.string(Chunk388032.t.FlNoSV)
      } = module,
      U = p(module, ["src", "fileSize", "className", "mediaPlayerClassName", "poster", "fileName", "naturalWidth", "naturalHeight", "playable", "downloadable", "volume", "autoPlay", "autoMute", "responsive", "mediaLayoutType", "mimeType", "renderOverlayContent", "renderLinkComponent", "onClick", "onPlay", "onPause", "onEnded", "onControlsShow", "onControlsHide", "onVolumeChange", "onMute", "disableArrowKeySeek", "alt"]);
    return (0, Chunk951288.jsx)(Chunk124347.ZP, _(d({
      alt: j,
      className: Chunk647438,
      src: f
    }, U), {
      minWidth: Chunk640108.ZP.minWidth,
      minHeight: Chunk640108.ZP.minHeight,
      shouldLink: false,
      shouldAnimate: false,
      mediaLayoutType: T,
      responsive: I,
      children: e => {
        let {
          src: i,
          size: {
            width: o,
            height: c
          }
        } = e, d = !(m <= l.N_j && g <= l.XKF || m <= l.XKF && g <= l.N_j);
        return (0, r.jsx)(s.ZP, {
          alt: j,
          className: u,
          forceExternal: d,
          src: t,
          poster: i,
          width: o,
          height: c,
          responsive: I,
          volume: y,
          autoPlay: null != O && O,
          autoMute: null != v && v,
          type: s.ZP.Types.VIDEO,
          mediaLayoutType: T,
          fileName: h,
          fileSize: null == n ? true : (0, a.Ng)(n),
          fileSizeBytes: null == n ? true : n,
          playable: E,
          renderLinkComponent: C,
          renderOverlayContent: A,
          onClick: N,
          onPlay: R,
          onPause: P,
          onEnded: D,
          onVolumeChange: x,
          onMute: M,
          onControlsShow: w,
          onControlsHide: L,
          mimeType: S,
          downloadable: b,
          disableArrowKeySeek: k
        })
      }
    }))
  }
}