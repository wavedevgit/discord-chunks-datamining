/** Chunk was on 153 **/
/** chunk id: 330150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk231338 = require("./231338.js");
let l = e => (0, r.jsx)(a.v2r, {
  onClose: o.Zy,
  navId: "staff-only-entry-debug",
  "aria-label": "staff only content inventory debug",
  onSelect: c.dG,
  children: (0, r.jsx)(a.sNh, {
    id: "test",
    label: "Debug (Staff-Only)",
    action: () => {
      (0, a.ZDy)(async () => {
        let {
          default: t
        } = await n.e("43057").then(n.bind(n, 968650));
        return n => (0, r.jsx)(t, function(e) {
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
        }({}, n, e))
      })
    },
    icon: a.R0
  })
})