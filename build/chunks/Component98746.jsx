/** Chunk was on 43350 **/
/** chunk id: 98746, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => S
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
  Chunk764295 = require("./764295.js"),
  Chunk768716 = require("./768716.js");

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
  O = x()[0].value;

function S(t) {
  let {
    guildId: e,
    user: n,
    location: i,
    userIds: h,
    onBanMultiple: S,
    transitionState: R,
    onClose: y,
    canBulkBan: M = false,
    modReportId: k
  } = t, [E, Z] = r.useState(null != k ? O : C), [T, P] = r.useState(""), [_, A] = r.useState(null), {
    isModReportClosed: K,
    isModReport: w
  } = (0, o.cj)([v.Z], () => {
    let t = v.Z.getChannel(k);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [D, F] = r.useState(false), [U, Y] = r.useState(false), I = (0, d.sE)(e, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: h
  }), N = r.useCallback(() => {
    let t = null != _ ? _ : T;
    if (null != S) {
      if (!(null != h && (null == h ? true : h.size) > 0 && M) || D) return;
      if ("" === T.trim() && !D) return void F(true);
      S(e, [...h], E, t)
    } else {
      if (null == n) return;
      c.Z.banUser(e, null == n ? true : n.id, E, t, k).then(() => {
        U && null != k && g.Z.resolveFlag(k)
      })
    }
    I(d.jQ.BAN), y()
  }, [_, T, S, I, y, h, M, D, e, E, n, k, U]), X = r.useCallback(t => {
    Z(t)
  }, []), q = r.useCallback(t => {
    P(t), F(false), A(null)
  }, []), L = r.useCallback(t => {
    A(t), D && F(false)
  }, [D]), W = w && !K && null != k, B = [{
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
  }], H = (() => {
    if (null != S && null != h) return f.intl.formatToPlainString(f.t.HVJexc, {
      count: null == h ? true : h.size
    });
    if (null == n) return "";
    let t = p.ZP.getName(e, null, n);
    return f.intl.formatToPlainString(null != k ? f.t.WDR8XV : f.t.jeKpoq, {
      username: "@".concat(t)
    })
  })(), J = null == k ? null : f.intl.string(f.t.pQjhIC);
  return (0, l.jsx)(u.Modal, {
    onClose: y,
    transitionState: R,
    title: H,
    subtitle: null != J ? J : true,
    actions: (() => {
      let t = [];
      return w || t.push({
        variant: "secondary",
        text: f.intl.string(f.t["ETE/oK"]),
        onClick: y
      }), t.push({
        variant: "critical-primary",
        text: f.intl.string(f.t["5MBJ5O"]),
        onClick: N
      }), t
    })(),
    actionBarInput: W ? (0, l.jsx)(s.Checkbox, {
      checked: U,
      onChange: t => Y(t),
      label: f.intl.string(j.default["8yIKen"])
    }) : true,
    children: (0, l.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [D && (0, l.jsx)(s.M14, {
          type: "critical",
          children: f.intl.string(f.t.IrYX19)
        }), (0, l.jsx)(s.FXm, {
          required: true,
          label: f.intl.string(null != k ? f.t["+KCLVl"] : f.t.w4Ivys),
          value: T,
          options: B.map(t => (function(t) {
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
          className: a()(m.reasonFreeText, {
            [m.hidden]: "other" !== T
          }),
          children: (0, l.jsx)(s.Kx8, {
            maxLength: b.GNZ,
            onChange: L,
            value: null != _ ? _ : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(s.q4e, {
        label: f.intl.string(null != k ? f.t.ERSM8P : f.t["8l3W09"]),
        options: x(),
        value: E,
        onChange: X
      })]
    })
  })
}