/** Chunk was on 6850 **/
/** chunk id: 428936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
  Chunk399158 = require("./399158.js");

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

function f(e, t) {
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

function p(e) {
  let {
    guildId: t,
    onPageChange: n
  } = e, [p, h] = l.useTransition(), g = (0, i.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(t), [t]), j = (0, i.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(t), [t]), x = (0, c.$j)(t), v = l.useMemo(() => s.LU.map(e => ({
    id: e.toString(),
    value: e,
    label: Number(e).toLocaleString()
  })), []), O = new Intl.NumberFormat(C.intl.currentLocale).format(g), y = C.intl.formatToPlainString(C.t["RNDnQ/"], {
    count: x ? "..." : O
  }), H = g > j.pageSize || x, w = g > s.LU["0"];
  return (0, r.jsxs)("div", {
    className: m.paginationContainer,
    children: [(0, r.jsx)("div", {
      className: m.pageSizeSelection,
      children: w ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.string(C.t.jNwLu2)
        }), (0, r.jsx)(a.PhF, {
          selectionMode: "single",
          label: y,
          hideLabel: true,
          options: v,
          value: j.pageSize,
          onSelectionChange: e => {
            h(() => {
              (0, u._o)(t, f(b({}, j), {
                pageSize: e
              }))
            })
          }
        }), (0, r.jsx)(o.u, {
          text: C.intl.string(C.t.ZTNur7),
          shouldShow: x,
          children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: m.pageLabel,
            children: y
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
              (0, u._o)(t, f(b({}, j), {
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