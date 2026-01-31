/** Chunk was on 78376 **/
/** chunk id: 796497, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  let e = c.intl.string(o.default["8SLtqb"]);
  return (0, r.jsx)(i.Button, {
    icon: i.yVk,
    variant: "primary",
    text: e,
    onClick: () => {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("82832"), n.e("84268")]).then(n.bind(n, 320742));
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
      }), l.default.track(a.HAw.FAMILY_CENTER_ACTION, {
        action: s.qb.ShowQRCodeModal
      })
    }
  })
}