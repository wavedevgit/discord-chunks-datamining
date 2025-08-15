/** Chunk was on 30243 **/
/** chunk id: 611170, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  aB: () => u,
  rJ: () => d,
  yF: () => s
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk295435 = require("./295435.jsx"),
  Chunk591759 = require("./591759.js"),
  Chunk524444 = require("./524444.jsx");

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function s(e) {
  let t = e.item.originalItem.media;
  return (0, n.jsx)(l.S, {
    media: t,
    placeholderWidth: 350,
    placeholderHeight: 350,
    maxWidth: e.maxWidth,
    maxHeight: e.maxHeight,
    useFullWidth: e.useFullWidth,
    mediaLayoutType: e.mediaLayoutType
  })
}

function u(e) {
  let t = e.item.originalItem.media;
  return (0, o.Yi)(c(a({}, e), {
    alt: e.item.originalItem.description,
    src: t.proxyUrl,
    original: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholderVersion,
    contentType: t.contentType,
    originalContentType: t.originalContentType,
    sourceMetadata: {
      message: e.message
    },
    analyticsSource: "renderImageComponentForGalleryItem",
    srcIsAnimated: e.item.srcIsAnimated
  }))
}

function d(e) {
  let t = e.item.originalItem.media,
    r = i.Z.toURLSafe(t.proxyUrl);
  return null == r ? null : (r.searchParams.append("format", "webp"), (0, o.lV)(c(a({}, e), {
    poster: r.toString(),
    alt: e.item.originalItem.description,
    src: t.proxyUrl,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholderVersion,
    sourceMetadata: {
      message: e.message
    }
  })))
}