/** Chunk was on 21738 **/
/** chunk id: 936356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk890687 = require("./890687.js"),
  Chunk651892 = require("./651892.js"),
  Chunk264580 = require("./264580.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk819446 = require("./819446.js");
let d = function(e) {
  let {
    onChange: t,
    selectedFilters: n
  } = e, d = (0, a.Nb)(), p = i.useCallback(e => r => {
    let i = e.filter(e => r.includes(e.filter));
    t([...n.filter(t => !e.some(e => e.filter === t.filter)), ...i])
  }, [n, t]);
  return (0, r.jsx)(o.A, {
    renderPopout: (e, a) => {
      let {
        closePopout: f
      } = e;
      return (0, r.jsxs)("div", {
        children: [d.map((e, t) => {
          let c = e.options.map(e => ({
              label: (0, s.up)(e.filter),
              value: e.filter
            })),
            d = n.filter(t => e.options.some(e => e.filter === t.filter)).map(e => e.filter);
          return (0, r.jsxs)(i.Fragment, {
            children: [t > 0 && (0, r.jsx)("hr", {
              className: u.B
            }), (0, r.jsx)(o.q, {
              id: a,
              children: e.heading
            }), (0, r.jsx)(l.$QX, {
              "aria-labelledby": a,
              options: c,
              selectedValues: d,
              onChange: p(e.options)
            })]
          }, t)
        }), (0, r.jsx)("hr", {
          className: u.B
        }), (0, r.jsx)("div", {
          className: u.W,
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
      var i, a;
      return (0, r.jsx)(l.Button, (i = function(e) {
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
        buttonRef: t,
        size: "sm",
        text: c.intl.formatToPlainString(c.t.CEfkXl, {
          numSelectedFilters: n.length
        }),
        icon: l.RgP,
        iconPosition: "end",
        variant: "secondary"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
      }), i))
    }
  })
}