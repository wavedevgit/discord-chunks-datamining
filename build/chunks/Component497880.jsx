/** Chunk was on 48192 **/
/** chunk id: 497880, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk910693 = require("./910693.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk5192 = require("./5192.js"),
  Chunk501517 = require("./501517.js"),
  Chunk981631 = require("./981631.js"),
  Chunk792389 = require("./792389.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577651 = require("./577651.js");

function M() {
  return [{
    id: "none",
    value: 0,
    label: h.intl.string(h.t["4obaMS"])
  }, {
    id: "1hour",
    value: +_.Z.Seconds.HOUR,
    label: h.intl.string(h.t.RKpitY)
  }, {
    id: "6hours",
    value: 6 * _.Z.Seconds.HOUR,
    label: h.intl.string(h.t["8WfJZ8"])
  }, {
    id: "12hours",
    value: 12 * _.Z.Seconds.HOUR,
    label: h.intl.string(h.t.p1up7u)
  }, {
    id: "1day",
    value: +_.Z.Seconds.DAY,
    label: h.intl.string(h.t.XuVkkD)
  }, {
    id: "3days",
    value: 3 * _.Z.Seconds.DAY,
    label: h.intl.string(h.t["gMcDS+"])
  }, {
    id: "7days",
    value: 7 * _.Z.Seconds.DAY,
    label: h.intl.string(h.t.FA7IUk)
  }]
}
let S = M()[1].value,
  m = M()[0].value;

function A(t) {
  let {
    guildId: e,
    user: n,
    location: r,
    userIds: _,
    onBanMultiple: A,
    transitionState: C,
    onClose: O,
    canBulkBan: y = false,
    modReportId: T
  } = t, [j, k] = i.useState(null != T ? m : S), [x, D] = i.useState(""), [I, R] = i.useState(null), {
    isModReportClosed: U,
    isModReport: N
  } = (0, o.cj)([g.Z], () => {
    let t = g.Z.getChannel(T);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [Z, P] = i.useState(false), [F, Y] = i.useState(false), L = (0, d.sE)(e, {
    location: r,
    targetUserId: null == n ? true : n.id,
    targets: _
  }), B = i.useCallback(() => {
    let t = null != I ? I : x;
    if (null != A) {
      if (!(null != _ && (null == _ ? true : _.size) > 0 && y) || Z) return;
      if ("" === x.trim() && !Z) return void P(true);
      A(e, [..._], j, t)
    } else {
      if (null == n) return;
      c.Z.banUser(e, null == n ? true : n.id, j, t, T).then(() => {
        F && null != T && b.Z.resolveFlag(T)
      })
    }
    L(d.jQ.BAN), O()
  }, [I, x, A, L, O, _, y, Z, e, j, n, T, F]), w = i.useCallback(t => {
    k(t)
  }, []), H = i.useCallback(t => {
    D(t), P(false), R(null)
  }, []), K = i.useCallback(t => {
    R(t), Z && P(false)
  }, [Z]), G = N && !U && null != T, V = [{
    name: h.intl.string(h.t.tamLhT),
    value: h.intl.string(h.t.tamLhT)
  }, {
    name: h.intl.string(h.t.UmxjMg),
    value: h.intl.string(h.t.UmxjMg)
  }, {
    name: h.intl.string(h.t.EXY1d8),
    value: h.intl.string(h.t.EXY1d8)
  }, {
    name: h.intl.string(h.t.BcZTKu),
    value: "other"
  }], W = (() => {
    if (null != A && null != _) return h.intl.formatToPlainString(h.t.HVJexf, {
      count: null == _ ? true : _.size
    });
    if (null == n) return "";
    let t = v.ZP.getName(e, null, n);
    return h.intl.formatToPlainString(null != T ? h.t.WDR8Xd : h.t.jeKpok, {
      username: "@".concat(t)
    })
  })(), X = null == T ? null : h.intl.string(h.t.pQjhIK);
  return (0, l.jsx)(u.Modal, {
    onClose: O,
    transitionState: C,
    title: W,
    subtitle: null != X ? X : true,
    actions: (() => {
      let t = [];
      return N || t.push({
        variant: "secondary",
        text: h.intl.string(h.t["ETE/oC"]),
        onClick: O
      }), t.push({
        variant: "critical-primary",
        text: h.intl.string(h.t["5MBJ5M"]),
        onClick: B
      }), t
    })(),
    actionBarInput: G ? (0, l.jsx)(s.Checkbox, {
      checked: F,
      onChange: t => Y(t),
      label: h.intl.string(E.default["8yIKem"])
    }) : true,
    children: (0, l.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [Z && (0, l.jsx)(s.M14, {
          type: "critical",
          children: h.intl.string(h.t.IrYX1y)
        }), (0, l.jsx)(s.FXm, {
          required: true,
          label: h.intl.string(null != T ? h.t["+KCLVp"] : h.t.w4Ivys),
          value: x,
          options: V.map(t => (function(t) {
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
          onChange: H
        }), (0, l.jsx)("div", {
          className: a()(p.reasonFreeText, {
            [p.hidden]: "other" !== x
          }),
          children: (0, l.jsx)(s.Kx8, {
            maxLength: f.GNZ,
            onChange: K,
            value: null != I ? I : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(s.PhF, {
        label: h.intl.string(null != T ? h.t.ERSM8H : h.t["8l3W0y"]),
        options: M(),
        value: j,
        onSelectionChange: w,
        selectionMode: "single",
        fullWidth: true
      })]
    })
  })
}