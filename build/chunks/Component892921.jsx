/** Chunk was on 11810 **/
/** chunk id: 892921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f,
  AddQuestionsContextMenu: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk828208 = require("./828208.jsx"),
  Chunk513461 = require("./513461.js"),
  Chunk557420 = require("./557420.jsx"),
  Chunk322388 = require("./322388.jsx"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    addFormField: t,
    onSelect: n,
    guild: s,
    allowTerms: u
  } = e;
  return (0, r.jsx)(i.W1t, {
    "data-menu-migrated": true,
    navId: "add-questions",
    onClose: l.Z_,
    "aria-label": d.intl.string(d.t.liqwPJ),
    onSelect: n,
    children: (0, r.jsxs)(i.rXV, {
      children: [(0, r.jsx)(i.Drp, {
        id: "text-input",
        icon: (0, i.kHD)(o.A),
        leadingAccessory: {
          type: "icon",
          icon: (0, i.kHD)(o.A)
        },
        label: d.intl.string(d.t.w6Q9wz),
        action: () => (0, a.PV)(c.rX.TEXT_INPUT, t, s)
      }), (0, r.jsx)(i.Drp, {
        id: "paragraph",
        icon: i.$tc,
        leadingAccessory: {
          type: "icon",
          icon: i.$tc
        },
        label: d.intl.string(d.t.gG0JBN),
        action: () => (0, a.PV)(c.rX.PARAGRAPH, t, s)
      }), (0, r.jsx)(i.Drp, {
        id: "multiple-choice",
        icon: i.jsc,
        leadingAccessory: {
          type: "icon",
          icon: i.jsc
        },
        label: d.intl.string(d.t.ooKh3m),
        action: () => (0, a.PV)(c.rX.MULTIPLE_CHOICE, t, s)
      }), u && (0, r.jsx)(i.Drp, {
        id: "terms",
        icon: i.B8Q,
        leadingAccessory: {
          type: "icon",
          icon: i.B8Q
        },
        label: d.intl.string(d.t["3pz9t3"]),
        action: () => (0, a.PV)(c.rX.TERMS, t, s)
      })]
    })
  })
}
let f = function(e) {
  let {
    addFormField: t,
    guild: n,
    allowTerms: i
  } = e;
  return (0, r.jsx)(s.d, {
    text: d.intl.string(d.t.CoHdoG),
    tooltipText: d.intl.string(d.t.nsI4dU),
    onClick: e => {
      (0, l.jA)(e, e => {
        var l, o;
        return (0, r.jsx)(u, (l = function(e) {
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
        }({}, e), o = o = {
          addFormField: t,
          guild: n,
          allowTerms: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
        }), l))
      }, {
        position: "top",
        align: "center"
      })
    }
  })
}