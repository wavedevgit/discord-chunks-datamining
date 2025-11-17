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
  Chunk797013 = require("./797013.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk144736 = require("./144736.js");

function h() {
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
let S = h()[1].value,
  m = h()[0].value;

function A(t) {
  let {
    guildId: e,
    user: n,
    location: r,
    userIds: g,
    onBanMultiple: A,
    transitionState: C,
    onClose: O,
    canBulkBan: y = false,
    modReportId: T
  } = t, [j, k] = i.useState(null != T ? m : S), [x, D] = i.useState(""), [I, R] = i.useState(null), {
    isModReportClosed: U,
    isModReport: N
  } = (0, o.cj)([_.Z], () => {
    let t = _.Z.getChannel(T);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [Z, P] = i.useState(false), [Y, F] = i.useState(false), L = (0, d.sE)(e, {
    location: r,
    targetUserId: null == n ? true : n.id,
    targets: g
  }), B = i.useCallback(() => {
    let t = null != I ? I : x;
    if (null != A) {
      if (!(null != g && (null == g ? true : g.size) > 0 && y) || Z) return;
      if ("" === x.trim() && !Z) return void P(true);
      A(e, [...g], j, t)
    } else {
      if (null == n) return;
      c.Z.banUser(e, null == n ? true : n.id, j, t, T).then(() => {
        Y && null != T && b.Z.resolveFlag(T)
      })
    }
    L(d.jQ.BAN), O()
  }, [I, x, A, L, O, g, y, Z, e, j, n, T, Y]), w = i.useCallback(t => {
    k(t)
  }, []), H = i.useCallback(t => {
    D(t), P(false), R(null)
  }, []), K = i.useCallback(t => {
    R(t), Z && P(false)
  }, [Z]), G = N && !U && null != T, V = [{
    name: p.intl.string(p.t.tamLhT),
    value: p.intl.string(p.t.tamLhT)
  }, {
    name: p.intl.string(p.t.UmxjMg),
    value: p.intl.string(p.t.UmxjMg)
  }, {
    name: p.intl.string(p.t.EXY1d8),
    value: p.intl.string(p.t.EXY1d8)
  }, {
    name: p.intl.string(p.t.BcZTKu),
    value: "other"
  }], X = (() => {
    if (null != A && null != g) return p.intl.formatToPlainString(p.t.HVJexf, {
      count: null == g ? true : g.size
    });
    if (null == n) return "";
    let t = v.ZP.getName(e, null, n);
    return p.intl.formatToPlainString(null != T ? p.t.WDR8Xd : p.t.jeKpok, {
      username: "@".concat(t)
    })
  })(), q = null == T ? null : p.intl.string(p.t.pQjhIK);
  return (0, l.jsx)(u.Modal, {
    onClose: O,
    transitionState: C,
    title: X,
    subtitle: null != q ? q : true,
    actions: (() => {
      let t = [];
      return N || t.push({
        variant: "secondary",
        text: p.intl.string(p.t["ETE/oC"]),
        onClick: O
      }), t.push({
        variant: "critical-primary",
        text: p.intl.string(p.t["5MBJ5M"]),
        onClick: B
      }), t
    })(),
    actionBarInput: G ? (0, l.jsx)(s.Checkbox, {
      checked: Y,
      onChange: t => F(t),
      label: p.intl.string(E.default["8yIKem"])
    }) : true,
    children: (0, l.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [Z && (0, l.jsx)(s.M14, {
          type: "critical",
          children: p.intl.string(p.t.IrYX1y)
        }), (0, l.jsx)(s.FXm, {
          required: true,
          label: p.intl.string(null != T ? p.t["+KCLVp"] : p.t.w4Ivys),
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
          className: a()(M.reasonFreeText, {
            [M.hidden]: "other" !== x
          }),
          children: (0, l.jsx)(s.Kx8, {
            maxLength: f.GNZ,
            onChange: K,
            value: null != I ? I : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(s.q4e, {
        label: p.intl.string(null != T ? p.t.ERSM8H : p.t["8l3W0y"]),
        options: h(),
        value: j,
        onChange: w
      })]
    })
  })
}