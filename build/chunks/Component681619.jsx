/** Chunk was on 93886 **/
/** chunk id: 681619, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk451429 = require("./451429.js");

function c(e) {
  let {
    columns: t,
    data: a,
    className: l,
    rowClassName: c,
    onClickRow: d,
    selectedRowKey: u,
    rowHeight: m = 40
  } = e, x = r.useMemo(() => t.map(e => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = a[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  })({
    renderHeader: () => (0, n.jsx)(s.Text, {
      variant: "text-sm/semibold",
      children: e.key
    })
  }, e)), [t]), h = [a.length];
  return (0, n.jsx)("div", {
    className: o.tableContainer,
    children: (0, n.jsx)(s.Tvr, {
      className: l,
      innerClassName: o.table,
      sections: h,
      sectionHeight: 40,
      renderSection: e => {
        let {
          section: t
        } = e, r = o.tableHeader;
        return (0, n.jsx)("div", {
          className: r,
          children: x.map(e => {
            var r, l;
            let i = e.cellClassName,
              s = {
                width: "calc(".concat(null != (l = e.cellWidth) ? l : "1fr", " - ").concat(16, "px)")
              };
            return (0, n.jsx)("div", {
              className: i,
              style: s,
              children: null == (r = e.renderHeader) ? true : r.call(e, e, a)
            }, "dev-tools-th-".concat(t, "-").concat(e.key))
          })
        }, "dev-tools-header-".concat(t))
      },
      rowHeight: m,
      renderRow: e => {
        let {
          rowIndex: t
        } = e, r = a[t], l = r.key, h = i()(o.tableRow, {
          [o.selectedTableRow]: l === u,
          rowClassName: c
        });
        return (0, n.jsx)(s.P3F, {
          className: h,
          onClick: () => null == d ? true : d(r),
          children: x.map(e => {
            var a, l;
            let i = e.cellClassName,
              s = {
                width: "calc(".concat(null != (l = e.cellWidth) ? l : "1fr", " - ").concat(16, "px)"),
                height: "calc(".concat(m, "px - ").concat(16, "px)")
              };
            return (0, n.jsx)("div", {
              className: i,
              style: s,
              children: null == (a = e.render) ? true : a.call(e, r, true, t)
            }, "dev-tools-td-".concat(t, "-").concat(e.key))
          })
        }, "dev-tools-tr-".concat(t))
      }
    })
  })
}