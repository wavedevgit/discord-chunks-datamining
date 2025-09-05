/** Chunk was on 43350 **/
/** chunk id: 98746, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
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

function y() {
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
let O = y()[1].value,
  C = y()[0].value;

function S(t) {
  let {
    guildId: e,
    user: n,
    location: i,
    userIds: b,
    onBanMultiple: S,
    transitionState: k,
    onClose: P,
    canBulkBan: w = false,
    modReportId: Z
  } = t, [_, T] = r.useState(null != Z ? C : O), [I, M] = r.useState(""), [N, D] = r.useState(null), {
    isModReportClosed: K,
    isModReport: R
  } = (0, o.cj)([v.Z], () => {
    let t = v.Z.getChannel(Z);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [E, U] = r.useState(false), [Y, A] = r.useState(false), B = (0, p.sE)(e, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: b
  }), F = r.useCallback(() => {
    let t = null != N ? N : I;
    if (null != S) {
      if (!(null != b && (null == b ? true : b.size) > 0 && w) || E) return;
      if ("" === I.trim() && !E) return void U(true);
      S(e, [...b], _, t)
    } else {
      if (null == n) return;
      d.Z.banUser(e, null == n ? true : n.id, _, t, Z).then(() => {
        Y && null != Z && g.Z.resolveFlag(Z)
      })
    }
    B(p.jQ.BAN), P()
  }, [N, I, S, B, P, b, w, E, e, _, n, Z, Y]), J = r.useCallback(t => {
    T(t)
  }, []), q = r.useCallback(t => {
    let {
      value: e
    } = t;
    M(e), U(false), D(null)
  }, []), G = r.useCallback(t => {
    D(t), E && U(false)
  }, [E]), W = R && !K && null != Z, X = [{
    name: j.intl.string(j.t.tamLhY),
    value: j.intl.string(j.t.tamLhY)
  }, {
    name: j.intl.string(j.t.UmxjMj),
    value: j.intl.string(j.t.UmxjMj)
  }, {
    name: j.intl.string(j.t.EXY1d3),
    value: j.intl.string(j.t.EXY1d3)
  }, {
    name: j.intl.string(j.t.BcZTKi),
    value: "other"
  }], H = (() => {
    if (null != S && null != b) return j.intl.formatToPlainString(j.t.HVJexc, {
      count: null == b ? true : b.size
    });
    if (null == n) return "";
    let t = h.ZP.getName(e, null, n);
    return j.intl.formatToPlainString(null != Z ? j.t.WDR8XV : j.t.jeKpoq, {
      username: "@".concat(t)
    })
  })(), L = null == Z ? null : j.intl.string(j.t.pQjhIC);
  return (0, l.jsx)(s.Modal, {
    onClose: P,
    transitionState: k,
    title: H,
    subtitle: null != L ? L : true,
    actions: (() => {
      let t = [];
      return R || t.push({
        variant: "secondary",
        text: j.intl.string(j.t["ETE/oK"]),
        onClick: P
      }), t.push({
        variant: "critical-primary",
        text: j.intl.string(j.t["5MBJ5O"]),
        onClick: F
      }), t
    })(),
    actionBarInput: W ? (0, l.jsx)(u.$q, {
      value: Y,
      onChange: (t, e) => A(e),
      children: (0, l.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: j.intl.string(x.default["8yIKen"])
      })
    }) : true,
    children: (0, l.jsxs)(c.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, l.jsxs)(c.xJW, {
          titleClassName: f.title,
          title: (0, l.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: j.intl.string(null != Z ? j.t["+KCLVl"] : j.t.w4Ivys)
          }),
          children: [E && (0, l.jsx)(c.kzN, {
            className: f.error,
            children: j.intl.string(j.t.IrYX19)
          }), (0, l.jsx)(u.Gu, {
            className: f.radioGroup,
            value: I,
            options: X.map(t => {
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
                radioBarClassName: f.radioItem
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
            onChange: q,
            withTransparentBackground: true
          })]
        }), (0, l.jsx)("div", {
          className: a()(f.reasonFreeText, {
            [f.hidden]: "other" !== I
          }),
          children: (0, l.jsx)(c.Kx8, {
            maxLength: m.GNZ,
            onChange: G,
            value: null != N ? N : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(c.xJW, {
        titleClassName: f.title,
        title: (0, l.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: j.intl.string(null != Z ? j.t.ERSM8P : j.t["8l3W09"])
        }),
        children: (0, l.jsx)(c.q4e, {
          options: y(),
          value: _,
          onChange: J
        })
      })]
    })
  })
}