/** Chunk was on 46467 **/
/** chunk id: 187835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk603592 = require("./603592.jsx"),
  Chunk388032 = require("./388032.jsx");
let a = "DOWNLOAD_APPS";

function s() {
  let e = (0, Chunk481060.s9z)(e => (0, i.DEQ)(e, a));
  return (0, Chunk54381.jsx)(Chunk603592.Z, {
    id: "app-download-button",
    onClick: () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([require.e("32996"), require.e("74023")]).then(require.bind(require, 431583));
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
        }({
          source: "Guilds"
        }, t))
      }, {
        modalKey: a
      })
    },
    selected: module,
    tooltip: Chunk388032.intl.string(Chunk388032.t.Z7jwrJ),
    icon: Chunk481060._8t
  })
}