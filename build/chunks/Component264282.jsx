/** Chunk was on 1272 **/
/** chunk id: 264282, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313481 = require("./313481.js"),
  Chunk509212 = require("./509212.js"),
  Chunk670362 = require("./670362.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk477813 = require("./477813.js");
let d = function(e) {
  let {
    onChange: t,
    selectedFilters: n
  } = e, d = (0, a.N8)(), p = i.useCallback(e => r => {
    let i = e.filter(e => r.includes(e.filter));
    t([...n.filter(t => !e.some(e => e.filter === t.filter)), ...i])
  }, [n, t]);
  return (0, r.jsx)(o.Z, {
    renderPopout: (e, i) => {
      let {
        closePopout: a
      } = e;
      return (0, r.jsxs)("div", {
        children: [d.map((e, t) => {
          let a = e.options.map(e => ({
              label: (0, s.Nt)(e.filter),
              value: e.filter
            })),
            c = n.filter(t => e.options.some(e => e.filter === t.filter)).map(e => e.filter);
          return (0, r.jsxs)("div", {
            className: u.filterOptionGroup,
            children: [(0, r.jsx)(o.g, {
              id: i,
              children: e.heading
            }), (0, r.jsx)(l.cOn, {
              "aria-labelledby": i,
              options: a,
              selectedValues: c,
              onChange: p(e.options)
            })]
          }, t)
        }), (0, r.jsx)("div", {
          className: u.filterOptionGroup,
          children: (0, r.jsx)(l.Button, {
            fullWidth: true,
            onClick: () => {
              t([]), a()
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
        icon: l.gXV,
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