/** Chunk was on 6850 **/
/** chunk id: 428936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk823596 = require("./823596.js"),
  Chunk201070 = require("./201070.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk671408 = require("./671408.js");

function b(e) {
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
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    guildId: t,
    onPageChange: n
  } = e, [f, h] = l.useTransition(), g = (0, i.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(t), [t]), j = (0, i.cj)([u.Z], () => u.Z.getPaginationStateByGuildId(t), [t]), x = (0, c.$j)(t), v = l.useMemo(() => s.LU.map(e => ({
    value: e,
    label: Number(e).toLocaleString()
  })), []), y = new Intl.NumberFormat(C.intl.currentLocale).format(g), O = C.intl.formatToPlainString(C.t["RNDnQ/"], {
    count: x ? "..." : y
  }), H = g > j.pageSize || x, _ = g > s.LU["0"];
  return (0, r.jsxs)("div", {
    className: m.paginationContainer,
    children: [(0, r.jsx)("div", {
      className: m.pageSizeSelection,
      children: _ ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.string(C.t.jNwLu2)
        }), (0, r.jsx)(a.PhF, {
          "aria-label": O,
          className: m.pageSizeInput,
          options: v,
          isSelected: e => e === j.pageSize,
          select: e => {
            h(() => {
              (0, d._o)(t, p(b({}, j), {
                pageSize: e
              }))
            })
          },
          serialize: e => "".concat(e),
          popoutPosition: "top",
          popoutWidth: 72
        }), (0, r.jsx)(o.u, {
          text: C.intl.string(C.t.ZTNur7),
          shouldShow: x,
          children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: m.pageLabel,
            children: O
          })
        })]
      }) : (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: C.intl.format(C.t.GZpwME, {
          count: g
        })
      })
    }), (0, r.jsx)("div", {
      className: m.pagination,
      children: H && (0, r.jsx)(a.DsT, {
        className: m.paginationInput,
        totalCount: g,
        pageSize: j.pageSize,
        disablePaginationGap: true,
        hideMaxPage: true,
        currentPage: j.currentPage,
        onPageChange: e => {
          null == n || n(e), requestIdleCallback(() => {
            h(() => {
              (0, d._o)(t, p(b({}, j), {
                currentPage: e
              }))
            })
          })
        },
        maxVisiblePages: s.hW
      })
    })]
  })
}