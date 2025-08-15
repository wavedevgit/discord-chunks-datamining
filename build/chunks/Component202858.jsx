/** Chunk was on 30202 **/
/** chunk id: 202858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Yn: () => o,
  ZP: () => c
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js");

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

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function o() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, r.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("76540"), n.e("82411")]).then(n.bind(n, 628908));
      return n => (0, i.jsx)(t, l(a({}, n), {
        isTotp: e
      }))
    }, {
      onCloseCallback: t,
      onCloseRequest: s.VqG
    })
  })
}
let c = {
  enableMFA: async function() {
    await new Promise(e => {
      (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("87442"), n.e("23746")]).then(n.bind(n, 837651));
        return n => (0, i.jsx)(t, l(a({}, n), {
          handleEnableMFASuccess: e
        }))
      })
    }), await o()
  }
}