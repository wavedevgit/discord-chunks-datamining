/** Chunk was on 26628 **/
/** chunk id: 553984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk804932 = require("./804932.jsx"),
  Chunk725739 = require("./725739.js"),
  Chunk370774 = require("./370774.js"),
  Chunk334426 = require("./334426.js"),
  Chunk982183 = require("./982183.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk603706 = require("./603706.js");
let g = e => e === h.V5.ALL ? p.intl.string(p.t["2pAkDA"]) : p.intl.string(p.t.HcoRu7);

function m(e) {
  let {
    className: t
  } = e, n = (0, a.fJ)(), i = (0, u.ux)(), {
    selectedFilter: p,
    setSelectedFilter: m
  } = (0, c.Z)(), b = (0, d.d)(e => e.setInboxReadState);
  if (!i) return null;
  let O = () => {
      let e = p === h.V5.ALL ? h.V5.BOOKMARKS : h.V5.ALL;
      m(e), e === h.V5.ALL && b(false), (0, a.RZ)({
        section: e,
        enabled: true,
        viewId: n
      })
    },
    _ = g(p);
  return (0, r.jsx)(o.ua7, {
    position: "bottom",
    text: _,
    children: e => {
      var n, i;
      return (0, r.jsx)(o.P3F, (n = function(e) {
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
      }({}, e), i = i = {
        className: l()(t, f.headerButton, {
          [f.enabled]: p === h.V5.BOOKMARKS
        }),
        "aria-label": _,
        onClick: O,
        children: p === h.V5.BOOKMARKS ? (0, r.jsx)(o.plf, {
          size: "xs",
          color: s.Z.ICON_DEFAULT
        }) : (0, r.jsx)(o.gt9, {
          size: "xs",
          color: s.Z.ICON_TERTIARY
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}