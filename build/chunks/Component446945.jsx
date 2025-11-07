/** Chunk was on 64982 **/
/** chunk id: 446945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk838221 = require("./838221.jsx"),
  Chunk246364 = require("./246364.js"),
  Chunk540457 = require("./540457.jsx"),
  Chunk700833 = require("./700833.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk789113 = require("./789113.js");

function g(e) {
  let {
    addFormField: t,
    onSelect: n,
    guild: o,
    allowTerms: g
  } = e;
  return (0, r.jsx)(i.v2r, {
    navId: "add-questions",
    className: u.menu,
    onClose: l.Zy,
    "aria-label": d.intl.string(d.t.liqwPJ),
    onSelect: n,
    children: (0, r.jsxs)(i.kSQ, {
      children: [(0, r.jsx)(i.sNh, {
        id: "text-input",
        icon: (0, i.GSL)(a.Z),
        label: d.intl.string(d.t.w6Q9wz),
        action: () => (0, c.Md)(s.QJ.TEXT_INPUT, t, o)
      }), (0, r.jsx)(i.sNh, {
        id: "paragraph",
        icon: i.OvV,
        label: d.intl.string(d.t.gG0JBN),
        action: () => (0, c.Md)(s.QJ.PARAGRAPH, t, o)
      }), (0, r.jsx)(i.sNh, {
        id: "multiple-choice",
        icon: i.jE$,
        label: d.intl.string(d.t.ooKh3m),
        action: () => (0, c.Md)(s.QJ.MULTIPLE_CHOICE, t, o)
      }), g && (0, r.jsx)(i.sNh, {
        id: "terms",
        icon: i.snC,
        label: d.intl.string(d.t["3pz9t3"]),
        action: () => (0, c.Md)(s.QJ.TERMS, t, o)
      })]
    })
  })
}
let m = function(e) {
  let {
    addFormField: t,
    guild: n,
    allowTerms: i
  } = e;
  return (0, r.jsx)(o.A, {
    text: d.intl.string(d.t.CoHdoG),
    tooltipText: d.intl.string(d.t.nsI4dU),
    onClick: e => {
      (0, l.vq)(e, e => {
        var l, a;
        return (0, r.jsx)(g, (l = function(e) {
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
        }({}, e), a = a = {
          addFormField: t,
          guild: n,
          allowTerms: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l))
      }, {
        position: "top",
        align: "center"
      })
    }
  })
}