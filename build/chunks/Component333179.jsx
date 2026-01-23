/** Chunk was on 80123 **/
/** chunk id: 333179, original params: t,e,l (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./896048.js"), require("./733351.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk504049 = require("./504049.js"),
  Chunk734057 = require("./734057.js"),
  Chunk927813 = require("./927813.js"),
  Chunk562153 = require("./562153.js"),
  Chunk226698 = require("./226698.js"),
  Chunk652215 = require("./652215.js"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk533503 = require("./533503.js");

function S() {
  return [{
    id: "none",
    value: 0,
    label: m.intl.string(m.t["4obaMS"])
  }, {
    id: "1hour",
    value: +v.A.Seconds.HOUR,
    label: m.intl.string(m.t.RKpitY)
  }, {
    id: "6hours",
    value: 6 * v.A.Seconds.HOUR,
    label: m.intl.string(m.t["8WfJZ8"])
  }, {
    id: "12hours",
    value: 12 * v.A.Seconds.HOUR,
    label: m.intl.string(m.t.p1up7u)
  }, {
    id: "1day",
    value: +v.A.Seconds.DAY,
    label: m.intl.string(m.t.XuVkkD)
  }, {
    id: "3days",
    value: 3 * v.A.Seconds.DAY,
    label: m.intl.string(m.t["gMcDS+"])
  }, {
    id: "7days",
    value: 7 * v.A.Seconds.DAY,
    label: m.intl.string(m.t.FA7IUk)
  }]
}
let j = S()[1].value,
  x = S()[0].value;

function y(t) {
  let e, {
      guildId: l,
      user: r,
      location: v,
      userIds: y,
      onBanMultiple: C,
      transitionState: k,
      onClose: M,
      canBulkBan: O = false,
      modReportId: R
    } = t,
    [w, T] = i.useState(null != R ? x : j),
    [U, D] = i.useState(""),
    [I, P] = i.useState(null),
    {
      isModReportClosed: Y,
      isModReport: B
    } = (0, s.cf)([g.A], () => {
      let t = g.A.getChannel(R);
      return {
        isModReportClosed: null == t ? true : t.isArchivedThread(),
        isModReport: null == t ? true : t.isModeratorReportChannel()
      }
    }),
    [E, K] = i.useState(false),
    [_, H] = i.useState(false),
    J = (0, d.$9)(l, {
      location: v,
      targetUserId: null == r ? true : r.id,
      targets: y
    }),
    X = i.useCallback(() => {
      let t = null != I ? I : U;
      if (null != C) {
        if (!(null != y && (null == y ? true : y.size) > 0 && O) || E) return;
        if ("" === U.trim() && !E) return void K(true);
        C(l, [...y], w, t)
      } else {
        if (null == r) return;
        c.A.banUser(l, null == r ? true : r.id, w, t, R).then(() => {
          _ && null != R && p.A.resolveFlag(R)
        })
      }
      J(d.Nj.BAN), M()
    }, [I, U, C, J, M, y, O, E, l, w, r, R, _]),
    F = i.useCallback(t => {
      T(t)
    }, []),
    L = i.useCallback(t => {
      D(t), K(false), P(null)
    }, []),
    N = i.useCallback(t => {
      P(t), E && K(false)
    }, [E]),
    W = B && !Y && null != R,
    z = [{
      name: m.intl.string(m.t.tamLhT),
      value: m.intl.string(m.t.tamLhT)
    }, {
      name: m.intl.string(m.t.UmxjMg),
      value: m.intl.string(m.t.UmxjMg)
    }, {
      name: m.intl.string(m.t.EXY1d8),
      value: m.intl.string(m.t.EXY1d8)
    }, {
      name: m.intl.string(m.t.BcZTKu),
      value: "other"
    }],
    V = (() => {
      if (null != C && null != y) return m.intl.formatToPlainString(m.t.HVJexf, {
        count: null == y ? true : y.size
      });
      if (null == r) return "";
      let t = h.Ay.getName(l, null, r);
      return m.intl.formatToPlainString(null != R ? m.t.WDR8Xd : m.t.jeKpok, {
        username: "@".concat(t)
      })
    })(),
    Z = null == R ? null : m.intl.string(m.t.pQjhIK);
  return (0, n.jsx)(u.Modal, {
    onClose: M,
    transitionState: k,
    title: V,
    subtitle: null != Z ? Z : true,
    actions: (e = [], B || e.push({
      variant: "secondary",
      text: m.intl.string(m.t["ETE/oC"]),
      onClick: M
    }), e.push({
      variant: "critical-primary",
      text: m.intl.string(m.t["5MBJ5M"]),
      onClick: X
    }), e),
    actionBarInput: W ? (0, n.jsx)(o.Checkbox, {
      checked: _,
      onChange: t => H(t),
      label: m.intl.string(f.default["8yIKem"])
    }) : true,
    children: (0, n.jsxs)(o.BJc, {
      direction: "vertical",
      gap: 24,
      children: [(0, n.jsxs)(o.BJc, {
        direction: "vertical",
        gap: 8,
        children: [E && (0, n.jsx)(o.wx6, {
          type: "critical",
          children: m.intl.string(m.t.IrYX1y)
        }), (0, n.jsx)(o.z6M, {
          required: true,
          label: m.intl.string(null != R ? m.t["+KCLVp"] : m.t.w4Ivys),
          value: U,
          options: z.map(t => (function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var l = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(l);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(t) {
                return Object.getOwnPropertyDescriptor(l, t).enumerable
              }))), n.forEach(function(e) {
                var n;
                n = l[e], e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = n
              })
            }
            return t
          })({}, t)),
          onChange: L
        }), (0, n.jsx)("div", {
          className: a()(A.Ar, {
            [A.R]: "other" !== U
          }),
          children: (0, n.jsx)(o.fs1, {
            maxLength: b.hlA,
            onChange: N,
            value: null != I ? I : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, n.jsx)(o.l6P, {
        label: m.intl.string(null != R ? m.t.ERSM8H : m.t["8l3W0y"]),
        options: S(),
        value: w,
        onSelectionChange: F,
        selectionMode: "single",
        fullWidth: true
      })]
    })
  })
}