/** Chunk was on 43350 **/
/** chunk id: 98746, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => k
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
  Chunk304726 = require("./304726.js"),
  Chunk272567 = require("./272567.js");

function x() {
  return [{
    value: 0,
    label: Chunk388032.intl.string(Chunk388032.t["4obaMT"])
  }, {
    value: +Chunk70956.Z.Seconds.HOUR,
    label: Chunk388032.intl.string(Chunk388032.t.RKpitb)
  }, {
    value: 6 * Chunk70956.Z.Seconds.HOUR,
    label: Chunk388032.intl.string(Chunk388032.t["8WfJZ2"])
  }, {
    value: 12 * Chunk70956.Z.Seconds.HOUR,
    label: Chunk388032.intl.string(Chunk388032.t.p1up7u)
  }, {
    value: +Chunk70956.Z.Seconds.DAY,
    label: Chunk388032.intl.string(Chunk388032.t.XuVkkJ)
  }, {
    value: 3 * Chunk70956.Z.Seconds.DAY,
    label: Chunk388032.intl.string(Chunk388032.t.gMcDS0)
  }, {
    value: 7 * Chunk70956.Z.Seconds.DAY,
    label: Chunk388032.intl.string(Chunk388032.t.FA7IUl)
  }]
}
let C = x()[1].value,
  S = x()[0].value;

function k(t) {
  let {
    guildId: e,
    user: n,
    location: i,
    userIds: b,
    onBanMultiple: k,
    transitionState: Z,
    onClose: y,
    canBulkBan: O = false,
    modReportId: M
  } = t, [K, R] = r.useState(null != M ? S : C), [T, w] = r.useState(""), [P, U] = r.useState(null), {
    isModReportClosed: Y,
    isModReport: _
  } = (0, s.cj)([v.Z], () => {
    let t = v.Z.getChannel(M);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [E, F] = r.useState(false), [I, X] = r.useState(false), A = (0, d.sE)(e, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: b
  }), D = r.useCallback(() => {
    let t = null != P ? P : T;
    if (null != k) {
      if (!(null != b && (null == b ? true : b.size) > 0 && O) || E) return;
      if ("" === T.trim() && !E) return void F(true);
      k(e, [...b], K, t)
    } else {
      if (null == n) return;
      c.Z.banUser(e, null == n ? true : n.id, K, t, M).then(() => {
        I && null != M && g.Z.resolveFlag(M)
      })
    }
    A(d.jQ.BAN), y()
  }, [P, T, k, A, y, b, O, E, e, K, n, M, I]), N = r.useCallback(t => {
    R(t)
  }, []), q = r.useCallback(t => {
    w(t), F(false), U(null)
  }, []), J = r.useCallback(t => {
    U(t), E && F(false)
  }, [E]), B = _ && !Y && null != M, H = [{
    name: f.intl.string(f.t.tamLhY),
    value: f.intl.string(f.t.tamLhY)
  }, {
    name: f.intl.string(f.t.UmxjMj),
    value: f.intl.string(f.t.UmxjMj)
  }, {
    name: f.intl.string(f.t.EXY1d3),
    value: f.intl.string(f.t.EXY1d3)
  }, {
    name: f.intl.string(f.t.BcZTKi),
    value: "other"
  }], L = (() => {
    if (null != k && null != b) return f.intl.formatToPlainString(f.t.HVJexc, {
      count: null == b ? true : b.size
    });
    if (null == n) return "";
    let t = h.ZP.getName(e, null, n);
    return f.intl.formatToPlainString(null != M ? f.t.WDR8XV : f.t.jeKpoq, {
      username: "@".concat(t)
    })
  })(), V = null == M ? null : f.intl.string(f.t.pQjhIC);
  return (0, l.jsx)(u.Modal, {
    onClose: y,
    transitionState: Z,
    title: L,
    subtitle: null != V ? V : true,
    actions: (() => {
      let t = [];
      return _ || t.push({
        variant: "secondary",
        text: f.intl.string(f.t["ETE/oK"]),
        onClick: y
      }), t.push({
        variant: "critical-primary",
        text: f.intl.string(f.t["5MBJ5O"]),
        onClick: D
      }), t
    })(),
    actionBarInput: B ? (0, l.jsx)(o.XZJ, {
      checked: I,
      onChange: t => X(t),
      label: f.intl.string(m.default["8yIKen"])
    }) : true,
    children: (0, l.jsxs)(o.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [E && (0, l.jsx)(o.kzN, {
          className: j.error,
          children: f.intl.string(f.t.IrYX19)
        }), (0, l.jsx)(o.FXm, {
          required: true,
          label: f.intl.string(null != M ? f.t["+KCLVl"] : f.t.w4Ivys),
          value: T,
          options: H.map(t => (function(t) {
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
          onChange: q
        }), (0, l.jsx)("div", {
          className: a()(j.reasonFreeText, {
            [j.hidden]: "other" !== T
          }),
          children: (0, l.jsx)(o.Kx8, {
            maxLength: p.GNZ,
            onChange: J,
            value: null != P ? P : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(o.q4e, {
        label: f.intl.string(null != M ? f.t.ERSM8P : f.t["8l3W09"]),
        options: x(),
        value: K,
        onChange: N
      })]
    })
  })
}