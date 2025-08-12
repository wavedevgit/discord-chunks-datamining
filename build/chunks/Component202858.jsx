/** Chunk was on 21863 **/
/** chunk id: 202858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Yn: () => s,
  ZP: () => a
}), require("./415506.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function o(e, t) {
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

function s() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("76540"), n.e("77720")]).then(n.bind(n, 628908));
      return n => (0, r.jsx)(t, o(l({}, n), {
        isTotp: e
      }))
    }, {
      onCloseCallback: t,
      onCloseRequest: c.VqG
    })
  })
}
let a = {
  enableMFA: async function() {
    await new Promise(e => {
      (0, i.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("35992"), n.e("23746")]).then(n.bind(n, 837651));
        return n => (0, r.jsx)(t, o(l({}, n), {
          handleEnableMFASuccess: e
        }))
      })
    }), await s()
  }
}