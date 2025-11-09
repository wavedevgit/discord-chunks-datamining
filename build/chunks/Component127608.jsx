/** Chunk was on 50642 **/
/** chunk id: 127608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function o() {
  function e() {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([require.e("32996"), require.e("74023")]).then(require.bind(require, 431583));
      return t => (0, i.jsx)(e, a({
        source: "Screenshare Unavailable"
      }, t))
    })
  }(0, Chunk481060.ZDy)(async () => {
    let {
      default: t
    } = await require.e("67753").then(require.bind(require, 873809));
    return n => {
      var r, o;
      return (0, i.jsx)(t, (r = a({}, n), o = o = {
        header: l.intl.string(l.t.GFr0GR),
        body: l.intl.string(l.t.QSk6E8),
        confirmText: l.intl.string(l.t["BK8LK+"]),
        onConfirm: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
      }), r))
    }
  })
}