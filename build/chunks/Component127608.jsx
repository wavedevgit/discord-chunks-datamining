/** Chunk was on 82124 **/
/** chunk id: 127608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
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

function o() {
  function e() {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
      return t => (0, r.jsx)(e, a({
        source: "Screenshare Unavailable"
      }, t))
    })
  }(0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("67753").then(n.bind(n, 873809));
    return n => {
      var i, o;
      return (0, r.jsx)(t, (i = a({}, n), o = o = {
        header: l.intl.string(l.t.GFr0GR),
        body: l.intl.string(l.t.QSk6E8),
        confirmText: l.intl.string(l.t["BK8LK+"]),
        onConfirm: e
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
  })
}