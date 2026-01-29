/** Chunk was on 87557 **/
/** chunk id: 347853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o,
  D: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk573879 = require("./573879.js");

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
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("28386").then(n.bind(n, 623161));
    return t => (0, a.jsx)(e, s({}, t))
  }, {
    onCloseCallback: () => {
      r.h.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: true
      })
    },
    modalKey: i.ov
  })
}

function c() {
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("88890"), n.e("34078"), n.e("64171")]).then(n.bind(n, 365225));
    return t => {
      var n, l;
      return (0, a.jsx)(e, (n = s({}, t), l = l = {
        onBackPressed: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n))
    }
  }, {
    onCloseCallback: () => {
      r.h.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: true
      })
    },
    modalKey: i.Gl
  })
}