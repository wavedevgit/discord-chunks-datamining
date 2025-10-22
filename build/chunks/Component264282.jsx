/** Chunk was on 1272 **/
/** chunk id: 264282, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk670362 = require("./670362.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk477813 = require("./477813.js");
let d = function(e) {
  let {
    onChange: t,
    optionClassName: n,
    selectedFilters: d
  } = e, p = (0, o.N8)();
  return (0, r.jsx)(s.Z, {
    renderPopout: (e, o) => {
      let {
        closePopout: f
      } = e;
      return (0, r.jsxs)("div", {
        children: [p.map((e, c) => (0, r.jsxs)("div", {
          className: u.filterOptionGroup,
          children: [(0, r.jsx)(s.g, {
            id: o,
            children: e.heading
          }), e.options.map((e, o) => (0, r.jsx)(i.$q, {
            className: n,
            innerClassName: u.checkboxInput,
            onChange: n => {
              t(n.currentTarget.checked ? [...d, e] : d.filter(t => t.filter !== e.filter))
            },
            reverse: true,
            type: i.M0.INVERTED,
            value: false !== d.findIndex(t => t.filter === e.filter),
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              children: (0, a.Nt)(e.filter)
            })
          }, o))]
        }, c)), (0, r.jsx)("div", {
          className: u.filterOptionGroup,
          children: (0, r.jsx)(l.Button, {
            fullWidth: true,
            onClick: () => {
              t([]), f()
            },
            size: "sm",
            text: c.intl.string(c.t.VkKicb),
            variant: "secondary"
          })
        })]
      })
    },
    children: (e, t) => {
      var n, i;
      return (0, r.jsx)(l.Button, (n = function(e) {
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
        buttonRef: t,
        size: "sm",
        text: c.intl.formatToPlainString(c.t.CEfkXl, {
          numSelectedFilters: d.length
        }),
        icon: l.gXV,
        iconPosition: "end",
        variant: "secondary"
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