/** Chunk was on 74329 **/
n.d(t, {
  T: () => s,
  v: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(82856);

function l(e) {
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
let a = "collectibles shop product details modal",
  s = e => {
    let {
      product: t,
      category: s,
      shouldCheckoutWithOrbs: u,
      analyticsSource: d,
      analyticsLocations: _,
      returnRef: p,
      tab: E
    } = e;
    u && (0, o.S6)(), (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("2026").then(n.bind(n, 702370));
      return n => {
        var i, o;
        return (0, r.jsx)(e, (i = l({}, n), o = o = {
          product: t,
          category: s,
          shouldCheckoutWithOrbs: u,
          analyticsSource: d,
          analyticsLocations: _,
          returnRef: p,
          tab: E
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    }, l({
      modalKey: a
    }, u ? {
      onCloseRequest() {
        c(), (0, o.vp)()
      }
    } : {}))
  },
  c = () => {
    (0, i.Mr3)(a)
  }