/** Chunk was on 43350 **/
/** chunk id: 98746, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk910693 = require("./910693.js"),
  Chunk501517 = require("./501517.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk130883 = require("./130883.js"),
  Chunk389999 = require("./389999.js");

function f() {
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
let y = f()[1].value,
  O = f()[0].value;

function C(t) {
  let {
    guildId: e,
    user: n,
    location: i,
    userIds: v,
    onBanMultiple: C,
    transitionState: S,
    onClose: k,
    canBulkBan: P = false,
    modReportId: Z
  } = t, [w, _] = r.useState(null != Z ? O : y), [T, I] = r.useState(""), [M, N] = r.useState(null), {
    isModReportClosed: D,
    isModReport: K
  } = (0, o.cj)([g.Z], () => {
    let t = g.Z.getChannel(Z);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [R, E] = r.useState(false), [U, Y] = r.useState(false), F = (0, d.sE)(e, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: v
  }), J = r.useCallback(() => {
    let t = null != M ? M : T;
    if (null != C) {
      if (!(null != v && (null == v ? true : v.size) > 0 && P) || R) return;
      if ("" === T.trim() && !R) return void E(true);
      C(e, [...v], w, t)
    } else {
      if (null == n) return;
      c.Z.banUser(e, null == n ? true : n.id, w, t, Z).then(() => {
        U && null != Z && p.Z.resolveFlag(Z)
      })
    }
    F(d.jQ.BAN), k()
  }, [M, T, C, F, k, v, P, R, e, w, n, Z, U]), X = r.useCallback(t => {
    _(t)
  }, []), A = r.useCallback(t => {
    let {
      value: e
    } = t;
    I(e), E(false), N(null)
  }, []), B = r.useCallback(t => {
    N(t), R && E(false)
  }, [R]), W = K && !D && null != Z, q = [{
    name: h.intl.string(h.t.tamLhY),
    value: h.intl.string(h.t.tamLhY)
  }, {
    name: h.intl.string(h.t.UmxjMj),
    value: h.intl.string(h.t.UmxjMj)
  }, {
    name: h.intl.string(h.t.EXY1d3),
    value: h.intl.string(h.t.EXY1d3)
  }, {
    name: h.intl.string(h.t.BcZTKi),
    value: "other"
  }], G = (() => {
    if (null != C && null != v) return h.intl.formatToPlainString(h.t.HVJexc, {
      count: null == v ? true : v.size
    });
    if (null == n) return "";
    let t = b.ZP.getName(e, null, n);
    return h.intl.formatToPlainString(null != Z ? h.t.WDR8XV : h.t.jeKpoq, {
      username: "@".concat(t)
    })
  })(), H = null == Z ? null : h.intl.string(h.t.pQjhIC);
  return (0, l.jsx)(s.Modal, {
    onClose: k,
    transitionState: S,
    title: G,
    subtitle: null != H ? H : true,
    actions: (() => {
      let t = [];
      return K || t.push({
        variant: "secondary",
        text: h.intl.string(h.t["ETE/oK"]),
        onClick: k
      }), t.push({
        variant: "critical-primary",
        text: h.intl.string(h.t["5MBJ5O"]),
        onClick: J
      }), t
    })(),
    actionBarInput: W ? (0, l.jsx)(u.XZJ, {
      value: U,
      onChange: (t, e) => Y(e),
      children: (0, l.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: h.intl.string(j.default["8yIKen"])
      })
    }) : true,
    children: (0, l.jsxs)(u.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, l.jsxs)(u.xJW, {
          titleClassName: x.title,
          title: (0, l.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: h.intl.string(null != Z ? h.t["+KCLVl"] : h.t.w4Ivys)
          }),
          children: [R && (0, l.jsx)(u.kzN, {
            className: x.error,
            children: h.intl.string(h.t.IrYX19)
          }), (0, l.jsx)(u.FXm, {
            className: x.radioGroup,
            value: T,
            options: q.map(t => {
              var e, n;
              return e = function(t) {
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
              }({}, t), n = n = {
                radioBarClassName: x.radioItem
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(t);
                  n.push.apply(n, l)
                }
                return n
              })(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }), e
            }),
            onChange: A,
            withTransparentBackground: true
          })]
        }), (0, l.jsx)("div", {
          className: a()(x.reasonFreeText, {
            [x.hidden]: "other" !== T
          }),
          children: (0, l.jsx)(u.Kx8, {
            maxLength: m.GNZ,
            onChange: B,
            value: null != M ? M : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(u.xJW, {
        titleClassName: x.title,
        title: (0, l.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: h.intl.string(null != Z ? h.t.ERSM8P : h.t["8l3W09"])
        }),
        children: (0, l.jsx)(u.q4e, {
          options: f(),
          value: w,
          onChange: X
        })
      })]
    })
  })
}