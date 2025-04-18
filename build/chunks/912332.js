/** Chunk was on 58593 **/
n.d(t, {
  Np: () => d,
  l8: () => l,
  mc: () => u,
  so: () => s
});
var a = n(200651);
n(192379);
var r = n(481060),
  o = n(822869);

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let s = "forward-modal";

function l(e) {
  let {
    message: t,
    source: l,
    initialSelectedDestinations: u = [],
    forwardOptions: d,
    onRequestSent: p
  } = e;
  (0, o.Lb)(t.channel_id, t.id, l), (0, r.ZDy)(async () => {
    let {
      ForwardModal: e
    } = await Promise.all([n.e("25292"), n.e("6380"), n.e("16967")]).then(n.bind(n, 930864));
    return n => (0, a.jsx)(e, c(i({}, n), {
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
  (0, r.Mr3)(s)
}

function d(e) {
  let {
    message: t,
    failedDestinations: o,
    forwardOptions: s
  } = e;
  (0, r.ZDy)(async () => {
    let {
      ForwardFailedAlertModal: e
    } = await n.e("86590").then(n.bind(n, 384331));
    return n => (0, a.jsx)(e, c(i({}, n), {
      message: t,
      failedDestinations: o,
      forwardOptions: s
    }))
  })
}