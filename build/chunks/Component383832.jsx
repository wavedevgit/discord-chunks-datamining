/** Chunk was on 6043 **/
/** chunk id: 383832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o,
  y: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk71509 = require("./71509.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function o() {
  (0, r.ZDy)(async () => {
    let {
      default: e
    } = await n.e("55944").then(n.bind(n, 266653));
    return t => (0, a.jsx)(e, s({}, t))
  }, {
    onCloseCallback: () => {
      i.Z.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: true
      })
    },
    modalKey: l.Ui
  })
}

function c() {
  (0, r.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("52030"), n.e("41619"), n.e("88252")]).then(n.bind(n, 153069));
    return t => {
      var n, r;
      return (0, a.jsx)(e, (n = s({}, t), r = r = {
        onBackPressed: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  }, {
    onCloseCallback: () => {
      i.Z.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: true
      })
    },
    modalKey: l._5
  })
}