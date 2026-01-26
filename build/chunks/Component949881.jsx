/** Chunk was on 89346 **/
/** chunk id: 949881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk818348 = require("./818348.js");
let i = e => (0, r.jsx)(a.W1t, {
  "data-menu-migrated": true,
  onClose: o.Z_,
  navId: "staff-only-entry-debug",
  "aria-label": "staff only content inventory debug",
  onSelect: c.tE,
  children: (0, r.jsx)(a.Drp, {
    id: "test",
    label: "Debug (Staff-Only)",
    action: () => {
      (0, a.mMO)(async () => {
        let {
          default: t
        } = await n.e("94022").then(n.bind(n, 924037));
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
    icon: a.PXj,
    leadingAccessory: {
      type: "icon",
      icon: a.PXj
    }
  })
})