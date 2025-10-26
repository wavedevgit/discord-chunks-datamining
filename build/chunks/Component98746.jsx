/** Chunk was on 43350 **/
/** chunk id: 98746, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk910693 = require("./910693.js"),
  Chunk501517 = require("./501517.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk43617 = require("./43617.js"),
  Chunk768716 = require("./768716.js");

function x() {
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
let C = x()[1].value,
  S = x()[0].value;

function O(t) {
  let {
    guildId: e,
    user: n,
    location: i,
    userIds: p,
    onBanMultiple: O,
    transitionState: y,
    onClose: k,
    canBulkBan: M = false,
    modReportId: R
  } = t, [E, Z] = r.useState(null != R ? S : C), [T, _] = r.useState(""), [P, A] = r.useState(null), {
    isModReportClosed: D,
    isModReport: K
  } = (0, o.cj)([v.Z], () => {
    let t = v.Z.getChannel(R);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [w, F] = r.useState(false), [U, I] = r.useState(false), N = (0, d.sE)(e, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: p
  }), Y = r.useCallback(() => {
    let t = null != P ? P : T;
    if (null != O) {
      if (!(null != p && (null == p ? true : p.size) > 0 && M) || w) return;
      if ("" === T.trim() && !w) return void F(true);
      O(e, [...p], E, t)
    } else {
      if (null == n) return;
      c.Z.banUser(e, null == n ? true : n.id, E, t, R).then(() => {
        U && null != R && g.Z.resolveFlag(R)
      })
    }
    N(d.jQ.BAN), k()
  }, [P, T, O, N, k, p, M, w, e, E, n, R, U]), X = r.useCallback(t => {
    Z(t)
  }, []), H = r.useCallback(t => {
    _(t), F(false), A(null)
  }, []), L = r.useCallback(t => {
    A(t), w && F(false)
  }, [w]), W = K && !D && null != R, q = [{
    name: f.intl.string(f.t.tamLhT),
    value: f.intl.string(f.t.tamLhT)
  }, {
    name: f.intl.string(f.t.UmxjMg),
    value: f.intl.string(f.t.UmxjMg)
  }, {
    name: f.intl.string(f.t.EXY1d8),
    value: f.intl.string(f.t.EXY1d8)
  }, {
    name: f.intl.string(f.t.BcZTKu),
    value: "other"
  }], B = (() => {
    if (null != O && null != p) return f.intl.formatToPlainString(f.t.HVJexf, {
      count: null == p ? true : p.size
    });
    if (null == n) return "";
    let t = h.ZP.getName(e, null, n);
    return f.intl.formatToPlainString(null != R ? f.t.WDR8Xd : f.t.jeKpok, {
      username: "@".concat(t)
    })
  })(), J = null == R ? null : f.intl.string(f.t.pQjhIK);
  return (0, l.jsx)(u.Modal, {
    onClose: k,
    transitionState: y,
    title: B,
    subtitle: null != J ? J : true,
    actions: (() => {
      let t = [];
      return K || t.push({
        variant: "secondary",
        text: f.intl.string(f.t["ETE/oC"]),
        onClick: k
      }), t.push({
        variant: "critical-primary",
        text: f.intl.string(f.t["5MBJ5M"]),
        onClick: Y
      }), t
    })(),
    actionBarInput: W ? (0, l.jsx)(s.Checkbox, {
      checked: U,
      onChange: t => I(t),
      label: f.intl.string(m.default["8yIKem"])
    }) : true,
    children: (0, l.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [w && (0, l.jsx)(s.M14, {
          type: "critical",
          children: f.intl.string(f.t.IrYX1y)
        }), (0, l.jsx)(s.FXm, {
          required: true,
          label: f.intl.string(null != R ? f.t["+KCLVp"] : f.t.w4Ivys),
          value: T,
          options: q.map(t => (function(t) {
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
          className: a()(j.reasonFreeText, {
            [j.hidden]: "other" !== T
          }),
          children: (0, l.jsx)(s.Kx8, {
            maxLength: b.GNZ,
            onChange: L,
            value: null != P ? P : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(s.q4e, {
        label: f.intl.string(null != R ? f.t.ERSM8H : f.t["8l3W0y"]),
        options: x(),
        value: E,
        onChange: X
      })]
    })
  })
}