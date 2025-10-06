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
let x = y()[1].value,
  S = y()[0].value;

function C(e) {
  let {
    guildId: t,
    user: n,
    location: i,
    userIds: v,
    onBanMultiple: C,
    transitionState: k,
    onClose: P,
    canBulkBan: Z = false,
    modReportId: w
  } = e, [_, I] = r.useState(null != w ? S : x), [M, T] = r.useState(""), [D, K] = r.useState(null), {
    isModReportClosed: R,
    isModReport: E
  } = (0, s.cj)([g.Z], () => {
    let e = g.Z.getChannel(w);
    return {
      isModReportClosed: null == e ? true : e.isArchivedThread(),
      isModReport: null == e ? true : e.isModeratorReportChannel()
    }
  }), [N, U] = r.useState(false), [Y, A] = r.useState(false), B = (0, p.sE)(t, {
    location: i,
    targetUserId: null == n ? true : n.id,
    targets: v
  }), F = r.useCallback(() => {
    let e = null != D ? D : M;
    if (null != C) {
      if (!(null != v && (null == v ? true : v.size) > 0 && Z) || N) return;
      if ("" === M.trim() && !N) return void U(true);
      C(t, [...v], _, e)
    } else {
      if (null == n) return;
      d.Z.banUser(t, null == n ? true : n.id, _, e, w).then(() => {
        Y && null != w && b.Z.resolveFlag(w)
      })
    }
    B(p.jQ.BAN), P()
  }, [D, M, C, B, P, v, Z, N, t, _, n, w, Y]), X = r.useCallback(e => {
    I(e)
  }, []), q = r.useCallback(e => {
    let {
      value: t
    } = e;
    T(t), U(false), K(null)
  }, []), G = r.useCallback(e => {
    K(e), N && U(false)
  }, [N]), J = E && !R && null != w, H = [{
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
  }], L = (() => {
    if (null != C && null != v) return j.intl.formatToPlainString(j.t.HVJexc, {
      count: null == v ? true : v.size
    });
    if (null == n) return "";
    let e = h.ZP.getName(t, null, n);
    return j.intl.formatToPlainString(null != w ? j.t.WDR8XV : j.t.jeKpoq, {
      username: "@".concat(e)
    })
  })(), V = null == w ? null : j.intl.string(j.t.pQjhIC);
  return (0, l.jsx)(o.Modal, {
    onClose: P,
    transitionState: k,
    title: L,
    subtitle: null != V ? V : true,
    actions: (() => {
      let e = [];
      return E || e.push({
        variant: "secondary",
        text: j.intl.string(j.t["ETE/oK"]),
        onClick: P
      }), e.push({
        variant: "critical-primary",
        text: j.intl.string(j.t["5MBJ5O"]),
        onClick: F
      }), e
    })(),
    actionBarInput: J ? (0, l.jsx)(c.XZJ, {
      checked: Y,
      onChange: e => A(e),
      label: j.intl.string(m.default["8yIKen"])
    }) : true,
    children: (0, l.jsxs)(c.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, l.jsxs)(c.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [N && (0, l.jsx)(c.kzN, {
          className: O.error,
          children: j.intl.string(j.t.IrYX19)
        }), (0, l.jsx)(u.Gu, {
          required: true,
          label: j.intl.string(null != w ? j.t["+KCLVl"] : j.t.w4Ivys),
          className: O.radioGroup,
          value: M,
          options: H.map(e => {
            var t, n;
            return t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                  var l;
                  l = n[t], t in e ? Object.defineProperty(e, t, {
                    value: l,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = l
                })
              }
              return e
            }({}, e), n = n = {
              radioBarClassName: O.radioItem
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t
          }),
          onChange: q,
          withTransparentBackground: true
        }), (0, l.jsx)("div", {
          className: a()(O.reasonFreeText, {
            [O.hidden]: "other" !== M
          }),
          children: (0, l.jsx)(c.Kx8, {
            maxLength: f.GNZ,
            onChange: G,
            value: null != D ? D : "",
            rows: 5,
            autoFocus: true
          })
        })]
      }), (0, l.jsx)(c.q4e, {
        label: j.intl.string(null != w ? j.t.ERSM8P : j.t["8l3W09"]),
        options: y(),
        value: _,
        onChange: X
      })]
    })
  })
}