/** Chunk was on 78870 **/
/** chunk id: 324269, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk558060 = require("./558060.jsx"),
  Chunk284683 = require("./284683.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    closePopout: t,
    sortOptionContext: r
  } = e, {
    sortOption: o,
    setSortOption: s,
    onReset: d
  } = r, u = i.useMemo(() => c.aq.map(e => (0, n.jsx)(l.iDA, {
    id: "".concat(e),
    group: "sort-by",
    label: (0, c.Ac)(e),
    action: () => s(e),
    checked: o === e
  }, e)), [s, o]);
  return (0, n.jsx)("div", {
    children: (0, n.jsxs)(l.W1t, {
      "data-menu-migrated": true,
      navId: "sort-and-view",
      "aria-label": a.intl.string(a.t["4jfWTK"]),
      hideScroller: true,
      onClose: t,
      onSelect: t,
      children: [(0, n.jsx)(l.rXV, {
        label: a.intl.string(a.t.mBvLev),
        children: u
      }), (0, n.jsx)(l.rXV, {
        children: (0, n.jsx)(l.Drp, {
          id: "reset-all",
          label: a.intl.string(a.t["3b//lO"]),
          action: d
        })
      })]
    })
  })
}

function u() {
  let e = (0, s.R)(),
    t = (0, c.Ac)(e.sortOption),
    r = i.useRef(null);
  return (0, n.jsx)(l.YNO, {
    targetElementRef: r,
    renderPopout: t => {
      let {
        closePopout: r
      } = t;
      return (0, n.jsx)(d, {
        closePopout: r,
        sortOptionContext: e
      })
    },
    position: "bottom",
    align: "left",
    children: e => {
      var i, s;
      return (0, n.jsx)(o.$nd, (i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), s = s = {
        text: t,
        icon: l.JNJ,
        variant: "secondary",
        buttonRef: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
      }), i))
    }
  })
}