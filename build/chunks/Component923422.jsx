/** Chunk was on 2535 **/
/** chunk id: 923422, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => D
}), require("./388685.js"), require("./290780.js"), require("./539854.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk386506 = require("./386506.js"),
  Chunk366953 = require("./366953.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk991346 = require("./991346.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk606669 = require("./606669.jsx"),
  Chunk53432 = require("./53432.jsx"),
  Chunk74869 = require("./74869.jsx"),
  Chunk45570 = require("./45570.jsx"),
  Chunk478057 = require("./478057.jsx"),
  Chunk308512 = require("./308512.jsx"),
  Chunk594791 = require("./594791.jsx"),
  Chunk393431 = require("./393431.jsx"),
  Chunk69021 = require("./69021.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let D = (0, Chunk108843.Z)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n,
    onInteraction: s
  } = e, [c, D] = a.useState(false), x = (0, v.Z)(), I = (0, h.Z)(), T = (0, f.Z)(), C = (0, y.Z)(), m = (0, A.Z)(), L = (0, j.Z)(), R = (0, S.Z)(), Z = (0, N.Z)(), k = (0, P.Z)(), {
    analyticsLocations: V
  } = (0, u.ZP)(), M = a.useMemo(() => (0, g.j)(), []);
  async function B() {
    try {
      D(true), await (0, d.bF)(), window.location.reload(true)
    } catch (e) {
      D(false)
    }
  }
  let U = (0, p.wy)("UserSettingsCogContextMenu"),
    G = (0, E.getWebUserSettingsByUserSettingsSections)(),
    z = (0, O.VO)(),
    F = a.useMemo(() => {
      let e = [];
      return z.forEach(t => {
        let {
          section: n,
          predicate: l
        } = t;
        n !== o.ID.HEADER && n !== o.ID.CUSTOM && n !== o.ID.DIVIDER && "logout" !== n && (null == l || l()) && (U && null == G.get(n) || (U && n === w.oAB.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t)))
      }), e
    }, [z, U, G]);
  return (0, l.jsx)(u.Gt, {
    value: V,
    children: (0, l.jsxs)(i.v2r, {
      navId: "user-settings-cog",
      onClose: r.Zy,
      "aria-label": _.intl.string(_.t.opYYHn),
      onSelect: n,
      onInteraction: s,
      children: [F.map(e => {
        var t, n;
        let {
          section: a,
          label: r,
          onClick: o
        } = e, s = a.replace(/\W/gi, "_");
        return (0, l.jsx)(i.sNh, (t = function(e) {
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
        }({
          id: s
        }, {
          label: r,
          action: () => {
            var e;
            return null != o ? o() : function(e, t, n) {
              let l = Object.values(w.oAB).filter(e => e === t)[0];
              null != l && (0, E.openUserSettings)(e, {
                section: l,
                analyticsLocations: n
              })
            }(null != (e = G.get(a)) ? e : b.n.ACCOUNT_PANEL, a, V)
          }
        }), n = n = {
          children: (e => {
            switch (e) {
              case w.oAB.GAMES:
                return x;
              case w.oAB.STREAMER_MODE:
                return I;
              case w.oAB.APPEARANCE:
                return T;
              case w.oAB.ACCESSIBILITY:
                return C;
              case w.oAB.VOICE:
                return m;
              case w.oAB.TEXT:
                return L;
              case w.oAB.EXPERIMENTS:
                return R;
              case w.oAB.DEVELOPER_OPTIONS:
                return Z;
              default:
                return null
            }
          })(a)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), s)
      }), e.user.isStaff() && k, e.user.isStaff() && M.length > 0 ? (0, l.jsx)(i.sNh, {
        label: "Build Overrides",
        id: "build_overrides",
        children: (0, l.jsx)(i.kSQ, {
          children: M.map(e => (0, l.jsx)(i.k5B, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? true : t.id) === e.id,
            action: async () => {
              (null == t ? true : t.id) !== e.id && 200 === (await (0, d.f0)(e.payload)).status && window.location.reload(true)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, l.jsx)(i.kSQ, {
        children: (0, l.jsx)(i.sNh, {
          id: "clear-build-override",
          disabled: c,
          label: _.intl.string(_.t["/Nz9rY"]),
          action: B,
          color: "danger"
        })
      }) : null]
    })
  })
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.USER_SETTINGS_MENU])