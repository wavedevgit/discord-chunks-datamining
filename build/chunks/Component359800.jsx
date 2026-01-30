/** Chunk was on 64935 **/
/** chunk id: 359800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk362490 = require("./362490.js"),
  Chunk271469 = require("./271469.js"),
  Chunk985018 = require("./985018.jsx");
let u = "in-game-auth-check-modal";

function d(e, t) {
  let {
    showInGameModal: d = true,
    showToastOnSuccess: p = true
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, [m, f] = i.useState(false), g = i.useCallback(function() {
    for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
    f(true);
    let o = e(...i);
    return o === s._M.RPC && d && (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("30724").then(n.bind(n, 272047));
      return t => (0, r.jsx)(e, function(e) {
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
      }({}, t))
    }, {
      modalKey: u
    }), o
  }, [e, f, d]), _ = (0, a.A)(t);
  return i.useEffect(() => {
    if (m && false === _ && true === t) {
      if ((0, l.OoC)(u), f(false), !p) return;
      let e = () => {
        (0, l.showToast)({
          id: "account-linked-toast",
          message: c.intl.string(o.default.uG6teD),
          type: l.ToastType.SUCCESS
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
  }, [m, t, _, p]), g
}