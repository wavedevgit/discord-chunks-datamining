/** Chunk was on 43350 **/
/** chunk id: 98746, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk764295 = require("./764295.js"),
  Chunk768716 = require("./768716.js");

function O() {
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
let f = O()[1].value,
  y = O()[0].value;

function C(t) {
  let {
    guildId: e,
    user: n,
    location: i,
    userIds: v,
    onBanMultiple: C,
    transitionState: S,
    onClose: _,
    canBulkBan: P = false,
    modReportId: R
  } = t, [T, k] = l.useState(null != R ? y : f), [E, Z] = l.useState(""), [M, w] = l.useState(null), {
    isModReportClosed: N,
    isModReport: D
  } = (0, o.cj)([g.Z], () => {
    let t = g.Z.getChannel(R);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [I, A] = l.useState(false), [K, F] = l.useState(false), U = (0, d.sE)(e, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: v
  }), Y = l.useCallback(() => {
    let t = null != M ? M : E;
    if (null != C) {
      if (!(null != v && (null == v ? true : v.size) > 0 && P) || I) return;
      if ("" === E.trim() && !I) return void A(true);
      C(e, [...v], T, t)
    } else {
      if (null == n) return;
      c.Z.banUser(e, null == n ? true : n.id, T, t, R).then(() => {
        K && null != R && p.Z.resolveFlag(R)
      })
    }
    U(d.jQ.BAN), _()
  }, [M, E, C, U, _, v, P, I, e, T, n, R, K]), J = l.useCallback(t => {
    k(t)
  }, []), W = l.useCallback(t => {
    let {
      value: e
    } = t;
    Z(e), A(false), w(null)
  }, []), X = l.useCallback(t => {
    w(t), I && A(false)
  }, [I]), B = D && !N && null != R, L = [{
    name: m.intl.string(m.t.tamLhY),
    value: m.intl.string(m.t.tamLhY)
  }, {
    name: m.intl.string(m.t.UmxjMj),
    value: m.intl.string(m.t.UmxjMj)
  }, {
    name: m.intl.string(m.t.EXY1d3),
    value: m.intl.string(m.t.EXY1d3)
  }, {
    name: m.intl.string(m.t.BcZTKi),
    value: "other"
  }], q = (() => {
    if (null != C && null != v) return m.intl.formatToPlainString(m.t.HVJexc, {
      count: null == v ? true : v.size
    });
    if (null == n) return "";
    let t = b.ZP.getName(e, null, n);
    return m.intl.formatToPlainString(null != R ? m.t.WDR8XV : m.t.jeKpoq, {
      username: "@".concat(t)
    })
  })(), G = null == R ? null : m.intl.string(m.t.pQjhIC);
  return (0, r.jsx)(s.Modal, {
    onClose: _,
    transitionState: S,
    title: q,
    subtitle: null != G ? G : true,
    actions: (() => {
      let t = [];
      return D || t.push({
        variant: "secondary",
        text: m.intl.string(m.t["ETE/oK"]),
        onClick: _
      }), t.push({
        variant: "critical-primary",
        text: m.intl.string(m.t["5MBJ5O"]),
        onClick: Y
      }), t
    })(),
    actionBarInput: B ? (0, r.jsx)(u.XZJ, {
      value: K,
      onChange: (t, e) => F(e),
      children: (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: m.intl.string(j.default["8yIKen"])
      })
    }) : true,
    children: (0, r.jsxs)(u.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, r.jsxs)(u.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsxs)(u.xJW, {
          titleClassName: x.title,
          title: (0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: m.intl.string(null != R ? m.t["+KCLVl"] : m.t.w4Ivys)
          }),
          children: [I && (0, r.jsx)(u.kzN, {
            className: x.error,
            children: m.intl.string(m.t.IrYX19)
          }), (0, r.jsx)(u.FXm, {
            className: x.radioGroup,
            value: E,
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
                radioBarClassName: x.radioItem
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
            onChange: W,
            withTransparentBackground: true
          })]
        }), (0, r.jsx)("div", {
          className: a()(x.reasonFreeText, {
            [x.hidden]: "other" !== E
          }),
          children: (0, r.jsx)(u.Kx8, {
            maxLength: h.GNZ,
            onChange: X,
            value: null != M ? M : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, r.jsx)(u.xJW, {
        titleClassName: x.title,
        title: (0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: m.intl.string(null != R ? m.t.ERSM8P : m.t["8l3W09"])
        }),
        children: (0, r.jsx)(u.q4e, {
          options: O(),
          value: T,
          onChange: J
        })
      })]
    })
  })
}