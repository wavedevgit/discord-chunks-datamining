/** Chunk was on 65599 **/
/** chunk id: 303054, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk661251 = require("./661251.js");

function c(e) {
  let {
    columns: t,
    data: n,
    className: r,
    rowClassName: c,
    onClickRow: d,
    selectedRowKey: u,
    rowHeight: m = 40
  } = e, p = l.useMemo(() => t.map(e => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  })({
    renderHeader: () => (0, a.jsx)(s.Text, {
      variant: "text-sm/semibold",
      children: e.key
    })
  }, e)), [t]), h = 0 === n.length ? [1] : [n.length];
  return (0, a.jsx)("div", {
    className: o.CZ,
    children: (0, a.jsx)(s.OZj, {
      className: r,
      innerClassName: o.tp,
      sections: h,
      sectionHeight: 40,
      renderSection: e => {
        let {
          section: t
        } = e, l = o.ZR;
        return (0, a.jsx)("div", {
          className: l,
          children: p.map(e => {
            var l, r;
            let i = e.cellClassName,
              s = {
                width: "calc(".concat(null != (l = e.cellWidth) ? l : "1fr", " - ").concat(16, "px)")
              };
            return (0, a.jsx)("div", {
              className: i,
              style: s,
              children: null == (r = e.renderHeader) ? true : r.call(e, e, n)
            }, "dev-tools-th-".concat(t, "-").concat(e.key))
          })
        }, "dev-tools-header-".concat(t))
      },
      rowHeight: m,
      renderRow: e => {
        let {
          rowIndex: t
        } = e, l = n[t];
        if (null == l) return null;
        let r = l.key,
          h = i()(o.jD, {
            [o.wD]: r === u,
            rowClassName: c
          });
        return (0, a.jsx)(s.DUT, {
          className: h,
          onClick: () => null == d ? true : d(l),
          children: p.map(e => {
            var n, r;
            let i = e.cellClassName,
              s = {
                width: "calc(".concat(null != (n = e.cellWidth) ? n : "1fr", " - ").concat(16, "px)"),
                height: "calc(".concat(m, "px - ").concat(16, "px)")
              };
            return (0, a.jsx)("div", {
              className: i,
              style: s,
              children: null == (r = e.render) ? true : r.call(e, l, true, t)
            }, "dev-tools-td-".concat(t, "-").concat(e.key))
          })
        }, "dev-tools-tr-".concat(t))
      }
    })
  })
}