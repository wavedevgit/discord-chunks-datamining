/** Chunk was on 2535 **/
/** chunk id: 923422, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
let T = (0, Chunk108843.Z)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n,
    onInteraction: s
  } = e, [c, T] = l.useState(false), w = (0, v.Z)(), x = (0, h.Z)(), C = (0, f.Z)(), D = (0, y.Z)(), m = (0, A.Z)(), L = (0, j.Z)(), Z = (0, S.Z)(), R = (0, N.Z)(), k = (0, P.Z)(), {
    analyticsLocations: V
  } = (0, u.ZP)(), M = l.useMemo(() => (0, g.j)(), []);
  async function B() {
    try {
      T(true), await (0, d.bF)(), window.location.reload(true)
    } catch (e) {
      T(false)
    }
  }
  let U = (0, p.gj)("UserSettingsCogContextMenu"),
    G = (0, E.getWebUserSettingsByUserSettingsSections)(),
    F = (0, O.VO)(),
    Y = l.useMemo(() => {
      let e = [];
      if (F.forEach(t => {
          let {
            section: n,
            predicate: i
          } = t;
          n !== o.ID.HEADER && n !== o.ID.CUSTOM && n !== o.ID.DIVIDER && "logout" !== n && (null == i || i()) && null != G.get(n) && (n === I.oAB.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t))
        }), U) {
        let t = e.findIndex(e => e.section === I.oAB.NOTIFICATIONS),
          n = e.findIndex(e => e.section === I.oAB.CONNECTIONS);
        if (false !== t && false !== n && t > n) {
          let [i] = e.splice(t, 1);
          e.splice(n + 1, 0, i)
        }
      }
      return e
    }, [F, G, U]);
  return (0, i.jsx)(u.Gt, {
    value: V,
    children: (0, i.jsxs)(a.v2r, {
      navId: "user-settings-cog",
      onClose: r.Zy,
      "aria-label": _.intl.string(_.t.opYYHn),
      onSelect: n,
      onInteraction: s,
      children: [Y.map(e => {
        var t, n;
        let {
          section: l,
          label: r,
          onClick: o
        } = e, s = l.replace(/\W/gi, "_");
        return (0, i.jsx)(a.sNh, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
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
              let i = Object.values(I.oAB).filter(e => e === t)[0];
              null != i && (0, E.openUserSettings)(e, {
                section: i,
                analyticsLocations: n
              })
            }(null != (e = G.get(l)) ? e : b.n.ACCOUNT_PANEL, l, V)
          }
        }), n = n = {
          children: (e => {
            switch (e) {
              case I.oAB.GAMES:
                return w;
              case I.oAB.STREAMER_MODE:
                return x;
              case I.oAB.APPEARANCE:
                return C;
              case I.oAB.ACCESSIBILITY:
                return D;
              case I.oAB.VOICE:
                return m;
              case I.oAB.TEXT:
                return L;
              case I.oAB.EXPERIMENTS:
                return Z;
              case I.oAB.DEVELOPER_OPTIONS:
                return R;
              default:
                return null
            }
          })(l)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), s)
      }), e.user.isStaff() && k, e.user.isStaff() && M.length > 0 ? (0, i.jsx)(a.sNh, {
        label: "Build Overrides",
        id: "build_overrides",
        children: (0, i.jsx)(a.kSQ, {
          children: M.map(e => (0, i.jsx)(a.k5B, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? true : t.id) === e.id,
            action: async () => {
              (null == t ? true : t.id) !== e.id && 200 === (await (0, d.f0)(e.payload)).status && window.location.reload(true)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, i.jsx)(a.kSQ, {
        children: (0, i.jsx)(a.sNh, {
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