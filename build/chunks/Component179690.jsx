/** Chunk was on 91699 **/
/** chunk id: 179690, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => s,
  sy: () => a
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function a() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return new Promise(t => {
    (0, i.mMO)(async () => {
      let {
        default: t
      } = await r.e("28429").then(r.bind(r, 549404));
      return r => (0, n.jsx)(t, o(c({}, r), {
        isTotp: e
      }))
    }, {
      onCloseCallback: t,
      onCloseRequest: l.FXj
    })
  })
}
let s = {
  enableMFA: async function() {
    await new Promise(e => {
      (0, i.mMO)(async () => {
        let {
          default: t
        } = await Promise.all([r.e("82832"), r.e("78811")]).then(r.bind(r, 333737));
        return r => (0, n.jsx)(t, o(c({}, r), {
          handleEnableMFASuccess: e
        }))
      })
    }), await a()
  }
}