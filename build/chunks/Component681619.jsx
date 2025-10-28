/** Chunk was on 96604 **/
/** chunk id: 681619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk451429 = require("./451429.js");

function c(e) {
  let {
    columns: t,
    data: n,
    className: l,
    rowClassName: c,
    onClickRow: d,
    selectedRowKey: u,
    rowHeight: m = 40
  } = e, p = r.useMemo(() => t.map(e => (function(e) {
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
    renderHeader: () => (0, a.jsx)(o.Text, {
      variant: "text-sm/semibold",
      children: e.key
    })
  }, e)), [t]), h = 0 === n.length ? [1] : [n.length];
  return (0, a.jsx)("div", {
    className: s.tableContainer,
    children: (0, a.jsx)(o.Tvr, {
      className: l,
      innerClassName: s.table,
      sections: h,
      sectionHeight: 40,
      renderSection: e => {
        let {
          section: t
        } = e, r = s.tableHeader;
        return (0, a.jsx)("div", {
          className: r,
          children: p.map(e => {
            var r, l;
            let i = e.cellClassName,
              o = {
                width: "calc(".concat(null != (l = e.cellWidth) ? l : "1fr", " - ").concat(16, "px)")
              };
            return (0, a.jsx)("div", {
              className: i,
              style: o,
              children: null == (r = e.renderHeader) ? true : r.call(e, e, n)
            }, "dev-tools-th-".concat(t, "-").concat(e.key))
          })
        }, "dev-tools-header-".concat(t))
      },
      rowHeight: m,
      renderRow: e => {
        let {
          rowIndex: t
        } = e, r = n[t];
        if (null == r) return null;
        let l = r.key,
          h = i()(s.tableRow, {
            [s.selectedTableRow]: l === u,
            rowClassName: c
          });
        return (0, a.jsx)(o.P3F, {
          className: h,
          onClick: () => null == d ? true : d(r),
          children: p.map(e => {
            var n, l;
            let i = e.cellClassName,
              o = {
                width: "calc(".concat(null != (l = e.cellWidth) ? l : "1fr", " - ").concat(16, "px)"),
                height: "calc(".concat(m, "px - ").concat(16, "px)")
              };
            return (0, a.jsx)("div", {
              className: i,
              style: o,
              children: null == (n = e.render) ? true : n.call(e, r, true, t)
            }, "dev-tools-td-".concat(t, "-").concat(e.key))
          })
        }, "dev-tools-tr-".concat(t))
      }
    })
  })
}