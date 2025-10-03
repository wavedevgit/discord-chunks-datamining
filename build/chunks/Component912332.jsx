/** Chunk was on 39476 **/
/** chunk id: 912332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Np: () => d,
  l8: () => c,
  mc: () => u,
  so: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk822869 = require("./822869.js");

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
let s = "forward-modal";

function c(e) {
  let {
    message: t,
    source: c,
    initialSelectedDestinations: u = [],
    forwardOptions: d,
    onRequestSent: p
  } = e;
  (0, l.Lb)(t.channel_id, t.id, c), (0, i.ZDy)(async () => {
    let {
      ForwardModal: e
    } = await Promise.all([n.e("36653"), n.e("9797")]).then(n.bind(n, 930864));
    return n => (0, r.jsx)(e, a(o({}, n), {
      message: t,
      initialSelectedDestinations: u,
      forwardOptions: d,
      onRequestSent: p
    }))
  }, {
    modalKey: s
  })
}

function u() {
  (0, Chunk481060.Mr3)(s)
}

function d(e) {
  let {
    message: t,
    failedDestinations: l,
    forwardOptions: s
  } = e;
  (0, i.ZDy)(async () => {
    let {
      ForwardFailedAlertModal: e
    } = await n.e("86590").then(n.bind(n, 384331));
    return n => (0, r.jsx)(e, a(o({}, n), {
      message: t,
      failedDestinations: l,
      forwardOptions: s
    }))
  })
}