/** Chunk was on 48192 **/
/** chunk id: 497880, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk910693 = require("./910693.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk5192 = require("./5192.js"),
  Chunk501517 = require("./501517.js"),
  Chunk981631 = require("./981631.js"),
  Chunk342153 = require("./342153.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk144736 = require("./144736.js");

function S() {
  return [{
    value: 0,
    label: Chunk388032.intl.string(Chunk388032.t["4obaMS"])
  }, {
    value: +Chunk70956.Z.Seconds.HOUR,
    label: Chunk388032.intl.string(Chunk388032.t.RKpitY)
  }, {
    value: 6 * Chunk70956.Z.Seconds.HOUR,
    label: Chunk388032.intl.string(Chunk388032.t["8WfJZ8"])
  }, {
    value: 12 * Chunk70956.Z.Seconds.HOUR,
    label: Chunk388032.intl.string(Chunk388032.t.p1up7u)
  }, {
    value: +Chunk70956.Z.Seconds.DAY,
    label: Chunk388032.intl.string(Chunk388032.t.XuVkkD)
  }, {
    value: 3 * Chunk70956.Z.Seconds.DAY,
    label: Chunk388032.intl.string(Chunk388032.t["gMcDS+"])
  }, {
    value: 7 * Chunk70956.Z.Seconds.DAY,
    label: Chunk388032.intl.string(Chunk388032.t.FA7IUk)
  }]
}
let m = S()[1].value,
  A = S()[0].value;

function C(t) {
  let {
    guildId: e,
    user: n,
    location: r,
    userIds: v,
    onBanMultiple: C,
    transitionState: O,
    onClose: y,
    canBulkBan: T = false,
    modReportId: j
  } = t, [k, x] = i.useState(null != j ? A : m), [D, I] = i.useState(""), [R, U] = i.useState(null), {
    isModReportClosed: N,
    isModReport: Z
  } = (0, o.cj)([g.Z], () => {
    let t = g.Z.getChannel(j);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [P, Y] = i.useState(false), [F, L] = i.useState(false), B = (0, _.sE)(e, {
    location: r,
    targetUserId: null == n ? true : n.id,
    targets: v
  }), w = i.useCallback(() => {
    let t = null != R ? R : D;
    if (null != C) {
      if (!(null != v && (null == v ? true : v.size) > 0 && T) || P) return;
      if ("" === D.trim() && !P) return void Y(true);
      C(e, [...v], k, t)
    } else {
      if (null == n) return;
      d.Z.banUser(e, null == n ? true : n.id, k, t, j).then(() => {
        F && null != j && f.Z.resolveFlag(j)
      })
    }
    B(_.jQ.BAN), y()
  }, [R, D, C, B, y, v, T, P, e, k, n, j, F]), H = i.useCallback(t => {
    x(t)
  }, []), K = i.useCallback(t => {
    I(t), Y(false), U(null)
  }, []), G = i.useCallback(t => {
    U(t), P && Y(false)
  }, [P]), V = Z && !N && null != j, X = [{
    name: M.intl.string(M.t.tamLhT),
    value: M.intl.string(M.t.tamLhT)
  }, {
    name: M.intl.string(M.t.UmxjMg),
    value: M.intl.string(M.t.UmxjMg)
  }, {
    name: M.intl.string(M.t.EXY1d8),
    value: M.intl.string(M.t.EXY1d8)
  }, {
    name: M.intl.string(M.t.BcZTKu),
    value: "other"
  }], W = (() => {
    if (null != C && null != v) return M.intl.formatToPlainString(M.t.HVJexf, {
      count: null == v ? true : v.size
    });
    if (null == n) return "";
    let t = b.ZP.getName(e, null, n);
    return M.intl.formatToPlainString(null != j ? M.t.WDR8Xd : M.t.jeKpok, {
      username: "@".concat(t)
    })
  })(), q = null == j ? null : M.intl.string(M.t.pQjhIK);
  return (0, l.jsx)(u.Modal, {
    onClose: y,
    transitionState: O,
    title: W,
    subtitle: null != q ? q : true,
    actions: (() => {
      let t = [];
      return Z || t.push({
        variant: "secondary",
        text: M.intl.string(M.t["ETE/oC"]),
        onClick: y
      }), t.push({
        variant: "critical-primary",
        text: M.intl.string(M.t["5MBJ5M"]),
        onClick: w
      }), t
    })(),
    actionBarInput: V ? (0, l.jsx)(c.Checkbox, {
      checked: F,
      onChange: t => L(t),
      label: M.intl.string(p.default["8yIKem"])
    }) : true,
    children: (0, l.jsxs)(c.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [P && (0, l.jsx)(c.M14, {
          type: "critical",
          children: M.intl.string(M.t.IrYX1y)
        }), (0, l.jsx)(c.FXm, {
          required: true,
          label: M.intl.string(null != j ? M.t["+KCLVp"] : M.t.w4Ivys),
          value: D,
          options: X.map(t => (function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))), l.forEach(function(e) {
                var l;
                l = n[e], e in t ? Object.defineProperty(t, e, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = l
              })
            }
            return t
          })({}, t)),
          onChange: K
        }), (0, l.jsx)("div", {
          className: a()(h.reasonFreeText, {
            [h.hidden]: "other" !== D
          }),
          children: (0, l.jsx)(c.Kx8, {
            maxLength: E.GNZ,
            onChange: G,
            value: null != R ? R : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(s.y6, {
        label: M.intl.string(null != j ? M.t.ERSM8H : M.t["8l3W0y"]),
        options: S(),
        value: k,
        onChange: H
      })]
    })
  })
}