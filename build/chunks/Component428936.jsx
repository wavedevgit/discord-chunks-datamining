/** Chunk was on 6850 **/
/** chunk id: 428936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk823596 = require("./823596.js"),
  Chunk201070 = require("./201070.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk399158 = require("./399158.js");

function f(e) {
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

function h(e) {
  let {
    guildId: t,
    onPageChange: n
  } = e, [h, g] = l.useTransition(), j = (0, i.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(t), [t]), x = (0, i.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(t), [t]), v = (0, u.$j)(t), y = l.useMemo(() => c.LU.map(e => ({
    value: e,
    label: Number(e).toLocaleString()
  })), []), O = new Intl.NumberFormat(m.intl.currentLocale).format(j), H = m.intl.formatToPlainString(m.t["RNDnQ/"], {
    count: v ? "..." : O
  }), w = j > x.pageSize || v, S = j > c.LU["0"];
  return (0, r.jsxs)("div", {
    className: b.paginationContainer,
    children: [(0, r.jsx)("div", {
      className: b.pageSizeSelection,
      children: S ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: m.intl.string(m.t.jNwLu2)
        }), (0, r.jsx)(o.B6, {
          "aria-label": H,
          className: b.pageSizeInput,
          options: y,
          isSelected: e => e === x.pageSize,
          select: e => {
            g(() => {
              (0, C._o)(t, p(f({}, x), {
                pageSize: e
              }))
            })
          },
          serialize: e => "".concat(e),
          popoutPosition: "top",
          popoutWidth: 72
        }), (0, r.jsx)(a.u, {
          text: m.intl.string(m.t.ZTNur7),
          shouldShow: v,
          children: (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: b.pageLabel,
            children: H
          })
        })]
      }) : (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: m.intl.format(m.t.GZpwME, {
          count: j
        })
      })
    }), (0, r.jsx)("div", {
      className: b.pagination,
      children: w && (0, r.jsx)(s.DsT, {
        className: b.paginationInput,
        totalCount: j,
        pageSize: x.pageSize,
        disablePaginationGap: true,
        hideMaxPage: true,
        currentPage: x.currentPage,
        onPageChange: e => {
          null == n || n(e), requestIdleCallback(() => {
            g(() => {
              (0, C._o)(t, p(f({}, x), {
                currentPage: e
              }))
            })
          })
        },
        maxVisiblePages: c.hW
      })
    })]
  })
}