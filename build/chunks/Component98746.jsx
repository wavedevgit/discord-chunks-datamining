/** Chunk was on 43350 **/
/** chunk id: 98746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
let S = y()[1].value,
  x = y()[0].value;

function C(e) {
  let {
    guildId: t,
    user: n,
    location: i,
    userIds: v,
    onBanMultiple: C,
    transitionState: P,
    onClose: k,
    canBulkBan: R = false,
    modReportId: _
  } = e, [E, Z] = l.useState(null != _ ? x : S), [M, w] = l.useState(""), [T, D] = l.useState(null), {
    isModReportClosed: N,
    isModReport: I
  } = (0, s.cj)([g.Z], () => {
    let e = g.Z.getChannel(_);
    return {
      isModReportClosed: null == e ? true : e.isArchivedThread(),
      isModReport: null == e ? true : e.isModeratorReportChannel()
    }
  }), [A, K] = l.useState(false), [U, Y] = l.useState(false), F = (0, p.sE)(t, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: v
  }), B = l.useCallback(() => {
    let e = null != T ? T : M;
    if (null != C) {
      if (!(null != v && (null == v ? true : v.size) > 0 && R) || A) return;
      if ("" === M.trim() && !A) return void K(true);
      C(t, [...v], E, e)
    } else {
      if (null == n) return;
      d.Z.banUser(t, null == n ? true : n.id, E, e, _).then(() => {
        U && null != _ && b.Z.resolveFlag(_)
      })
    }
    F(p.jQ.BAN), k()
  }, [T, M, C, F, k, v, R, A, t, E, n, _, U]), X = l.useCallback(e => {
    Z(e)
  }, []), q = l.useCallback(e => {
    let {
      value: t
    } = e;
    w(t), K(false), D(null)
  }, []), G = l.useCallback(e => {
    D(e), A && K(false)
  }, [A]), J = I && !N && null != _, L = [{
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
  }], W = (() => {
    if (null != C && null != v) return j.intl.formatToPlainString(j.t.HVJexc, {
      count: null == v ? true : v.size
    });
    if (null == n) return "";
    let e = h.ZP.getName(t, null, n);
    return j.intl.formatToPlainString(null != _ ? j.t.WDR8XV : j.t.jeKpoq, {
      username: "@".concat(e)
    })
  })(), H = null == _ ? null : j.intl.string(j.t.pQjhIC);
  return (0, r.jsx)(o.Modal, {
    onClose: k,
    transitionState: P,
    title: W,
    subtitle: null != H ? H : true,
    actions: (() => {
      let e = [];
      return I || e.push({
        variant: "secondary",
        text: j.intl.string(j.t["ETE/oK"]),
        onClick: k
      }), e.push({
        variant: "critical-primary",
        text: j.intl.string(j.t["5MBJ5O"]),
        onClick: B
      }), e
    })(),
    actionBarInput: J ? (0, r.jsx)(c.XZJ, {
      checked: U,
      onChange: e => Y(e),
      label: j.intl.string(f.default["8yIKen"])
    }) : true,
    children: (0, r.jsxs)(c.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [A && (0, r.jsx)(c.kzN, {
          className: m.error,
          children: j.intl.string(j.t.IrYX19)
        }), (0, r.jsx)(u.Gu, {
          required: true,
          label: j.intl.string(null != _ ? j.t["+KCLVl"] : j.t.w4Ivys),
          className: m.radioGroup,
          value: M,
          options: L.map(e => {
            var t, n;
            return t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({}, e), n = n = {
              radioBarClassName: m.radioItem
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t
          }),
          onChange: q,
          withTransparentBackground: true
        }), (0, r.jsx)("div", {
          className: a()(m.reasonFreeText, {
            [m.hidden]: "other" !== M
          }),
          children: (0, r.jsx)(c.Kx8, {
            maxLength: O.GNZ,
            onChange: G,
            value: null != T ? T : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, r.jsx)(c.q4e, {
        label: j.intl.string(null != _ ? j.t.ERSM8P : j.t["8l3W09"]),
        options: y(),
        value: E,
        onChange: X
      })]
    })
  })
}