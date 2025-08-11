/** Chunk was on 20087 **/
/** chunk id: 327802, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  X: () => c,
  Z: () => u
}), require("./415506.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk372129 = require("./372129.jsx"),
  Chunk205822 = require("./205822.jsx"),
  Chunk731994 = require("./731994.js"),
  Chunk388032 = require("./388032.jsx");
let c = t => {
    let {
      className: e,
      onSuccess: c,
      onError: u
    } = t, f = async t => {
      try {
        let {
          dataURI: e
        } = await (0, l.po)(t);
        c({
          file: t,
          data: e
        })
      } catch (t) {
        u(Error("Failed to read file", {
          cause: t
        }))
      }
    };
    return (0, n.jsx)(o.Z, {
      className: e,
      title: s.intl.string(s.t.DU0dy8),
      description: s.intl.string(s.t.bpycfH),
      icons: a.pA,
      onDrop: t => {
        let e = null == t ? true : t[0];
        null != e && (0, i.ZDy)(async () => {
          let {
            default: t
          } = await r.e("16169").then(r.bind(r, 935333));
          return r => (0, n.jsx)(t, function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              }))), n.forEach(function(e) {
                var n;
                n = r[e], e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = n
              })
            }
            return t
          }({
            processFiles: () => f(e)
          }, r))
        })
      }
    })
  },
  u = function(t) {
    let {
      className: e,
      style: r,
      onDrop: i
    } = t;
    return (0, n.jsx)(o.Z, {
      className: e,
      style: r,
      title: s.intl.string(s.t.DU0dy8),
      description: s.intl.string(s.t.bpycfH),
      icons: a.pA,
      onDrop: i
    })
  }