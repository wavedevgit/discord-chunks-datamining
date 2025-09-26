/** Chunk was on 32202 **/
/** chunk id: 187237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk140106 = require("./140106.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk79556 = require("./79556.js");

function u(e) {
  let {
    channel: t,
    children: n,
    className: i,
    editable: u,
    location: d
  } = e;
  return u ? (0, r.jsx)(a.ua7, {
    position: "bottom",
    text: s.intl.string(s.t["0qPSMT"]),
    children: e => {
      var s, u;
      return (0, r.jsxs)(a.P3F, (s = function(e) {
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
      }({}, e), u = u = {
        className: l()(c.editableGdmIcon, i),
        onClick: () => (0, o.P5)(t.id, d),
        children: [n, (0, r.jsx)("div", {
          className: c.editableGdmIconIndicator,
          children: (0, r.jsx)(a.vdY, {
            size: "xs",
            color: "currentColor"
          })
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(u)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(u, e))
      }), s))
    }
  }) : (0, r.jsx)("div", {
    className: i,
    children: n
  })
}