/** Chunk was on 47863 **/
/** chunk id: 869580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk722733 = require("./722733.js"),
  Chunk633289 = require("./633289.js"),
  Chunk751823 = require("./751823.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function a(e, t) {
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
let c = {
    previewSizeMultiplier: 1
  },
  d = (0, Chunk722733.Z)({
    name: "2025-09-go-live-preview-size",
    kind: "user",
    defaultConfig: c,
    variations: {
      1: a(o({}, c), {
        previewSizeMultiplier: 2
      }),
      2: a(o({}, c), {
        previewSizeMultiplier: 3
      })
    }
  });

function u(e) {
  let {
    location: t
  } = e;
  return (0, r.e7)([l.Z], () => (function(e) {
    let {
      location: t
    } = e, {
      isInHoldout: n
    } = s.L.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: true
    });
    return n ? d.definition.defaultConfig : d.getConfig({
      location: t
    })
  })({
    location: t
  }))
}