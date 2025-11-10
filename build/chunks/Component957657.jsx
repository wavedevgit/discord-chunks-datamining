/** Chunk was on 1272 **/
/** chunk id: 957657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk804739 = require("./804739.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk923656 = require("./923656.js");
let f = (0, Chunk804739.Q)() || false,
  h = Chunk647438.memo(function(e) {
    let {
      currentRoute: t,
      renderToolbar: n
    } = e, c = i.useContext(o.AnalyticsContext), h = f || t === u.Z5c.APPLICATION_LIBRARY_SETTINGS;
    return (0, r.jsxs)(a.Z, {
      className: p.libraryHeader,
      toolbar: null == n ? true : n(),
      children: [(0, r.jsx)(a.Z.Icon, {
        icon: l.vqy,
        "aria-hidden": true
      }), (0, r.jsx)(a.Z.Title, {
        children: d.intl.string(d.t.cw57ar)
      }), (0, r.jsx)(a.Z.Divider, {}), (0, r.jsxs)(l.njP, {
        type: "top-pill",
        selectedItem: t,
        onItemSelect: function(e) {
          var n, r;
          e !== t && (0, s.uL)(e, {
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
                section: u.jXE.TABS,
                object: u.qAy.NAVIGATION_LINK
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
        children: [(0, r.jsx)(l.njP.Item, {
          id: u.Z5c.APPLICATION_LIBRARY,
          children: d.intl.string(d.t.p7ARTB)
        }), h ? (0, r.jsx)(l.njP.Item, {
          id: u.Z5c.APPLICATION_LIBRARY_SETTINGS,
          children: d.intl.string(d.t["3D5yo/"])
        }) : null]
      })]
    })
  })