/** Chunk was on web.js **/
/** chunk id: 359800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk362490 = require("./362490.js"),
  Chunk271469 = require("./271469.js"),
  Chunk985018 = require("./985018.jsx");

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
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, [_, h] = i.useState(false), m = i.useCallback(function() {
    for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
    h(true);
    let l = e(...i);
    return l === o._M.RPC && u && (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("30724").then(n.bind(n, 272047));
      return t => (0, r.jsx)(e, d({}, t))
    }, {
      modalKey: f
    }), l
  }, [e, h, u]), g = (0, s.A)(t);
  return i.useEffect(() => {
    if (_ && false === g && true === t) {
      if ((0, a.OoC)(f), h(false), !p) return;
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
  }, [_, t, g, p]), m
}