/** Chunk was on web.js **/
/** chunk id: 404036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = e => "gift-option-select-modal-".concat(e.id);

function u(e) {
  let {
    giftRecipient: t,
    onClose: a,
    analyticsLocations: s,
    analyticsLocation: u,
    analyticsObject: d,
    giftMessage: f
  } = e;
  return (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("2292"), n.e("65442"), n.e("29716"), n.e("62694")]).then(n.bind(n, 653813));
    return n => (0, r.jsx)(e, l(o({}, n), {
      giftRecipient: t,
      analyticsLocations: s,
      analyticsLocation: u,
      analyticsObject: d,
      giftMessage: f
    }))
  }, {
    modalKey: c(t),
    onCloseCallback: a
  })
}