/** Chunk was on 87665 **/
/** chunk id: 383832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s,
  y: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk71509 = require("./71509.js");

function o(e) {
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

function s() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("55944").then(require.bind(require, 266653));
    return t => (0, a.jsx)(e, o({}, t))
  }, {
    onCloseCallback: () => {
      Chunk570140.Z.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: true
      })
    },
    modalKey: Chunk71509.Ui
  })
}

function c() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([require.e("52030"), require.e("41619"), require.e("23734")]).then(require.bind(require, 153069));
    return t => {
      var n, r;
      return (0, a.jsx)(e, (n = o({}, t), r = r = {
        onBackPressed: s
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
      Chunk570140.Z.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: true
      })
    },
    modalKey: Chunk71509._5
  })
}