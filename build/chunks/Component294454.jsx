/** Chunk was on 67851 **/
/** chunk id: 294454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Be: () => d,
  aU: () => s,
  fO: () => c,
  vK: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk530912 = require("./530912.js");

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

function i(e, t) {
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
let s = "forward-modal";

function c(e) {
  let {
    message: t,
    source: c,
    initialSelectedDestinations: d = [],
    forwardOptions: u,
    onRequestSent: _,
    customSendHandler: m
  } = e;
  (0, a.pp)(t.channel_id, t.id, c), (0, l.mMO)(async () => {
    let {
      ForwardModal: e
    } = await Promise.all([n.e("40215"), n.e("96758"), n.e("43622"), n.e("60664")]).then(n.bind(n, 911269));
    return n => (0, r.jsx)(e, i(o({}, n), {
      message: t,
      initialSelectedDestinations: d,
      forwardOptions: u,
      onRequestSent: _,
      customSendHandler: m,
      source: c
    }))
  }, {
    modalKey: s
  })
}

function d() {
  (0, l.OoC)(s)
}

function u(e) {
  let {
    message: t,
    failedDestinations: a,
    forwardOptions: s
  } = e;
  (0, l.mMO)(async () => {
    let {
      ForwardFailedAlertModal: e
    } = await n.e("66139").then(n.bind(n, 181622));
    return n => (0, r.jsx)(e, i(o({}, n), {
      message: t,
      failedDestinations: a,
      forwardOptions: s
    }))
  })
}