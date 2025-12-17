/** Chunk was on web.js **/
/** chunk id: 272933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk524995 = require("./524995.js"),
  Chunk349350 = require("./349350.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = "in-game-auth-check-modal";

function p(e, t) {
  let {
    showInGameModal: u = true,
    showToastOnSuccess: p = true
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, [_, m] = i.useState(false), h = i.useCallback(function() {
    for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
    m(true);
    let l = e(...i);
    return l === s.r.RPC && u && (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("59371").then(n.bind(n, 762466));
      return t => (0, r.jsx)(e, d({}, t))
    }, {
      modalKey: f
    }), l
  }, [e, m, u]), g = (0, o.Z)(t);
  return i.useEffect(() => {
    if (_ && false === g && true === t) {
      if ((0, a.Mr3)(f), m(false), !p) return;
      let e = () => {
        (0, a.showToast)({
          id: "account-linked-toast",
          message: c.intl.string(l.default.uG6teD),
          type: a.ToastType.SUCCESS
        })
      };
      if ("visible" === document.visibilityState) e();
      else {
        let t = () => {
          "visible" === document.visibilityState && (e(), document.removeEventListener("visibilitychange", t))
        };
        document.addEventListener("visibilitychange", t)
      }
    }
  }, [_, t, g, p]), h
}