/** Chunk was on 43605 **/
/** chunk id: 681619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk451429 = require("./451429.js");

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
    className: o.tableContainer,
    children: (0, a.jsx)(s.Tvr, {
      className: r,
      innerClassName: o.table,
      sections: h,
      sectionHeight: 40,
      renderSection: e => {
        let {
          section: t
        } = e, l = o.tableHeader;
        return (0, a.jsx)("div", {
          className: l,
          children: p.map(e => {
            var l, r;
            let i = e.cellClassName,
              s = {
                width: "calc(".concat(null != (r = e.cellWidth) ? r : "1fr", " - ").concat(16, "px)")
              };
            return (0, a.jsx)("div", {
              className: i,
              style: s,
              children: null == (l = e.renderHeader) ? true : l.call(e, e, n)
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
          h = i()(o.tableRow, {
            [o.selectedTableRow]: r === u,
            rowClassName: c
          });
        return (0, a.jsx)(s.P3F, {
          className: h,
          onClick: () => null == d ? true : d(l),
          children: p.map(e => {
            var n, r;
            let i = e.cellClassName,
              s = {
                width: "calc(".concat(null != (r = e.cellWidth) ? r : "1fr", " - ").concat(16, "px)"),
                height: "calc(".concat(m, "px - ").concat(16, "px)")
              };
            return (0, a.jsx)("div", {
              className: i,
              style: s,
              children: null == (n = e.render) ? true : n.call(e, l, true, t)
            }, "dev-tools-td-".concat(t, "-").concat(e.key))
          })
        }, "dev-tools-tr-".concat(t))
      }
    })
  })
}