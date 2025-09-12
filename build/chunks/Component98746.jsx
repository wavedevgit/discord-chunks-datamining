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
let y = x()[1].value,
  C = x()[0].value;

function S(t) {
  let {
    guildId: e,
    user: n,
    location: i,
    userIds: v,
    onBanMultiple: S,
    transitionState: _,
    onClose: P,
    canBulkBan: k = false,
    modReportId: R
  } = t, [E, T] = l.useState(null != R ? C : y), [Z, M] = l.useState(""), [w, N] = l.useState(null), {
    isModReportClosed: D,
    isModReport: I
  } = (0, o.cj)([b.Z], () => {
    let t = b.Z.getChannel(R);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [A, K] = l.useState(false), [U, Y] = l.useState(false), F = (0, p.sE)(e, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: v
  }), J = l.useCallback(() => {
    let t = null != w ? w : Z;
    if (null != S) {
      if (!(null != v && (null == v ? true : v.size) > 0 && k) || A) return;
      if ("" === Z.trim() && !A) return void K(true);
      S(e, [...v], E, t)
    } else {
      if (null == n) return;
      d.Z.banUser(e, null == n ? true : n.id, E, t, R).then(() => {
        U && null != R && g.Z.resolveFlag(R)
      })
    }
    F(p.jQ.BAN), P()
  }, [w, Z, S, F, P, v, k, A, e, E, n, R, U]), W = l.useCallback(t => {
    T(t)
  }, []), B = l.useCallback(t => {
    let {
      value: e
    } = t;
    M(e), K(false), N(null)
  }, []), X = l.useCallback(t => {
    N(t), A && K(false)
  }, [A]), G = I && !D && null != R, L = [{
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
  }], q = (() => {
    if (null != S && null != v) return j.intl.formatToPlainString(j.t.HVJexc, {
      count: null == v ? true : v.size
    });
    if (null == n) return "";
    let t = h.ZP.getName(e, null, n);
    return j.intl.formatToPlainString(null != R ? j.t.WDR8XV : j.t.jeKpoq, {
      username: "@".concat(t)
    })
  })(), H = null == R ? null : j.intl.string(j.t.pQjhIC);
  return (0, r.jsx)(s.Modal, {
    onClose: P,
    transitionState: _,
    title: q,
    subtitle: null != H ? H : true,
    actions: (() => {
      let t = [];
      return I || t.push({
        variant: "secondary",
        text: j.intl.string(j.t["ETE/oK"]),
        onClick: P
      }), t.push({
        variant: "critical-primary",
        text: j.intl.string(j.t["5MBJ5O"]),
        onClick: J
      }), t
    })(),
    actionBarInput: G ? (0, r.jsx)(c.XZJ, {
      checked: U,
      onChange: t => Y(t),
      label: j.intl.string(O.default["8yIKen"])
    }) : true,
    children: (0, r.jsxs)(c.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsxs)(c.xJW, {
          titleClassName: f.title,
          title: (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: j.intl.string(null != R ? j.t["+KCLVl"] : j.t.w4Ivys)
          }),
          children: [A && (0, r.jsx)(c.kzN, {
            className: f.error,
            children: j.intl.string(j.t.IrYX19)
          }), (0, r.jsx)(u.Gu, {
            className: f.radioGroup,
            value: Z,
            options: L.map(t => {
              var e, n;
              return e = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                  }))), r.forEach(function(e) {
                    var r;
                    r = n[e], e in t ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : t[e] = r
                  })
                }
                return t
              }({}, t), n = n = {
                radioBarClassName: f.radioItem
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t);
                  n.push.apply(n, r)
                }
                return n
              })(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }), e
            }),
            onChange: B,
            withTransparentBackground: true
          })]
        }), (0, r.jsx)("div", {
          className: a()(f.reasonFreeText, {
            [f.hidden]: "other" !== Z
          }),
          children: (0, r.jsx)(c.Kx8, {
            maxLength: m.GNZ,
            onChange: X,
            value: null != w ? w : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, r.jsx)(c.xJW, {
        titleClassName: f.title,
        title: (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: j.intl.string(null != R ? j.t.ERSM8P : j.t["8l3W09"])
        }),
        children: (0, r.jsx)(c.q4e, {
          options: x(),
          value: E,
          onChange: W
        })
      })]
    })
  })
}