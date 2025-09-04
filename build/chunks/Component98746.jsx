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
  C = f()[0].value;

function S(t) {
  let {
    guildId: e,
    user: n,
    location: i,
    userIds: b,
    onBanMultiple: S,
    transitionState: _,
    onClose: P,
    canBulkBan: R = false,
    modReportId: T
  } = t, [k, E] = l.useState(null != T ? C : y), [M, Z] = l.useState(""), [w, N] = l.useState(null), {
    isModReportClosed: D,
    isModReport: I
  } = (0, o.cj)([v.Z], () => {
    let t = v.Z.getChannel(T);
    return {
      isModReportClosed: null == t ? true : t.isArchivedThread(),
      isModReport: null == t ? true : t.isModeratorReportChannel()
    }
  }), [A, K] = l.useState(false), [U, Y] = l.useState(false), F = (0, p.sE)(e, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: b
  }), W = l.useCallback(() => {
    let t = null != w ? w : M;
    if (null != S) {
      if (!(null != b && (null == b ? true : b.size) > 0 && R) || A) return;
      if ("" === M.trim() && !A) return void K(true);
      S(e, [...b], k, t)
    } else {
      if (null == n) return;
      d.Z.banUser(e, null == n ? true : n.id, k, t, T).then(() => {
        U && null != T && g.Z.resolveFlag(T)
      })
    }
    F(p.jQ.BAN), P()
  }, [w, M, S, F, P, b, R, A, e, k, n, T, U]), B = l.useCallback(t => {
    E(t)
  }, []), J = l.useCallback(t => {
    let {
      value: e
    } = t;
    Z(e), K(false), N(null)
  }, []), q = l.useCallback(t => {
    N(t), A && K(false)
  }, [A]), G = I && !D && null != T, L = [{
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
  }], X = (() => {
    if (null != S && null != b) return j.intl.formatToPlainString(j.t.HVJexc, {
      count: null == b ? true : b.size
    });
    if (null == n) return "";
    let t = h.ZP.getName(e, null, n);
    return j.intl.formatToPlainString(null != T ? j.t.WDR8XV : j.t.jeKpoq, {
      username: "@".concat(t)
    })
  })(), H = null == T ? null : j.intl.string(j.t.pQjhIC);
  return (0, r.jsx)(s.Modal, {
    onClose: P,
    transitionState: _,
    title: X,
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
        onClick: W
      }), t
    })(),
    actionBarInput: G ? (0, r.jsx)(u.$q, {
      value: U,
      onChange: (t, e) => Y(e),
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: j.intl.string(x.default["8yIKen"])
      })
    }) : true,
    children: (0, r.jsxs)(c.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsxs)(c.xJW, {
          titleClassName: O.title,
          title: (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: j.intl.string(null != T ? j.t["+KCLVl"] : j.t.w4Ivys)
          }),
          children: [A && (0, r.jsx)(c.kzN, {
            className: O.error,
            children: j.intl.string(j.t.IrYX19)
          }), (0, r.jsx)(u.Gu, {
            className: O.radioGroup,
            value: M,
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
                radioBarClassName: O.radioItem
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
            onChange: J,
            withTransparentBackground: true
          })]
        }), (0, r.jsx)("div", {
          className: a()(O.reasonFreeText, {
            [O.hidden]: "other" !== M
          }),
          children: (0, r.jsx)(c.Kx8, {
            maxLength: m.GNZ,
            onChange: q,
            value: null != w ? w : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, r.jsx)(c.xJW, {
        titleClassName: O.title,
        title: (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: j.intl.string(null != T ? j.t.ERSM8P : j.t["8l3W09"])
        }),
        children: (0, r.jsx)(c.q4e, {
          options: f(),
          value: k,
          onChange: B
        })
      })]
    })
  })
}