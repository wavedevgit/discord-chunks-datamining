/** Chunk was on 21738 **/
/** chunk id: 765258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk144914 = require("./144914.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk436292 = require("./436292.js");
let h = (0, Chunk144914.S)() || false,
  g = Chunk64700.memo(function(e) {
    let {
      currentRoute: t,
      renderToolbar: n
    } = e, c = i.useContext(o.AnalyticsContext), g = h || t === u.BVt.APPLICATION_LIBRARY_SETTINGS;
    return (0, r.jsxs)(a.A, {
      className: p.$,
      toolbar: null == n ? true : n(),
      children: [(0, r.jsx)(a.A.Icon, {
        icon: l._z,
        "aria-hidden": true
      }), (0, r.jsx)(a.A.Title, {
        children: d.intl.string(d.t.cw57ar)
      }), (0, r.jsx)(a.A.Divider, {}), (0, r.jsxs)(l.VQ0, {
        type: "top-pill",
        selectedItem: t,
        onItemSelect: function(e) {
          var n, r;
          e !== t && (0, s.pX)(e, {
            state: {
              analyticsSource: (n = function(e) {
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
              }({}, c.location), r = r = {
                section: u.JJy.TABS,
                object: u.ZSU.NAVIGATION_LINK
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
              }), n)
            }
          })
        },
        children: [(0, r.jsx)(l.VQ0.Item, {
          id: u.BVt.APPLICATION_LIBRARY,
          children: d.intl.string(d.t.p7ARTB)
        }), g ? (0, r.jsx)(l.VQ0.Item, {
          id: u.BVt.APPLICATION_LIBRARY_SETTINGS,
          children: d.intl.string(d.t["3D5yo/"])
        }) : null]
      })]
    })
  })