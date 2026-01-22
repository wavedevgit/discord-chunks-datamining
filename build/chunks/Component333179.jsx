/** Chunk was on 80123 **/
/** chunk id: 333179, original params: t,l,e (module,exports,require) **/
require.d(exports, {
  default: () => C
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
  y = S()[0].value;

function C(t) {
  let l, {
      guildId: e,
      user: r,
      location: v,
      userIds: C,
      onBanMultiple: x,
      transitionState: k,
      onClose: M,
      canBulkBan: O = false,
      modReportId: R
    } = t,
    [w, U] = i.useState(null != R ? y : j),
    [D, I] = i.useState(""),
    [P, T] = i.useState(null),
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
    [H, J] = i.useState(false),
    X = (0, d.$9)(e, {
      location: v,
      targetUserId: null == r ? true : r.id,
      targets: C
    }),
    L = i.useCallback(() => {
      let t = null != P ? P : D;
      if (null != x) {
        if (!(null != C && (null == C ? true : C.size) > 0 && O) || E) return;
        if ("" === D.trim() && !E) return void K(true);
        x(e, [...C], w, t)
      } else {
        if (null == r) return;
        c.A.banUser(e, null == r ? true : r.id, w, t, R).then(() => {
          H && null != R && h.A.resolveFlag(R)
        })
      }
      X(d.Nj.BAN), M()
    }, [P, D, x, X, M, C, O, E, e, w, r, R, H]),
    N = i.useCallback(t => {
      U(t)
    }, []),
    W = i.useCallback(t => {
      I(t), K(false), T(null)
    }, []),
    z = i.useCallback(t => {
      T(t), E && K(false)
    }, [E]),
    F = B && !Y && null != R,
    V = [{
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
    Z = (() => {
      if (null != x && null != C) return m.intl.formatToPlainString(m.t.HVJexf, {
        count: null == C ? true : C.size
      });
      if (null == r) return "";
      let t = b.Ay.getName(e, null, r);
      return m.intl.formatToPlainString(null != R ? m.t.WDR8Xd : m.t.jeKpok, {
        username: "@".concat(t)
      })
    })(),
    _ = null == R ? null : m.intl.string(m.t.pQjhIK);
  return (0, n.jsx)(u.Modal, {
    onClose: M,
    transitionState: k,
    title: Z,
    subtitle: null != _ ? _ : true,
    actions: (l = [], B || l.push({
      variant: "secondary",
      text: m.intl.string(m.t["ETE/oC"]),
      onClick: M
    }), l.push({
      variant: "critical-primary",
      text: m.intl.string(m.t["5MBJ5M"]),
      onClick: L
    }), l),
    actionBarInput: F ? (0, n.jsx)(o.Checkbox, {
      checked: H,
      onChange: t => J(t),
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
          value: D,
          options: V.map(t => (function(t) {
            for (var l = 1; l < arguments.length; l++) {
              var e = null != arguments[l] ? arguments[l] : {},
                n = Object.keys(e);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), n.forEach(function(l) {
                var n;
                n = e[l], l in t ? Object.defineProperty(t, l, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[l] = n
              })
            }
            return t
          })({}, t)),
          onChange: W
        }), (0, n.jsx)("div", {
          className: a()(A.Ar, {
            [A.R]: "other" !== D
          }),
          children: (0, n.jsx)(o.fs1, {
            maxLength: p.hlA,
            onChange: z,
            value: null != P ? P : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, n.jsx)(o.l6P, {
        label: m.intl.string(null != R ? m.t.ERSM8H : m.t["8l3W0y"]),
        options: S(),
        value: w,
        onSelectionChange: N,
        selectionMode: "single",
        fullWidth: true
      })]
    })
  })
}