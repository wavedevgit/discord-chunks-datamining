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
  Chunk68468 = require("./68468.js"),
  Chunk272567 = require("./272567.js");

function j() {
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
let C = j()[1].value,
  S = j()[0].value;

function k(t) {
  let {
    guildId: e,
    user: n,
    location: r,
    userIds: h,
    onBanMultiple: k,
    transitionState: y,
    onClose: Z,
    canBulkBan: M = false,
    modReportId: O
  } = t, [T, K] = i.useState(null != O ? S : C), [R, w] = i.useState(""), [U, D] = i.useState(null), {
    isModReportClosed: E,
    isModReport: F
  } = (0, s.cj)([v.Z], () => {
    let t = v.Z.getChannel(O);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [I, P] = i.useState(false), [Y, A] = i.useState(false), X = (0, d.sE)(e, {
    location: r,
    targetUserId: null == n ? true : n.id,
    targets: h
  }), _ = i.useCallback(() => {
    let t = null != U ? U : R;
    if (null != k) {
      if (!(null != h && (null == h ? true : h.size) > 0 && M) || I) return;
      if ("" === R.trim() && !I) return void P(true);
      k(e, [...h], T, t)
    } else {
      if (null == n) return;
      c.Z.banUser(e, null == n ? true : n.id, T, t, O).then(() => {
        Y && null != O && g.Z.resolveFlag(O)
      })
    }
    X(d.jQ.BAN), Z()
  }, [U, R, k, X, Z, h, M, I, e, T, n, O, Y]), H = i.useCallback(t => {
    K(t)
  }, []), q = i.useCallback(t => {
    w(t), P(false), D(null)
  }, []), B = i.useCallback(t => {
    D(t), I && P(false)
  }, [I]), L = F && !E && null != O, N = [{
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
  }], J = (() => {
    if (null != k && null != h) return f.intl.formatToPlainString(f.t.HVJexf, {
      count: null == h ? true : h.size
    });
    if (null == n) return "";
    let t = b.ZP.getName(e, null, n);
    return f.intl.formatToPlainString(null != O ? f.t.WDR8Xd : f.t.jeKpok, {
      username: "@".concat(t)
    })
  })(), V = null == O ? null : f.intl.string(f.t.pQjhIK);
  return (0, l.jsx)(u.Modal, {
    onClose: Z,
    transitionState: y,
    title: J,
    subtitle: null != V ? V : true,
    actions: (() => {
      let t = [];
      return F || t.push({
        variant: "secondary",
        text: f.intl.string(f.t["ETE/oC"]),
        onClick: Z
      }), t.push({
        variant: "critical-primary",
        text: f.intl.string(f.t["5MBJ5M"]),
        onClick: _
      }), t
    })(),
    actionBarInput: L ? (0, l.jsx)(o.Checkbox, {
      checked: Y,
      onChange: t => A(t),
      label: f.intl.string(m.default["8yIKem"])
    }) : true,
    children: (0, l.jsxs)(o.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [I && (0, l.jsx)(o.M14, {
          type: "critical",
          children: f.intl.string(f.t.IrYX1y)
        }), (0, l.jsx)(o.FXm, {
          required: true,
          label: f.intl.string(null != O ? f.t["+KCLVp"] : f.t.w4Ivys),
          value: R,
          options: N.map(t => (function(t) {
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
          className: a()(x.reasonFreeText, {
            [x.hidden]: "other" !== R
          }),
          children: (0, l.jsx)(o.Kx8, {
            maxLength: p.GNZ,
            onChange: B,
            value: null != U ? U : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(o.q4e, {
        label: f.intl.string(null != O ? f.t.ERSM8H : f.t["8l3W0y"]),
        options: j(),
        value: T,
        onChange: H
      })]
    })
  })
}