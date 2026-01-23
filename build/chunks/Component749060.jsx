/** Chunk was on 35894 **/
/** chunk id: 749060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk233693 = require("./233693.js"),
  Chunk343969 = require("./343969.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk656930 = require("./656930.js");

function p(e) {
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

function b(e, t) {
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
  } = e, [f, j] = l.useTransition(), g = (0, i.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(t), [t]), h = (0, i.cf)([u.A], () => u.A.getPaginationStateByGuildId(t), [t]), x = (0, c.Ms)(t), y = l.useMemo(() => s.MO.map(e => ({
    id: e.toString(),
    value: e,
    label: Number(e).toLocaleString()
  })), []), O = new Intl.NumberFormat(C.intl.currentLocale).format(g), v = C.intl.formatToPlainString(C.t["RNDnQ/"], {
    count: x ? "..." : O
  }), _ = g > h.pageSize || x, H = g > s.MO["0"];
  return (0, r.jsxs)("div", {
    className: m.Ej,
    children: [(0, r.jsx)("div", {
      className: m.PO,
      children: H ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.string(C.t.jNwLu2)
        }), (0, r.jsx)(a.l6P, {
          selectionMode: "single",
          label: v,
          hideLabel: true,
          options: y,
          value: h.pageSize,
          onSelectionChange: e => {
            j(() => {
              (0, d.Cw)(t, b(p({}, h), {
                pageSize: e
              }))
            })
          }
        }), (0, r.jsx)(o.m, {
          text: C.intl.string(C.t.ZTNur7),
          shouldShow: x,
          children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: m.Qh,
            children: v
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
      className: m.X$,
      children: _ && (0, r.jsx)(a.mgR, {
        className: m.JV,
        totalCount: g,
        pageSize: h.pageSize,
        disablePaginationGap: true,
        hideMaxPage: true,
        currentPage: h.currentPage,
        onPageChange: e => {
          null == n || n(e), requestIdleCallback(() => {
            j(() => {
              (0, d.Cw)(t, b(p({}, h), {
                currentPage: e
              }))
            })
          })
        },
        maxVisiblePages: s.NB
      })
    })]
  })
}