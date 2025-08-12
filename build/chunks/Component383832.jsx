/** Chunk was on 20501 **/
/** chunk id: 383832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o,
  y: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk71509 = require("./71509.js");

function l(e) {
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
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("55944").then(require.bind(require, 266653));
    return t => (0, i.jsx)(e, l({}, t))
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
    } = await Promise.all([require.e("52030"), require.e("74941"), require.e("24886")]).then(require.bind(require, 153069));
    return t => {
      var n, r;
      return (0, i.jsx)(e, (n = l({}, t), r = r = {
        onBackPressed: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
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