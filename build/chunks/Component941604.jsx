/** Chunk was on 77870 **/
/** chunk id: 941604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk606256 = require("./606256.jsx"),
  Chunk985018 = require("./985018.jsx");
let a = "DOWNLOAD_APPS";

function o() {
  let e = (0, l.red)(e => (0, l.fDT)(e, a));
  return (0, r.jsx)(i.A, {
    id: "app-download-button",
    onClick: () => {
      (0, l.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
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
    selected: e,
    tooltip: s.intl.string(s.t.Z7jwrJ),
    icon: l.s3U
  })
}